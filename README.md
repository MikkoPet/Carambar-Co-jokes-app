# Les meilleures blagues de Carambar & co.

Mini application web pour accèder à des blagues de Carambar & co.

## Installation

1. Clonez le repo:

```bash
git clone https://github.com/MikkoPet/Carambar-Co-jokes-app.git
```

2. Installez les dépendances:

```bash
npm install
```

3. Configurez la base de données:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

4. Démarrez de serveur:

```bash
node server.js
```

5. Accédez à l'application sur votre navigateur via:  
        - http://localhost:3000

## Documentation de l'API

L'API est documentée via Swagger. Pour y accéder, démarrez le serveur, puis accèdez à l'URL suivante:  
        - http://localhost:3000/api-docs 

## Dépendences
- Node.js
- Express
- Sequelize
- SQLite
- Render
- Swagger

## Contribuer
N'hésitez pas à formuler des **issues**, où même forke-r le repo pour soumettre toute contribution ! 

## Licence
Ce projet est sous license MIT.