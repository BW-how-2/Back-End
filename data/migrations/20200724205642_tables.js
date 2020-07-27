
exports.up = function (knex) {
    return knex.schema
        .createTable("roles", tbl => {
            tbl.increments();
            tbl.string("name", 128).notNullable().unique();
        })
        .createTable('users', tbl => {
            tbl.increments('id')
            tbl.string('username').notNullable()
            tbl.string('password').notNullable()
            tbl.integer("role").unsigned().references("roles.id").onDelete("RESTRICT").onUpdate("CASCADE");
        })
        .createTable('howto', tbl => {
            tbl.increments('id')
            tbl.string('name', 128).notNullable().unique()
            tbl.string('description', 128).notNullable()
            tbl.string('steps', 500).notNullable()
            tbl.string('category', 128).notNullable()
            tbl.string('complexity', 128)
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('howto')
        .dropTableIfExists('roles')
};
