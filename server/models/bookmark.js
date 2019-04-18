const mongoose = require('mongoose')
const bookmarkSchema = mongoose.Schema({
    userId: { type: String, required: true},
    songId: { type: String, required: true}
}, { collection: 'mybookmark' })
bookmarkSchema.index({ "userId": 1, "songId": 1}, { "unique": true });
const Bookmark = module.exports = mongoose.model('bookmark', bookmarkSchema)
