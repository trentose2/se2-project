let groups = require('../../persistence/groups.json');

const insert = function (newGroup) {
  let group_ids = groups.map(group => group.id)

  let maxId = 0
  if (group_ids.length) {
    maxId = Math.max(...group_ids)
  }

  newGroup.id = maxId + 1
  groups.push(newGroup)
}

const selectById = function (id) {
  let result = null;
  groups.forEach(group => {
    if (group.id == id) {
      result = group
    }
  })
  return result
}

const selectAll = function () {
  return groups
}
module.exports = { insert, selectAll, selectById }
