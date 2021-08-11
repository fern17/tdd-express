const app = require('./src/app');
const sequelize = require('./src/config/database');

sequelize.sync(); // create data base

app.listen(3000, () => console.log('app is running!'));
