const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Carambar Jokes API',
        version: '1.0.0',
        description: 'API for managing Carambar jokes',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./server.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);

  const setUpSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  };

  module.exports = setUpSwagger;