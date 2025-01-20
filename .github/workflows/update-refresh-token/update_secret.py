import os
import requests
from nacl.public import PublicKey, Box
from nacl.encoding import Base64Encoder
from nacl.exceptions import CryptoError

# GitHub token and repository info
repo_owner = os.getenv("GITHUB_REPOSITORY_OWNER")
repo_name = os.getenv("GITHUB_REPOSITORY")
github_token = os.getenv("GH_PAT")
secret_name = "REFRESHTOKEN"  # The secret name in GitHub

# New refresh token from environment
new_refresh_token = os.getenv("NEW_REFRESH_TOKEN")

# GitHub API endpoint to fetch public key
public_key_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/actions/secrets/public_key"
headers = {
    "Authorization": f"Bearer {github_token}",
    "Accept": "application/vnd.github+json",
}

# Fetch public key
response = requests.get(public_key_url, headers=headers)
if response.status_code != 200:
    raise Exception(f"Failed to fetch public key: {response.text}")
public_key_data = response.json()
public_key = PublicKey(public_key_data["key"], encoder=Base64Encoder)

# Encrypt the refresh token using LibSodium
try:
    box = Box(public_key, public_key)  # Create box object to encrypt
    encrypted_refresh_token = box.encrypt(new_refresh_token.encode(), encoder=Base64Encoder)
except CryptoError as e:
    raise Exception(f"Encryption failed: {str(e)}")

# Prepare payload to update the secret
encrypted_value = encrypted_refresh_token.decode()  # Convert bytes to string
key_id = public_key_data["key_id"]

# Update the secret
update_secret_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/actions/secrets/{secret_name}"
payload = {
    "encrypted_value": encrypted_value,
    "key_id": key_id
}

response = requests.put(update_secret_url, json=payload, headers=headers)
if response.status_code != 201:
    raise Exception(f"Failed to update secret: {response.text}")

print("Successfully updated the refresh token secret!")
