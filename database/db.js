const mongoose = require("mongoose");

const database = mongoose.connect(
 "mongodb+srv://divyeshpatel:divyesh2198@cluster0.lbp0yva.mongodb.net/test",
  { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true
  },
  (error) => {
    if (!error) {
      console.log("connected to the mongoDB");
    } else {
      console.log("connection to mongoDB failed \n" + error);
    }
  }
);

module.exports = database;
