import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import dashboardRoutes from './routes/dashboardRoutes';

import cors from 'cors';

import db from './models';
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for all routes


app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at https://api-healinghand.delightcoders.com`);
  });
});