import React from "react";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchUser } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";

const SingleUserPage = async ({ params }) => {
  const { id } = await params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={user.img || "/noavatar.png"} alt="user image" fill />
        </div>
        <div className={styles.name}>{user.username}</div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />

          <label htmlFor="username">Username</label>
          <input type="text" name="username" defaultValue={user.username} />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" defaultValue={user.email} />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
          />

          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" defaultValue={user.phone} />

          <label htmlFor="address">Address</label>
          <textarea name="address" defaultValue={user.address} />

          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" defaultValue={user.isAdmin ? "true" : "false"}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <label htmlFor="isActive">Is Active?</label>
          <select
            name="isActive"
            defaultValue={user.isActive ? "true" : "false"}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <button type="submit" className={styles.button}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
