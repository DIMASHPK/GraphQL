const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3005;

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://graph:graph@cluster0-dvcwx.mongodb.net/graphQl?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error: ${err}`));
dbConnection.once("open", (err) => console.log(`Connected to DB`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../../client/build"));
}

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("server has been started");
});
