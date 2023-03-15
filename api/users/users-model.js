const db = require('../../data/db-config');

const getAll = () => {
    return db("users as u")
        .leftJoin("roles as r", "u.role_id", "r.id")
        .select("u.id", "u.username","u.email","r.id","r.role");
    // .leftJoin('roles','users.role_id','roles.id')
    // .select('users.id','users.username','users.email','roles.id','roles.name')
}

const getById = (id) => {
    return db("users as u")
        .leftJoin("roles as r", "r.id", "u.role_id")
        .where('users.id',id)
        .first();
}

const create = async (user)=> {
    const [id] = await db("users").insert(user);
    return getById(id);
}
const updateById = async (user, id)=> {
    await db("users").where('id',id).update(user);
    return getById(id);
}
const deleteUser = async(id)=> {
    await db("users").where({ id }).delete();
    return getAll();
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteUser
};