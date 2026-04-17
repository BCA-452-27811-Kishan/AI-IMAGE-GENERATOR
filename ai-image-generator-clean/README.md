# AI Image Generator

A full-stack web application for generating AI-powered images using the ClipDrop API.

## Project Structure

```
ai-image-generator/
├── client/          # React frontend (Vite)
├── server/          # Node.js/Express backend
├── .gitignore       # Git ignore files
├── README.md        # This file
└── .env.example     # Environment variables template
```

## Features

- User authentication (signup/login)
- AI image generation using ClipDrop API
- Credit system for image generation
- Payment integration with Razorpay
- Responsive UI with Tailwind CSS

## Prerequisites

- Node.js (v18 or higher)
- MongoDB account
- ClipDrop API key
- Razorpay account

## Setup Instructions

### 1. Clone the repository
```bash
git clone <repository-url>
cd ai-image-generator
```

### 2. Server Setup

Navigate to the server directory:
```bash
cd server
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the server directory with the following variables (use `.env.example` as reference):
```env
MONGO_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret_key"
CLIPDROP_API='your_clipdrop_api_key'
RAZORPAY_KEY_ID="your_razorpay_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_key_secret"
CURRENCY="INR"
```

Start the server:
```bash
npm start
```

The server will run on `http://localhost:4000`

### 3. Client Setup

Navigate to the client directory:
```bash
cd client
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The client will run on `http://localhost:5173`

## API Endpoints

### User Routes
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user

### Image Routes
- `POST /api/image/generate-image` - Generate AI image
- `POST /api/image/payment-razorpay` - Process payment

## Technologies Used

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios
- Framer Motion

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication
- Razorpay for payments
- ClipDrop API for image generation

## Security Notes

- The `.env` file is excluded from version control (see `.gitignore`)
- Never commit `.env` files with real API keys
- Use `.env.example` as a template for your environment variables

## License

ISC
