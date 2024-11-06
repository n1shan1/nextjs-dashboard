import React from "react";
import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchUsers } from "../../lib/data";
import { deleteUser } from "../../lib/actions";

const UsersPage = async ({ searchParams }) => {
  // Await searchParams to access its properties
  const { q = "", page = 1 } = await searchParams; // Await searchParams

  const pageNumber = parseInt(page, 10); // Parse page as a number

  try {
    // Fetch users and count of users matching the query
    const { countVal, users } = await fetchUsers(q, pageNumber);

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a user..." />
          <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>

        {/* Check if users exist */}
        {users.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Created At</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className={styles.user}>
                      <Image
                        src={user.img || "/noavatar.png"}
                        alt="user image"
                        height={40}
                        width={40}
                        className={styles.userImage}
                      />
                      {user.username}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>{" "}
                  {/* Format date for readability */}
                  <td>{user.isAdmin ? "Admin" : "Client"}</td>
                  <td>{user.isActive ? "Active" : "Not Active"}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link href={`/dashboard/users/${user._id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          View
                        </button>
                      </Link>
                      <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />{" "}
                        {/* Use _id instead of id */}
                        <button
                          type="submit"
                          className={`${styles.button} ${styles.delete}`}
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found</p> // Display message if no users match the search
        )}

        {/* Pagination Component */}
        <Pagination count={countVal} />
      </div>
    );
  } catch (error) {
    // Handle error in case fetching users fails
    console.error("Error fetching users:", error);
    return <p>Failed to load users. Please try again later.</p>;
  }
};

export default UsersPage;
