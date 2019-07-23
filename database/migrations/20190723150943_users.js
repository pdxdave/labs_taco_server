exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
        tbl.increments(); //makes pk, sets integer, auto increments
        
        tbl.string('first_name', 128) // set column called name
        .notNullable();

        tbl.string('last_name', 128)
        .notNullable();

        tbl.string('email', 128)
        .notNullable();
    })
  };
  
  exports.down = function(knex) {
     return knex.schema.dropTableIfExists('users');
  };
