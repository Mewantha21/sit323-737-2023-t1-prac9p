const collection = db.collection('new');

collection.insertOne({ name: 'John', age: 31 }, function(err, result) {
  if (err) throw err;
  console.log("Document inserted successfully");
});
