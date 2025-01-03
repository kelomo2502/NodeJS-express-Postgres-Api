const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 5000;

// Sync Database and Start Server
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Verify DB connection
    console.log('Database connected successfully.');

    await sequelize.sync(); // Sync models with DB
    console.log('Database synchronized.');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

startServer();
