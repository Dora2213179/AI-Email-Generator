# AI Email Generator (Backend Focus)

This project provides a powerful **Java Spring Boot backend** for generating AI-powered email replies. It also includes a **Chrome extension** for seamless integration and a sample frontend for demonstration and testing.

---

## 🚀 Main Features

- **Java Spring Boot Backend:** Robust REST APIs for generating AI-based email replies.
- **Postman API Collection:** Easily test and explore endpoints.
- **Chrome Extension:** Use AI-generated replies directly in your browser.
- **Modular Structure:** Backend as the primary focus, with supporting extension and (optional) frontend.

---

## 📁 Folder Structure

```
AI-Email-Generator/
├── backend/      # Java Spring Boot API server
├── extension/    # Chrome extension for email reply integration
└── frontend/     # (Optional) Demo/test client for API usage
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Dora2213179/AI-Email-Generator.git
cd AI-Email-Generator
```

### 2. Backend Setup (Java Spring Boot)

- Go to the backend folder:
  ```bash
  cd backend
  ```
- Build and run the server:
  ```bash
  ./mvnw clean package
  java -jar target/*.jar
  ```
- The backend will be available at:  
  [http://localhost:8080](http://localhost:8080)

#### 🔑 Environment Variables

- Configure any required API keys or secrets in `application.properties` or as environment variables.

---

## 📖 API Reference

### Base URL

```
http://localhost:8080/api
```

### Example Endpoints

| Method | Endpoint                  | Description                        |
|--------|---------------------------|------------------------------------|
| POST   | `/api/generate-reply`     | Generate an email reply (main API) |
| GET    | `/api/status`             | Health/status check                |

#### Example: Generate a Reply

**Request:**
```http
POST /api/generate-reply
Content-Type: application/json

{
  "emailText": "Your original email content here"
}
```

**Response:**
```json
{
  "reply": "This is an AI-generated reply."
}
```

> For full API documentation and testing, use the provided Postman collection in the `backend/postman/` folder.

---

## 🧪 Testing with Postman

1. Open **Postman**.
2. Import the collection from `backend/postman/AI-Email-Generator.postman_collection.json`.
3. Set the base URL (e.g., `http://localhost:8080/api`).
4. Try the `/generate-reply` endpoint and others!

---

## 🧩 Chrome Extension

- The `extension` folder contains a Chrome extension that connects to the backend API.
- **Setup:**
  1. Update the extension’s code to point to your deployed backend URL.
  2. Go to `chrome://extensions` in your browser.
  3. Enable "Developer mode".
  4. Click "Load unpacked" and select the `extension` folder.
- Now you can generate AI replies directly from your Gmail or supported webmail!

---

## 🎯 Main Focus Areas

- **Backend API (Java Spring Boot)**
- **API exploration and testing (Postman)**
- **Browser extension integration (Chrome Extension)**

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

[MIT](LICENSE)

---

## 🙏 Credits

Project by [@Dora2213179](https://github.com/Dora2213179) and contributors.
