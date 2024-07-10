const Course = require('../models/CourseModel');

// Controller methods for CRUD operations
const courseController = {
  // Get all courses
  getAllCourses: async (req, res) => {
    try {
      const category = req.query.category;
      let courses;
      if (category && category !== 'All') {
        courses = await Course.find({ category });
      } else {
        courses = await Course.find();
      }
      res.json(courses);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get a single course by ID
  getCourseById: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new course
  createCourse: async (req, res) => {
    const newCourse = new Course({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      image: {
        url: req.body.image.url,
        alt: req.body.image.alt
      }
    });

    try {
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update a course by ID
  updateCourse: async (req, res) => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCourse) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(updatedCourse);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a course by ID
  deleteCourse: async (req, res) => {
    try {
      const deletedCourse = await Course.findByIdAndDelete(req.params.id);
      if (!deletedCourse) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json({ message: 'Course deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = courseController;
