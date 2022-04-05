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
        type: String
      }
    });
  
    return mongoose.model('users', userSchema);
  };