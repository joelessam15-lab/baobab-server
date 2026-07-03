# Baobab Server

Baobab Digital Solutions API Server - A Node.js/Express-based REST API server.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/joelessam15-lab/baobab-server.git
cd baobab-server

# Install dependencies
npm install

# Start the server
npm start
```

The server will run on `http://localhost:3000`

## 📚 API Endpoints

- **GET /** - Welcome message and server status
- **GET /health** - Health check endpoint

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t baobab-server .
```

### Run Container
```bash
docker run -p 3000:3000 -e PORT=3000 baobab-server
```

## 🚂 Railway Deployment

### Prerequisites
1. Create a Railway account at [railway.app](https://railway.app)
2. Install Railway CLI (optional but recommended)

### Deploy Steps

1. **Connect Your Repository**
   - Go to Railway dashboard
   - Click "New Project" → "Deploy from GitHub repo"
   - Select `joelessam15-lab/baobab-server`
   - Click "Deploy"

2. **Railway Auto-Detection**
   - Railway will automatically detect the Node.js project
   - It will use `npm start` command from package.json
   - The Dockerfile will be used if present

3. **Environment Variables**
   - In Railway dashboard, go to "Variables"
   - Add any required variables from `.env.example`
   - Example: `PORT=3000`, `NODE_ENV=production`

4. **Access Your Server**
   - Railway will generate a public URL automatically
   - Your API will be accessible at the provided domain

### Useful Railway Commands (CLI)
```bash
# Login to Railway
railway login

# Link project
railway link

# Deploy
railway up

# View logs
railway logs

# Set environment variables
railway variable set PORT=3000
```

## 📁 Project Structure

```
baobab-server/
├── server.js          # Main Express application
├── package.json       # Project dependencies and scripts
├── Dockerfile         # Docker configuration
├── .env.example       # Environment variables template
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🔧 Configuration

Copy `.env.example` to `.env` and update values as needed:

```bash
cp .env.example .env
```

## 📝 Development

To run the server in development mode:

```bash
# Install dev dependencies (optional)
npm install

# Start the server
npm start
```

The server will start on port 3000 (or PORT environment variable if set).

## 🤝 Contributing

Pull requests are welcome! Please ensure your code follows the project standards.

## 📄 License

This project is part of Baobab Digital Solutions.
