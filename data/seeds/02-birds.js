/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('birds').truncate()
  await knex('birds').insert([
    { user_id: 1, content: 'That strange moment when you wake up 1 minute before your alarm clock.'},
    { user_id: 2, content: 'Some people are just like trees.They take forever to grow up.'},
    { content: 'I wish I could record my dreams, and watch them later.', user_id:2},
    { content: "Yawning is our body's way of saying 10% of battery remaining.", user_id:2},
    { content: 'I just refuse to take a single bite of my food until I find something good to watch.', user_id:1},
    { content: 'Parents always see us "taking a break" but they never see us studying.', user_id:2},
    { content: 'Set the alarm clock to wake you up in the middle of the night so you can turn it off and sleep more.',user_id:2},
    { content: 'Love is like a bird. Sometimes flying around you, sometimes shit.', user_id:2},
    { content: 'A true friend will never get tired of listening to your problems over and over again.', user_id:1},
    { content: "I like school.I just don't like the learning part.", user_id:2},
  ]);
};
