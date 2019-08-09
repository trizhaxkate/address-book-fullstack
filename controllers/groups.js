function fetchGroups(req,res){
  const db = req.app.get('db');

  db
  .query(
    'SELECT * FROM groups WHERE user_id = ${id}',
    {
      id:req.query.id
    }
  )
  .then(data=>{
    res.status(200).json(data)
  })
}

function createGroups(req,res){
    const db = req.app.get('db');
    const {name, user_id} = req.body

    db.groups
    .insert(
      {
        name,
        user_id
      }
    )
    .then(data=>{
        res.status(201).json(data)
    })
}

function deleteGroup(req,res){
    const db = req.app.get('db');
  
    db
      .query(
        'DELETE FROM groups WHERE id=${id}',
        {
          id:req.query.gid
        }
      )
      .then(data=>{
        res.status(200).json({message:"Deleted"})
      })
}


function addContactToGroup(req, res) {
    const db = req.app.get('db');
    const {contact_id, group_id} = req.body;

    db.group_list
      .insert({
          contact_id,
          group_id
      })
      .then(data=>{
          res.status(201).json(data);
      })
}

function viewMembers(req,res){
  const db = req.app.get('db')
  db
  .query(
    'SELECT contact. * from contact,groups,group_list WHERE  contact.id = group_list.contact_id AND groups.id = group_list.group_id AND groups.id = ${id}',
    {
      id:req.query.id
    }
  )
  .then(data=>{
    res.status(200).json(data)
  })
}


function availableGroups(req,res){
  const db = req.app.get('db')
  db.query('SELECT groups.* FROM groups WHERE user_id=${user_id} AND id NOT IN(SELECT group_id from group_list WHERE contact_id=${id})',
  {
    id:req.query.id,
    user_id:req.query.user_id
  }).then(data=>{
    res.status(200).json(data)
  })
 }

 

module.exports = {
    fetchGroups,
    createGroups,
    deleteGroup,
    addContactToGroup,
    viewMembers,
    availableGroups
};