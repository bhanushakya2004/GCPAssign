

# **📚 Assignment Maker API**  
🚀 **Automate Assignment Creation & Distribution with Google Drive & Gmail API**  

## **🔹 Overview**  
This API helps teachers create and distribute assignments via **Google Drive** and **Gmail API**.  
- 🗂 **Creates an assignment folder in Google Drive**  
- 📄 **Generates an assignment details file**  
- 📧 **Emails assignment details to students**  

---

## **🛠️ Features**  
✅ **Google Drive Integration** - Creates folders & files  
✅ **Gmail API** - Sends assignment emails  
✅ **OAuth Middleware** - Secure Google authentication  

---

## **📌 API Endpoints**  

### **🔹 1. Create Assignment**  
> **URL:** `POST /api/assignments/create`  
> **Headers:** `Authorization: Bearer <OAuth_Token>`  
> **Body (JSON):**  

```json
{
  "title": "Blockchain Basics",
  "questions": [
    "Explain the concept of decentralization.",
    "What are smart contracts?"
  ],
  "deadline": "2025-04-10",
  "wordLimit": 1000,
  "studentEmails": ["student1@example.com", "student2@example.com"]
}
```

> **Response (Success):**  
```json
{
  "message": "Assignment created and email sent successfully",
  "folderId": "1J0zVCr8wJl_XWdSiM8CClvUnyGDVk-zF",
  "fileId": "1jojPdT-Y_IbHB0MC_EFBCE8VgujXtRq-"
}
```

---

## **🔑 Authentication**  
- Uses **Google OAuth 2.0**  
- Token is extracted using middleware  

> **🔹 Middleware in Action**  
```javascript
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  google.auth
    .verifyIdToken({ idToken: token, audience: CLIENT_ID })
    .then((ticket) => {
      req.user = { email: ticket.getPayload().email, access_token: token };
      next();
    })
    .catch(() => res.status(403).json({ error: "Invalid token" }));
};
```

---

## **📦 Installation & Setup**  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/bhanushakya2004/GCPAssign.git
cd GCPAssign
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Setup Environment Variables**  
Create a `.env` file and add:  
```
PORT=5000
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=your-redirect-uri
```

### **4️⃣ Start the Server**  
```bash
node src/server.js
```

---

## **📜 Tech Stack**  
- **Node.js** (Backend)  
- **Express.js** (API Framework)  
- **Google Drive API** (File Storage)  
- **Google Gmail API** (Email Sending)  
- **MongoDB** (Future Report Storage)  

---

## **📮 Contact**  
🔹 **Author:** Bhanu Shakya  
🔹 **GitHub:** [bhanushakya2004](https://github.com/bhanushakya2004)  
🔹 **Email:** try.bhanu2004@gmail.com  

---

