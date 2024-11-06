import { User, Product } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    connectToDb();

    const countVal = await User.countDocuments({
      username: { $regex: regex },
    });

    const users = await User.find({
      username: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { countVal, users };
  } catch (error) {
    console.error("Failed to fetch the Users", error);
    throw new Error("Failed to fetch the Users");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDb();
    const count = await Product.countDocuments({
      title: { $regex: regex },
    });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
  }
};

export const fetchUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProduct = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
  }
};
