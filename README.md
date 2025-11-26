[![Header](https://img.shields.io/badge/Portfolio-kamran's%203D%20Showcase-brightgreen?style=for-the-badge)](https://kamran-ikram-official.vercel.app/)

# kamran's 3D Portfolio Showcase 🌟

Welcome to my creative corner on the web! 🚀 As a fresher student passionate about 3D web design and visualization, I've crafted this digital haven to showcase my journey into the world of immersive art and design. Whether you're a fellow enthusiast, a potential collaborator, or just someone who stumbled upon my space, I invite you to explore the wonders of my 3D portfolio.

## 🎨 About Me

Hey there! I'm kamran, an Software Engineer and a Web developer with a penchant for turning ideas into visually captivating experiences. Armed with a vivid imagination and a deep curiosity for all things three-dimensional, I'm on a mission to breathe life into pixels and polygons. My passion for 3D design goes beyond the screen – I aim to create virtual realms that leave a lasting impact.

## 🌐 Explore More

Ready to experience my 3D portfolio? Head over to [kamran-ikram-official.vercel.app](https://kamran-ikram-official.vercel.app/) and let the visuals speak for themselves!

## 📫 Let's Connect

I'm always excited to connect with fellow creatives and enthusiasts. Whether you have feedback, project ideas, or just want to say hi, feel free to reach out to me:

- Email: kamran.s.official032997@gmail.com
- LinkedIn: [linkedin.com/in/kamranikramofficial](https://www.linkedin.com/in/kamranikramofficial)

Let's turn imagination into reality, one pixel at a time! ✨

## 🛠 Contact API Backend

The contact form now posts to a lightweight Express server that sends confirmation emails (to you and to the visitor) and saves each submission to MongoDB.

1. Create a `.env` file (same folder as `server/index.js`) with:
   ```
   PORT=5000
   CLIENT_ORIGIN=http://localhost:5173
   MONGODB_URI=your-mongodb-connection-string
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-smtp-username
   SMTP_PASS=your-smtp-password
   MAIL_FROM="Portfolio Team" <no-reply@example.com>
   MAIL_TO=owner@example.com
   ```
2. Install dependencies once with `npm install`.
3. Start the API via `npm run server` (it defaults to port 5000) and run the Vite app separately with `npm run dev`.

Configure `VITE_API_BASE_URL` in the front-end `.env` if you deploy the backend to a different host.  