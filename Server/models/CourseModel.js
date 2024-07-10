const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the CourseModel
const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
});

// Create a model based on the schema
const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
