const Shop = require('../models/Shop.model');

// shop data create
module.exports.create = shop => {
    return Shop.create(shop);
}

//get all shop data
module.exports.totalData = () => {
  return Shop.find();
};

// get single shop data by id
module.exports.getById = (Id) => {
  return Shop.findById(Id);
};

// update shop data with selected by id
module.exports.updateShopData = (updateId, updateField, validators) => {
  return Shop.findOneAndUpdate(updateId, updateField, validators);
};

//delete selected shop data with selected by id
module.exports.deleteSingleShopData = (shop) => {
  return Shop.findOneAndDelete(shop);
};