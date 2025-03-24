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
  