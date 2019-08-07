const express = require('express');
const massive = require('massive');
const users = require('../controllers/users')
const cors = require('cors');

massive({
  host: 'localhost',
  port: 5432,
  database: 'abdb',
  user: 'postgres',
  password: 'abdb',
}).then(db => {
  const app = express();

  app.set('db', db);

  app.use(express.json());
  app.use(cors());
  app.post('/api/login', users.login);
  app.post('/api/register', users.register);
  app.post('/api/contacts/:user', users.createContact);
  // app.get('/api/contacts/list', users.contactList);
  app.get('/api/contacts/:userId' , users.contactList);
  app.delete('/api/delete', users.deleteContact);
  app.patch('/api/edit', users.editContact);
  app.get('/api/contact/lastname', users.sortLastName);
  app.get('/api/contact/firstname', users.sortFirstName);


  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

