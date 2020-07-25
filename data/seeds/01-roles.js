exports.seed = function (knex, Promise) {
  return knex('roles').truncate()
    .then(function () {
      return knex('roles').insert([
        { id: 1, name: 'user' },
        { id: 2, name: 'creator' }
      ]);
    });
};