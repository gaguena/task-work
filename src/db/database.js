
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);

mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/task_works');

module.exports = mongoose;