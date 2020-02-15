var orm = require("../db");

var Campaign = {
  all: async () => {
    const campaigns = await orm.selectAll("campaign");
    return campaign;
  },
  getById: async userid => {
    const campaign = await orm.selectOneById("campaign", userid);
    return campaign;
  },
  create: async doc => {
    const result = await orm.insertInto("campaign", doc);
    console.log(result);
    return result;
  },
  update: async (listId, list) => {
    const result = await orm.updateOneById("campaign", listId, list);
    return result;
  },

  delete: async userId => {
    const result = await orm.deleteOneById("campaign", userId);
    return result;
  }
};

module.exports = Campaign;
