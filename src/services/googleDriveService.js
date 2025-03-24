const { google } = require("googleapis");

const createAssignmentFolder = async (folderName, accessToken) => {
  try {
    const authClient = new google.auth.OAuth2();
    authClient.setCredentials({ access_token: accessToken });

    const drive = google.drive({ version: "v3", auth: authClient });

    // Create folder
    const folderMetadata = {
      name: folderName,
      mimeType: "application/vnd.google-apps.folder",
    };

    const folder = await drive.files.create({
      resource: folderMetadata,
      fields: "id, webViewLink",
    });

    console.log("📁 Folder Created:", folder.data);
    return folder.data;
  } catch (error) {
    console.error("❌ Google Drive Folder Error:", error.message);
    throw new Error("Failed to create Google Drive folder");
  }
};

module.exports = { createAssignmentFolder };
