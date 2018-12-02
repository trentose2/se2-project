const db = require('./db/db.js')

const post =
function (req, res) {
  let newGroup = {
    name: req.body.name,
    description: req.body.description,
    users: req.body.users,
    creator: req.body.creator,
    public: req.body.public,
    creationTime: Date.now()
  }

  // Check if name is string
  // Check if description is string
  // Check if creator is integer
  // Check if users is an array
  if (!(typeof newGroup.name == 'string') ||
    !(typeof newGroup.description == 'string') ||
    !(Number.isInteger(newGroup.creator)) ||
    !(Array.isArray(newGroup.users))) {
    res.sendStatus(400)
  }
  // Check if all users are represented as integers
  for (var i = 0; i < newGroup.users.length; i++) {
    if (!(Number.isInteger(newGroup.users[i]))) {
      res.sendStatus(400)
    }
  }

  db.insert(newGroup)

  res.status(201).json(newGroup)
}

// const doGet =
//     function(req, res) {
//   result = groups.getByUserId(undefined)
//   res.status(200).json({result})
// }

module.exports = {
post}