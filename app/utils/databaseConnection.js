import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

export default database => {
  return mongoose
    .connect(database, {
      useNewUrlParser: true
    })
    .then(e => {
      console.log("successfully connected to database");
    })
    .catch(error => console.log(error));
};
