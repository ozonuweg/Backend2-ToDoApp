
module.exports = (mongoose) => {
  const eventSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    done: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });

  return mongoose.model('event', eventSchema);
};