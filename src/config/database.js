const { MongoClient } = require("mongodb");
// Connection URL
const url =
  "mongodb+srv://pdeepti2311_db_user:oWFBcvEZI70Vound@deeptinodejs.ixfhcak.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server and database");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Deepika",
    lastname: "Padukons",
    city: "Mumbai",
  };

  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  //Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
