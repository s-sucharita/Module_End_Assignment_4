const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

app.use('/api/auth', require('./app/routes/authRoutes'));
app.use('/api/customers', require('./app/routes/customerRoutes'));
app.use('/api/cases', require('./app/routes/caseRoutes'));
app.use('/api/activities', require('./app/routes/activityRoutes'));

app.get('/', (req, res) => {
  res.send('CRM Backend Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
