var db = require("../config");

const orm = {
  selectAll: async table => {
    const [rows, fields] = await db
      .promise()
      .query("SELECT * FROM ??;", [table]);
    return rows || [];
  },
  // selectAllWhere: async (table, col, value) => {
  //   const [
  //     rows,
  //     fields
  //   ] = await db
  //     .promise()
  //     .query("SELECT * FROM ?? where ?? = ?;", [table, col, value]);
  //   return rows || [];
  // },
  selectOneById: async (table, userid) => {
    const [
      rows,
      fields
    ] = await db
      .promise()
      .query("SELECT * FROM ?? WHERE userid = ?;", [table, userid]);
    return rows || [];
  },
  insertInto: async (table, data) => {
    const result = await db
      .promise()
      .query(`INSERT INTO ?? SET ?`, [table, data]);
    return result;
  },
  // updateOneById: async (table, id, data) => {
  //   const result = await db
  //     .promise()
  //     .query("UPDATE ?? SET ? WHERE id = ?;", [table, data, id]);
  //   return result;
  // },
  deleteOneById: async (table, userid) => {
    const result = await db
      .promise()
      .query("DELETE FROM ?? WHERE userid = ?", [table, userid]);
    return result;
  }
};

module.exports = orm;
