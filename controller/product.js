import Product from "../models/ProductModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.json({
      message: "product created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProductsById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: { id: req.params.id },
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "product updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "product Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
