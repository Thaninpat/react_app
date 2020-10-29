const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uploader_name: { type: String, required: true },
  upload_title: { type: String, required: true },
  video_path: { type: String, required: true },
  thumbnail_path: { type: String, required: true }
});

module.exports = mongoose.model('Upload', uploadSchema);
