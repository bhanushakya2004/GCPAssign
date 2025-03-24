class Assignment {
    constructor(title, questions, deadline, wordLimit, folderId, fileId, studentEmails) {
      this.title = title;
      this.questions = questions; // Array of questions
      this.deadline = deadline;
      this.wordLimit = wordLimit;
      this.folderId = folderId;
      this.fileId = fileId;
      this.studentEmails = studentEmails; // Array of student emails
    }
  }
  
  module.exports = Assignment;
  