```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error("Failed to connect to MongoDB:", e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  try {
    const databasesList = await client.db().admin().listDatabases();
    console.log('Databases:');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  } catch (e) {
    console.error("Failed to list databases:", e);
  }
}

main().catch(console.dir);
```