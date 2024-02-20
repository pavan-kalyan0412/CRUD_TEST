const express = require('express');
const router = express.Router();
const Product = require('../models/product.model')
const { postProducts , getSingleProduct, getProduct, getUpdate, getDelete} = require('../controllers/product.controller')

router.post('/',  postProducts);
router.get('/', getProduct)

router.put('/:id', getUpdate)
router.get("/:id", getSingleProduct);
router.delete("/:id", getDelete)



module.exports = router;