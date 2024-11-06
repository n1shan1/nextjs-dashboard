"use server";
import { connectToDb } from "./utils";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
const bcrypt = require("bcrypt");

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDb();
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (err) {
    console.error("Error adding user:", err);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users"); // Use `return` to ensure no further code runs
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await connectToDb();
    const newProduct = new Product({ title, desc, price, stock, color, size });
    await newProduct.save();
  } catch (err) {
    console.error("Error adding product:", err);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products"); // Use `return` to ensure no further code runs
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    // Ensure to await the database connection
    await connectToDb();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    // Filter out empty or undefined fields
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key]; // Remove empty fields
      }
    });

    // Update user in the database
    const updatedUser = await User.findByIdAndUpdate(id, updateFields);

    if (!updatedUser) {
      throw new Error("User not found or update failed."); // Handle case where user is not found
    }
  } catch (err) {
    console.error("Error updating user:", err);
  }
  revalidatePath("/dashboard/users");
  return redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await connectToDb();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });
    const updatedProduct = await Product.findByIdAndUpdate(id, updateFields);
    if (!updatedProduct) {
      throw new Error("Product not found or update failed.");
    }
  } catch (err) {
    console.error("Error updating product:", err);
  }
  revalidatePath("/dashboard/products");
  return redirect("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
