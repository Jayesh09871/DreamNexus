# DreamNexus

PropConnect-RealEstate is a modern real estate platform built using the MERN (MongoDB, Express.js, React, Node.js) stack. It enables users to browse, list, and manage real estate properties efficiently.

## Features

- User authentication (Signup/Login)
- Property listing with images and details
- Search and filter properties
- Contact property owners
- Admin dashboard for property management
- Responsive UI/UX

## Tech Stack

- **Frontend:** React, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Hosting:** Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/PropConnect-RealEstate.git
   cd PropConnect-RealEstate
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `server` folder with:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. Start the development server:
   ```sh
   cd server
   npm run dev
   ```

5. Start the React frontend:
   ```sh
   cd client
   npm start
   ```

## API Endpoints

- `GET /api/properties` - Fetch all properties
- `POST /api/properties` - Add a new property (Authenticated users)
- `GET /api/properties/:id` - Get property details
- `PUT /api/properties/:id` - Update property (Admin)
- `DELETE /api/properties/:id` - Delete property (Admin)
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

## Deployment

- Frontend: Vercel / Netlify
- Backend: Render / Heroku
- Database: MongoDB Atlas

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a pull request.

