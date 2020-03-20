var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", cb);
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, cb);
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, cb);
    },

    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, cb);
    }
};

module.exports = burger;