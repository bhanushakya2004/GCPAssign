// // // const { google } = require("googleapis");
// // // const drive = google.drive("v3");
// // // const { db } = require("../config/firebase"); // Import Firebase Firestore

// // // const createAssignment = async (req, res) => {
// // //   try {
// // //     const { title, questions, deadline, wordLimit, studentEmails } = req.body;
// // //     const auth = req.user.access_token;
// // //     const teacherEmail = req.user.email; // 📩 Get teacher's email from middleware

// // //     // 1️⃣ Create Assignment Folder (Folder Name = Deadline)
// // //     const folderMetadata = {
// // //       name: deadline,
// // //       mimeType: "application/vnd.google-apps.folder",
// // //     };

// // //     const folder = await drive.files.create({
// // //       resource: folderMetadata,
// // //       fields: "id",
// // //       headers: { Authorization: `Bearer ${auth}` },
// // //     });

// // //     const folderId = folder.data.id;
// // //     console.log("📁 Assignment Folder Created:", folderId);

// // //     // 2️⃣ Create Assignment Info TXT File
// // //     const assignmentInfo = `
// // //       📌 Assignment Title: ${title}
// // //       📅 Deadline: ${deadline}
// // //       ✍️ Word Limit: ${wordLimit}
// // //       📖 Questions:
// // //       ${questions.map((q, index) => `  ${index + 1}. ${q}`).join("\n")}
// // //     `;

// // //     const fileMetadata = {
// // //       name: "Assignment_Details.txt",
// // //       parents: [folderId],
// // //       mimeType: "text/plain",
// // //     };

// // //     const media = {
// // //       mimeType: "text/plain",
// // //       body: assignmentInfo,
// // //     };

// // //     const file = await drive.files.create({
// // //       resource: fileMetadata,
// // //       media: media,
// // //       fields: "id",
// // //       headers: { Authorization: `Bearer ${auth}` },
// // //     });

// // //     const fileId = file.data.id;
// // //     console.log("📄 TXT File Created:", fileId);

// // //     // 3️⃣ Store in Firebase Firestore (Collection: Assignments)
// // //     const assignmentData = {
// // //       questions: questions.join("\n"), // Store questions as string
// // //       folderId: folderId,
// // //       fileId: fileId,
// // //       wordLimit: wordLimit,
// // //       studentEmails: studentEmails,
// // //     };

// // //     await db
// // //       .collection("Assignments")
// // //       .doc(teacherEmail) // Use teacher's email as doc ID
// // //       .set({ [deadline]: assignmentData }, { merge: true });

// // //     console.log("✅ Assignment Saved to Firebase");

// // //     res.json({
// // //       message: "Assignment created successfully",
// // //       folderId: folderId,
// // //       fileId: fileId,
// // //     });
// // //   } catch (error) {
// // //     console.error("❌ Error Creating Assignment:", error);
// // //     res.status(500).json({ error: "Failed to create assignment" });
// // //   }
// // // };

// // // module.exports = { createAssignment };
// // const { google } = require("googleapis");
// // const drive = google.drive("v3");
// // const { sendAssignmentEmail } = require("../services/emailService");

// // const createAssignment = async (req, res) => {
// //   try {
// //     const { title, questions, deadline, wordLimit, studentEmails } = req.body;
// //     const auth = req.user.access_token;
// //     const teacherEmail = req.user.email; // 📩 Get teacher's email from middleware

// //     // 1️⃣ Create Assignment Folder (Folder Name = Deadline)
// //     const folderMetadata = {
// //       name: deadline,
// //       mimeType: "application/vnd.google-apps.folder",
// //     };

// //     const folder = await drive.files.create({
// //       resource: folderMetadata,
// //       fields: "id",
// //       headers: { Authorization: `Bearer ${auth}` },
// //     });

// //     const folderId = folder.data.id;
// //     console.log("📁 Assignment Folder Created:", folderId);

// //     // 2️⃣ Create Assignment Info TXT File
// //     const assignmentInfo = `
// //       📌 Assignment Title: ${title}
// //       📅 Deadline: ${deadline}
// //       ✍️ Word Limit: ${wordLimit}
// //       📖 Questions:
// //       ${questions.map((q, index) => `  ${index + 1}. ${q}`).join("\n")}
// //     `;

// //     const fileMetadata = {
// //       name: "Assignment_Details.txt",
// //       parents: [folderId],
// //       mimeType: "text/plain",
// //     };

// //     const media = {
// //       mimeType: "text/plain",
// //       body: assignmentInfo,
// //     };

// //     const file = await drive.files.create({
// //       resource: fileMetadata,
// //       media: media,
// //       fields: "id",
// //       headers: { Authorization: `Bearer ${auth}` },
// //     });

// //     const fileId = file.data.id;
// //     console.log("📄 TXT File Created:", fileId);

// //     res.json({
// //       message: "Assignment created successfully",
// //       folderId: folderId,
// //       fileId: fileId,
// //     });
// //   } catch (error) {
// //     console.error("❌ Error Creating Assignment:", error);
// //     res.status(500).json({ error: "Failed to create assignment" });
// //   }
// // };

// // module.exports = { createAssignment };


// const { google } = require("googleapis");
// const drive = google.drive("v3");
// const { sendAssignmentEmail } = require("../services/emailService"); // Import email function

// const createAssignment = async (req, res) => {
//   try {
//     const { title, questions, deadline, wordLimit, studentEmails } = req.body;
//     const auth = req.user.access_token;
//     const teacherEmail = req.user.email; // 📩 Get teacher's email from middleware

//     // 1️⃣ Create Assignment Folder (Folder Name = Deadline)
//     const folderMetadata = {
//       name: deadline,
//       mimeType: "application/vnd.google-apps.folder",
//     };

//     const folder = await drive.files.create({
//       resource: folderMetadata,
//       fields: "id",
//       headers: { Authorization: `Bearer ${auth}` },
//     });

//     const folderId = folder.data.id;
//     console.log("📁 Assignment Folder Created:", folderId);

//     // 2️⃣ Create Assignment Info TXT File
//     const assignmentInfo = `
//       📌 Assignment Title: ${title}
//       📅 Deadline: ${deadline}
//       ✍️ Word Limit: ${wordLimit}
//       📖 Questions:
//       ${questions.map((q, index) => `  ${index + 1}. ${q}`).join("\n")}
//     `;

//     const fileMetadata = {
//       name: "Assignment_Details.txt",
//       parents: [folderId],
//       mimeType: "text/plain",
//     };

//     const media = {
//       mimeType: "text/plain",
//       body: assignmentInfo,
//     };

//     const file = await drive.files.create({
//       resource: fileMetadata,
//       media: media,
//       fields: "id",
//       headers: { Authorization: `Bearer ${auth}` },
//     });

//     const fileId = file.data.id;
//     console.log("📄 TXT File Created:", fileId);

//     // 3️⃣ Send Email Notification
//     console.log("📧 Sending assignment email...");
//     const assignmentDetails = {
//       title,
//       deadline,
//       wordLimit,
//       questions,
//       driveLink: `https://drive.google.com/drive/folders/${folderId}`,
//     };

//     await sendAssignmentEmail(teacherEmail, studentEmails, assignmentDetails, auth);

//     res.json({
//       message: "Assignment created and email sent successfully",
//       folderId: folderId,
//       fileId: fileId,
//     });
//   } catch (error) {
//     console.error("❌ Error Creating Assignment:", error);
//     res.status(500).json({ error: "Failed to create assignment" });
//   }
// };

// module.exports = { createAssignment };
const { google } = require("googleapis");
const drive = google.drive("v3");

const createAssignment = async (req, res) => {
  try {
    const { title, questions, deadline, wordLimit, studentEmails } = req.body;
    const auth = req.user.access_token;
    const teacherEmail = req.user.email; // 📩 Get teacher's email from middleware

    // 1️⃣ Create Assignment Folder (Folder Name = Deadline)
    const folderMetadata = {
      name: deadline,
      mimeType: "application/vnd.google-apps.folder",
    };

    const folder = await drive.files.create({
      resource: folderMetadata,
      fields: "id",
      headers: { Authorization: `Bearer ${auth}` },
    });

    const folderId = folder.data.id;
    console.log("📁 Assignment Folder Created:", folderId);

    // 2️⃣ Create Assignment Info TXT File
    const assignmentInfo = `
      📌 Assignment Title: ${title}
      📅 Deadline: ${deadline}
      ✍️ Word Limit: ${wordLimit}
      📖 Questions:
      ${questions.map((q, index) => `  ${index + 1}. ${q}`).join("\n")}
    `;

    const fileMetadata = {
      name: "Assignment_Details.txt",
      parents: [folderId],
      mimeType: "text/plain",
    };

    const media = {
      mimeType: "text/plain",
      body: assignmentInfo,
    };

    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
      headers: { Authorization: `Bearer ${auth}` },
    });

    const fileId = file.data.id;
    console.log("📄 TXT File Created:", fileId);

    // 3️⃣ Send Email Notification
    console.log("📧 Sending assignment email...");
    const assignmentDetails = {
      title,
      deadline,
      wordLimit,
      questions,
      driveLink: `https://drive.google.com/drive/folders/${folderId}`,
    };

    await sendAssignmentEmail(teacherEmail, studentEmails, assignmentDetails, auth);

    res.json({
      message: "Assignment created and email sent successfully",
      folderId: folderId,
      fileId: fileId,
    });
  } catch (error) {
    console.error("❌ Error Creating Assignment:", error);
    res.status(500).json({ error: "Failed to create assignment" });
  }
};

// ✅ Function to Send Email (Now Inside assignmentController.js)
const sendAssignmentEmail = async (teacherEmail, students, assignmentDetails, accessToken) => {
  try {
    console.log("📩 Preparing to send email...");
    console.log("📨 Sender:", teacherEmail);
    console.log("📬 Recipients:", students.join(", "));
    console.log("📄 Assignment Details:", assignmentDetails);

    const authClient = new google.auth.OAuth2();
    authClient.setCredentials({ access_token: accessToken });

    const gmail = google.gmail({ version: "v1", auth: authClient });

    const emailContent = `
      <h2>New Assignment: ${assignmentDetails.title}</h2>
      <p><strong>Deadline:</strong> ${assignmentDetails.deadline}</p>
      <p><strong>No. of Questions:</strong> ${assignmentDetails.questions.length}</p>
      <p><strong>Word Limit:</strong> ${assignmentDetails.wordLimit} words</p>
      <p><strong>Google Drive Folder:</strong> <a href="${assignmentDetails.driveLink}">Click Here</a></p>
      <p>Please submit your assignment before the deadline.</p>
    `;

    if (!students || students.length === 0) {
      throw new Error("No student emails provided");
    }

    const emailBody = [
      `From: ${teacherEmail}`,
      `To: ${students.join(", ")}`,
      `Reply-To: ${teacherEmail}`,
      "Subject: New Assignment Posted",
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=UTF-8",
      "",
      emailContent,
    ].join("\n");

    const encodedMessage = Buffer.from(emailBody)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    console.log("📤 Sending Email...");

    const response = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log("✅ Email sent successfully!", response.data);
    return { success: true };
  } catch (error) {
    console.error("❌ Email Error:", error.response?.data || error.message);
    return { success: false, error: error.message };
  }
};

// ✅ Export Controller Function
module.exports = { createAssignment };
