import React from "react";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { updateProduct } from "../../../lib/actions";
import { fetchProduct } from "../../../lib/data";

const SingleProductPage = async ({ params }) => {
  const { id } = await params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={product.img || "/noavatar.png"}
            alt="product image"
            fill
          />
        </div>
        <div className={styles.name}>{product.title}</div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />

          <label htmlFor="title">Title</label>
          <input type="text" name="title" defaultValue={product.title} />

          <label htmlFor="price">Price</label>
          <input type="number" name="price" defaultValue={product.price} />

          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" defaultValue={product.stock} />

          <label htmlFor="color">Color</label>
          <input type="text" name="color" defaultValue={product.color} />

          <label htmlFor="size">Size</label>
          <input type="number" name="size" defaultValue={product.size} />

          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat" defaultValue={product.cat || "general"}>
            <option value="general">Choose a category...</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="home">Home</option>
          </select>

          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="16"
            defaultValue={product.desc}
          ></textarea>

          <button type="submit" className={styles.button}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
