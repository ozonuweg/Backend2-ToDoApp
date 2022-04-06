module.exports = (mongoose) => {
    const adminuserSchema = mongoose.Schema({
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
  
    return mongoose.model('admin-user', adminuserSchema);
};