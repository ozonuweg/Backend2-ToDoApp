module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
      username: {
        type: String
      },
      password: {
        type: String
      },
      email: {
        type: String
      },
      event_name: {
        type: Array
      }
    });
  
    return mongoose.model('user', userSchema);
  };