const Users = require("./users-model");

function checkId(req, res, next) {
    Users.getById(req.params.id)
        .then((res) => 
        {res ? res.status(200).json(res) 
            : next({
                    status: 404,message: `${req.params.id}. id is not found`});
        })
        .catch((err) => 
        next({ status: 500, message: "databese problem..." }));
}

module.exports = { checkId };