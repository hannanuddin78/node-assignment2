const shopService = require('../services/shop.service');

// shop data create
module.exports.create = async (req, res, next) => {
  try {
    const shop = await shopService.create(req.body);
    return res.status(200).json(shop);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something wrong" });
  }
};

//get all shop data
module.exports.getAll = async (req, res, next) => {
  try {
    const shop = await shopService.totalData(req.body);
    return res.status(200).send(shop);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something wrong,,,you not get shop data" });
  }
};

//get single shop data by id
module.exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleShop = await shopService.getById(id);
    return res.status(200).send(singleShop);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something wrong,,,you id is not match" });
  }
};

// update data with selected by id
module.exports.updateById = async (req, res, next) => {
  const id = req.params.id;
  const updateField = req.body;
  try {
    const shop = await shopService.updateShopData({ _id: id }, updateField, {
      new: true,
      runValidators: true,
    });
    return res.status(200).send(shop);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// delete singleShop data with selected by id
module.exports.deleteById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteShopData = await shopService.deleteSingleShopData({ _id: id });
    res.send(deleteShopData);
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong" });
  }
};