var orm = require("../db");

var Info = {
  all: async () => {
    const info = await orm.selectAll("basicinfo");
    return info;
  },
  getById: async userid => {
    const info = await orm.selectOneById("basicinfo", userid);
    return info;
  },
  create: async doc => {
    const result = await orm.insertInto("basicinfo", doc);
    console.log(result);
    return result;
  },
  update: async (listId, list) => {
    const result = await orm.updateOneById("basicinfo", listId, list);
    return result;
  },

  delete: async userId => {
    const result = await orm.deleteOneById("basicinfo", userId);
    return result;
  }
};

module.exports = Info;
