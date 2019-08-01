exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
      id: {
        type: 'serial',
        primaryKey: true,
      },
      fName:{
        type: 'text',
        notNull:true
      },
      lName:{
        type: 'text',
        notNull:true
      },
      username:{
        type: 'text',
        notNull:true
      },
      email: {
        type: 'text',
        notNull: true,
      },
      password: {
        type: 'text',
        notNull: true,
      },
    });
  };

exports.down = (pgm) => {

};
