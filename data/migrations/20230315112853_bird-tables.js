/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('roles', table => {
        table.increments()
        table.string('role',32).notNullable().unique();
    })
    .createTable('users', table => {
        table.increments();
        table.string('username',128).unique().notNullable();
        table.string('email',128).unique().notNullable();
        table.string('password',128).notNullable();
        table.integer('role_id').unsigned().notNullable()
        .references('id')
        .inTable('roles')
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
    .createTable('birds', table => {
        table.increments();
        table.string('content',128).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.integer('user_id').unsigned().notNullable()
        .references('id')
        .inTable('users')
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
}

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex) {
return knex.schema
.dropTableIfExists('users')
.dropTableIfExists('birds')
.dropTableIfExists('roles')
};

