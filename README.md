🍽️ Food Recipe App (Full-Stack)

A full-stack web application that allows users to create, view, edit, and delete recipes with image uploads. Built using a modern JavaScript stack and deployed on cloud platforms.


🚀 Live Demo

🔗 Frontend: https://food-recipe-app-le18.vercel.app/
🔗 Backend API: https://food-recipe-backend-xztn.onrender.com


🎥 Demo

[Watch Demo](https://youtu.be/OlyZtF5XJqo)


✨ Features

- 📝 Create, edit, and delete recipes
- 📖 View all recipes with details
- 🖼️ Upload and store recipe images
- 🔐 User authentication (JWT-based)
- ❤️ Add to favorites (if implemented)
- 🌐 Fully deployed (Frontend + Backend)


🛠️ Tech Stack

Frontend

- React.js
- Axios
- CSS 

Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (for image uploads)
- JWT Authentication

Deployment

- Vercel (Frontend)
- Render (Backend)


⚙️ Installation & Setup

1️⃣ Clone the repository

git clone 
cd Food-recipe-app


2️⃣ Setup Backend

cd backend
npm install

Create a ".env" file:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Run backend:

npm run dev

---

3️⃣ Setup Frontend

cd frontend/food-blog-app
npm install
npm run dev


📁 Project Structure

backend/
  ├── controller/
  ├── models/
  ├── routes/
  ├── public/images/
  └── server.js

frontend/
  └── food-blog-app/
      ├── src/
      ├── components/
      └── pages/


🧠 Key Learnings

- Handling file uploads using Multer in production
- Debugging deployment issues on cloud platforms (Render)
- Managing file paths and server-side storage
- Integrating frontend and backend across different domains
- Building a complete CRUD application with authentication


⚠️ Known Limitations

- Images are stored on the server filesystem (may reset on redeploy)
- This can be improved by integrating cloud storage solutions like Cloudinary or AWS S3.


🔮 Future Improvements

- ☁️ Integrate Cloudinary or AWS S3 for image storage
- 🔍 Add search & filtering
- 🧾 Pagination for recipes
- 🎨 Improve UI/UX
- 🧪 Add unit & integration tests


🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.


📬 Contact

If you’d like to connect:

- LinkedIn: https://www.linkedin.com/in/sardar-prabhpreet-singh/

⭐ If you like this project

Give it a star ⭐ — it helps
