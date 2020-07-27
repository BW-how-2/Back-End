exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'mark', password: 'asd', role: 2 },
    { id: 2, username: 'user', password: 'asd', role: 1 },
    { id: 3, username: 'creator', password: 'asd', role: 2 }
  ]);
};