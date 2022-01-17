const express = require('express');
const connectToDb = require('./lib/db');

const authRoutes = require('./routes/auth');
const applicationRoutes = require('./routes/application');
const adminRoutes = require('./routes/admin');
const generalRoutes = require('./routes/general');

const app = express();

app.use(express.json());
connectToDb();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(generalRoutes);
app.use('/auth', authRoutes);
app.use('/application', applicationRoutes);
app.use('/admin', adminRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(3001);
