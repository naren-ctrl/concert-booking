require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());





// Replace with your MongoDB connection string



// Use the MONGODB_URI from the .env file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Error connecting to database:', err));



// ✅ Debugging: Check if files exist before requiring
console.log("Checking if routes exist...");
console.log("User Router Exists:", fs.existsSync('./routes/userRouter.js'));
console.log("Booking Router Exists:", fs.existsSync('./routes/bookingRoutes.js'));

// ✅ Corrected file paths (Explicitly adding `.js`)
const userRoutes = require('./routes/userRouter.js');
const bookingRoutes = require('./routes/bookingRoutes.js');

// ✅ Use Routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// ✅ Default Route
app.get("/", (req, res) => {
    res.send("🎵 Concert Booking Backend is running...");
});




// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const userRoutes = require('./routes/userRouter');
// const bookingRoutes = require('./routes/bookingRoutes');

// const app = express();  // ✅ Define 'app' first

// app.use(express.json());
// app.use(cors());

// // Use routes after defining 'app'
// app.use('/api/users', userRoutes);
// app.use('/api/bookings', bookingRoutes);

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch(err => console.log("❌ MongoDB Connection Error:", err));

// app.get("/", (req, res) => {
//     res.send("Backend is running...");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));






// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRouter');
// const bookingRoutes = require('./routes/bookingRoutes');

// app.use('/api/users', userRoutes);
// app.use('/api/bookings', bookingRoutes);


// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGODB_URI).then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch(err => console.log("❌ MongoDB Connection Error:", err));

// // Default Route
// app.get("/", (req, res) => {
//     res.send("Backend is running...");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
