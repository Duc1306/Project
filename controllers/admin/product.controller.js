const Product = require("../../model/product.model");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("admin/pages/products/index", {
    pageTitle: " Danh sach sản phẩm",
    products: products,
  });
};
