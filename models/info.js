var orm = require("../db");

var Info = {
  all: async () => {
    const info = await orm.selectAll("basicinfo");
    return info;
  },
  getById: async infoId => {
    const info = await orm.selectOneById("basicinfo", infoId);
    return info;
  }
  // create: async list => {
  //   const result = await orm.insertInto("basicinfo", list);
  //   return result;
  // },
  // update: async (listId, list) => {
  //   const result = await orm.updateOneById("basicinfo", listId, list);
  //   return result;
  // },
  // delete: async listId => {
  //   const result = await orm.deleteOneById("basicinfo", listId);
  //   return result;
  // },
  // todos: async listId => {
  //   const result = await orm.selectAllWhere("todos", "list", listId);
  //   return result;
  // },
  // addTodo: async (listId, todo) => {
  //   const result = await orm.insertInto("todos", { ...todo, list: listId });
  //   return result;
  // }
};

module.exports = Info;
