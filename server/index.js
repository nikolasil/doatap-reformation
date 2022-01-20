const express = require('express');
const connectToDb = require('./lib/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const applicationRoutes = require('./routes/applications');
const adminRoutes = require('./routes/admin');
const generalRoutes = require('./routes/general');

const app = express();

app.use(express.json());
app.use(cors());
connectToDb();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use(generalRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/admin', adminRoutes);

app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
