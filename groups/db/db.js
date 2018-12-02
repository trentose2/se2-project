groups = [{
  id: 0,
  name: 'MFDM',
  description: 'This group is formed by Mario, Franco, Daniel, Matteo',
  users: [120, 100, 24, 34],
  creator: 1,
  public: true,
  creationDate: 1543765956526
}]

const insert =
function (newGroup) {
  let group_ids = groups.map(group => group.id)

  let maxId = 0
  if (group_ids.length) {
    maxId = Math.max(...group_ids)
  }

  newGroup.id = maxId + 1
  groups.push(newGroup)
}

const selectById =
function (id) {
  let result = null
  groups.forEach(group => {
    if (group.id == id) {
      result = group
    }
  })
  return result
}

const selectAll =
function () {
  return groups
}
module.exports = {
insert, selectAll, selectById}
