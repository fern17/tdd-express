const app = require('./src/app');
const sequelize = require('./src/config/database');

sequelize.sync({ force: true }); // create data base

app.listen(3000, () => console.log('app is running!'));
