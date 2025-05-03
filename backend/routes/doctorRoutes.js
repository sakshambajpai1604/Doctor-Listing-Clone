const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

router.post('/add-doctor', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ message: "Doctor added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/list-doctor-with-filter', async (req, res) => {
  const { page = 1, limit = 10, gender, experience } = req.query;
  const filters = {};
  if (gender) filters.gender = gender;
  if (experience) filters.experience = { $gte: Number(experience) };

  const doctors = await Doctor.find(filters)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  const total = await Doctor.countDocuments(filters);

  res.json({ doctors, total });
});

module.exports = router;
