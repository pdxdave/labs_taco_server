
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Joe', last_name: 'Smith', email: 'js@me.com'},
        {id: 2, first_name: 'Kelly', last_name: 'Sharp', email: 'ks@me.com'},
        {id: 3, first_name: 'Kevin', last_name: 'Harney', email: 'kh@me.com'}
      ]);
    });
};
