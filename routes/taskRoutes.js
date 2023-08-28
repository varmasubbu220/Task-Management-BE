const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// GET task by ID
router.get('/:id', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// POST new task
router.post('/', async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

// PUT update task
router.put('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// DELETE task
router.delete('/:id', async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
