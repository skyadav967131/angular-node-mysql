const db = require('../util/database');

module.exports = class Grocery {
  constructor(Id, Item,Price,Quantity) {
    this.Id = Id;
    this.Item = Item;
    this.Price=Price;
    this.Quantity=Quantity;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM groceries');
  }

  static post(Id,Item,Price,Quantity) {
    //console.log(4);
    return db.execute('INSERT INTO groceries (Id,Item,Price,Quantity) VALUES (?,?,?,?)',[Id,Item,Price,Quantity]);
  }

  static update(Id,Item,Price,Quantity) {
    return db.execute('UPDATE groceries SET Item = ?,Price=?,Quantity=? WHERE Id = ?', [Item, Id,Price,Quantity]);
  }

  static delete(Id) {
    return db.execute('DELETE FROM groceries WHERE Id = ?',[Id]);
  }
};
