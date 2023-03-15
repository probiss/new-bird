const db = require('../../data/db-config');

const getAll = () => {
    return db('birds');
}

const getById = async (id) => {
    return await db('birds').where('birds.id',id).first();
}

const create = async (bird) => {
        const [id] = await db('birds').insert(bird);
        return getById(id);
    }
    

const updateById = async(bird,id) => {
    await db('birds').where('id',id).update(bird);
    return getById(id);
}

const deleteById = (id) => {
    return db('birds').where('id',id).del();
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};