# Baobab Server

API Server pour Baobab Digital Solutions - Fournit accès aux produits et contenus vidéos de formation.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/joelessam15-lab/baobab-server.git
cd baobab-server

# Installer les dépendances
npm install

# Démarrer le serveur
npm start
```

Le serveur va tourner sur `http://localhost:8081`

## 📚 API Endpoints

### Health Check
- **GET /health** - Vérifier que le serveur fonctionne
  ```json
  { "status": "ok", "message": "Baobab Server is running on Railway!" }
  ```

### Produits
- **GET /api/products** - Liste de tous les produits Baobab
  ```json
  [
    { "id": 1, "name": "Kit de démarrage digital", "price": 25000 },
    { "id": 2, "name": "Formation 5 jours", "price": 35000 },
    ...
  ]
  ```

### Vidéos de Formation
- **GET /api/videos** - Liste des modules vidéo
  ```json
  [
    { "id": 1, "title": "Module 1 - Stratégie digitale" },
    { "id": 2, "title": "Module 2 - Présence en ligne" },
    ...
  ]
  ```

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t baobab-server .
```

### Run Container
```bash
docker run -p 8081:8081 -e PORT=8081 baobab-server
```

## 🚂 Railway Deployment

### Déployer en 3 étapes simple :

1. **Connecter votre Repository**
   - Allez sur [railway.app](https://railway.app)
   - Cliquez "New Project" → "Deploy from GitHub repo"
   - Sélectionnez `joelessam15-lab/baobab-server`

2. **Railway Auto-Détection**
   - Railway détecte automatiquement que c'est un projet Node.js
   - Installe les dépendances avec `npm install`
   - Lance le serveur avec `npm start`
   - Configure le port 8081

3. **Obtenir votre URL Publique**
   - Railway génère automatiquement une URL publique
   - Votre API sera accessible sur le domaine fourni
   - Exemple: `https://baobab-server-production.up.railway.app`

### Variables d'Environnement
- `PORT=8081` (défaut si non spécifié)

## 📁 Project Structure

```
baobab-server/
├── server.js          # Application Express principale
├── package.json       # Dépendances et scripts
├── Dockerfile         # Configuration Docker
├── .env.example       # Template de variables d'environnement
├── .gitignore         # Règles Git ignore
└── README.md          # Cette documentation
```

## 🔧 Configuration

Le serveur écoute sur le port défini par la variable `PORT` (défaut: 8081).

## 📝 Développement Local

```bash
# Installer les dépendances
npm install

# Démarrer le serveur
npm start

# Le serveur sera accessible sur http://localhost:8081
```

## 🌐 Endpoints Disponibles

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Vérifier l'état du serveur |
| GET | /api/products | Liste des produits Baobab |
| GET | /api/videos | Liste des modules vidéo |

## 🤝 Ressources

- [Railway Documentation](https://docs.railway.app)
- [Express Documentation](https://expressjs.com)
- [Node.js Documentation](https://nodejs.org/docs)

## 📄 Licence

Baobab Digital Solutions
