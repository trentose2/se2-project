const savedGroups = require('./resources/groups.json')

const postGroups = (req, res) => {
    const group_name = req.body.name
    const group_description = req.body.description
    const group_users = req.body.users
    const group_public = req.body.public

    // TODO incremental id
    const new_group = {
        id: 10,
        name: group_name,
        description: group_description,
        users: group_users,
        public: group_public
    }

    res.status(201)
    res.json()
}

module.exports = {postGroups};