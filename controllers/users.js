const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const secret = require('../secret.js');

function login(req, res) {
  const db = req.app.get('db');
  const { username, password } = req.body;

  db.users
    .findOne(
      {
        username,
      },
      {
        fields: ['id', 'username', 'password', 'fName', 'lName', 'email'],
      }
    )
    .then(user => {
      if (!user) {
        throw new Error('Invalid username');
      }

      return argon2.verify(user.password, password).then(valid => {
        if (!valid) {
          throw new Error('Incorrect password');
        }

        const token = jwt.sign({ userId: user.id }, secret);
        delete user.password; // remove password hash from returned user object
        res.status(200).json({ ...user, token });
      });
    })
    .catch(err => {
      if (['Invalid username', 'Incorrect password'].includes(err.message)) {
        res.status(400).json({ error: err.message });
      } else {
        console.error(err);
        res.status(500).end();
      }
    });
}

function register(req, res) {
    const db = req.app.get('db');
    const { username, email, password, fName, lName } = req.body;
  
    argon2
      .hash(password)
      .then(hash => {
        return db.users.insert(
          {
            username,
            email,
            password: hash,
            fName,
            lName
          },
          {
            fields: ['id', 'username', 'email', 'fName', 'lName'],
          }
        );
      })
      .then(user => {
        const token = jwt.sign({ userId: user.id }, secret);
        res.status(201).json({ ...user, token });
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      });
  }
  
  function createContact(req, res){
    const db = req.app.get('db');
    const { first_name, last_name, home_phone, mobile_phone, work_phone, email, city, state_or_province, postal_code, country } = req.body;

    const user_id = req.params.user;
    
    const temp = [];

    db.contact
    .insert(
      {
        first_name,
        last_name,
        home_phone,
        mobile_phone,
        work_phone,
        email,
        city,
        state_or_province,
        postal_code,
        country,
      }
    )
    .then(data=>{
        temp.push(data);
        let contact_id = data.id;
        // console.log(userId,"-",contactId);
        
        db.address_book
        .insert(
          {
            user_id,
            contact_id,
          }
        ).then(add=>{
          // console.log(add)
          temp.push(add)
          res.status(201).json(temp)
        })
    })
  }

  function contactList(req, res){
    const db = req.app.get('db');
    const userID = req.query.id;
    // console.log(req.query.id)
    db
    .query(
      'Select contact.* from users, contact, address_book WHERE users.id = address_book.user_id AND contact.id = address_book.contact_id AND users.id = ${id} ORDER BY contact.first_name',
      {
        id:req.query.id
      }
    )
    .then(data=>{
      res.status(200).json(data)
    })
  }


  function deleteContact(req,res){
    const db = req.app.get('db');
    let deleted = [];
    // console.log(req.query.cid);
    db
    .query(
      'DELETE FROM address_book WHERE contact_id=${id}',
      {
        id:req.query.cid
      }
    )
    .then(data=>{
      deleted.push(data);
      db
      .query(
        'DELETE FROM contact WHERE id=${id}',
        {
          id:req.query.cid
        }
      )
      .then(data2=>{
        deleted.push(data2)
        res.status(200).json(deleted)
      })
    })
  }


  function editContact(req, res){
    const db = req.app.get('db');

    const {
      first_name,
      last_name,
      home_phone,
      mobile_phone,
      work_phone,
      email,
      city,
      state_or_province,
      postal_code,
      country
    } = req.body;

    db.contact
    .update(
      {
        id: req.query.cid
      },
      {
        first_name,
        last_name,
        home_phone,
        mobile_phone,
        work_phone,
        email,
        city,
        state_or_province,
        postal_code,
        country
      }
    )
    .then(data =>{
      res.status(201).json(data)
    })
    .catch(err => {
      console.error(err);
    })
  }

module.exports = {
  register,
  login,
  createContact,
  contactList,
  deleteContact,
  editContact
};