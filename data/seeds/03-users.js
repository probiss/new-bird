/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {
      username: 'probiss',
      email: 'probis@gmail.com',
      password: '1212',
      role_id: 1
    },

    {
      username: 'tester',
      email: 'test@gmail.com',
      password: '1213',
      role_id: 2
    },
  ]);
};
