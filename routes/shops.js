var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shop.controller')

/* shop data create */
router.post("/", shopController.create);
// get shop data
router.get("/", shopController.getAll);
// get single shop data
router.get("/:id", shopController.getById);
// update data with select by id
router.put("/:id", shopController.updateById);
// which id is selected this data delete with select by id 
router.delete("/:id", shopController.deleteById);

module.exports = router;
