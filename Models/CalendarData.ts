// models/Event.js

import mongoose from 'mongoose';

// Define the schema for the event
const CalendarDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  allDay: {
    type: Boolean,
    default: false
  },
});

const CalendarData = mongoose.models.CalendarData || mongoose.model('CalendarData', CalendarDataSchema);

export default CalendarData;
