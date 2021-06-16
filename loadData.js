require('./db/connect');
require('colors');
const dogs=require('./dogs.json')
const { Dog } = require('./model/schemas');

(async () => {
  try {
    // const p1 = Dog.create({
    //   name: 'Bello',
    //   born: '2020-12-01',
    // });
    // const p2 = Dog.create({
    //   name: 'Beisser',
    //   born: '2020-12-02',
    // });
    // await Promise.all([p1, p2]);
    await Dog.insertMany(dogs);
    console.log('Data loaded');
  } catch (error) {
    console.error(`Error ====> ${error.message.red}`);
  } finally {
    process.emit('SIGINT');
  }
})();
