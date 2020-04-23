const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(UserInfo) {
  const [id] = await db("users").insert(UserInfo, "id");
  return findById(id);
}

function findById(id) {
  return db("users")
  // 
    .where({ id })
    .select("id",'username','password')
    .first();
    
}
