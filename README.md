# SimpleForm Project

## Installation

### Clone the repository and navigate to project directory:

```bash
git clone https://github.com/aman879/simpleForm
cd simpleForm
```

### Install dependencies:

```bash
npm start
```

## Firebase Configuration

### Create Firebase Service Account Credentials:

1. Go to the Firebase Console (https://console.firebase.google.com/).
2. Navigate to your project or create a new one.
3. Go to Project Settings -> Service accounts.
4. Choose `Node.js` as SDK config.
5. Click on `Generate new private key` to download your Firebase Admin SDK JSON file.

### Move Firebase Key to the Project:
1. Rename the downloaded JSON key file to `Firebase-key.json`.
2. Copy file to `Project_folder/etc/secrets/firebase-key.json`.

## Running the Server
Start the server:
```bash
node server.js
```
The server will start running at `http://localhost:3000`.
