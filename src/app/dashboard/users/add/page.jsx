import React from "react";
import styles from "../../../ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "../../../lib/actions";
const Page = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          id=""
          placeholder="Username"
          name="username"
          required
        />
        <input type="email" id="" placeholder="Email" name="email" required />
        <input
          type="password"
          id=""
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" id="" placeholder="Phone" name="phone" required />

        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
