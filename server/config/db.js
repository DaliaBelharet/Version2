
const mongoose = require ('mongoose');

mongoose
      .connect ('mongodb+srv://daliabelharett:Dalia2023@cluster.ho6b0l7.mongodb.net/',
      
      )
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.log("failed to connect to MongoDB", err));