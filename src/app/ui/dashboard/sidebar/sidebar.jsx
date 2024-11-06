"use client";
import React from "react";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdShop,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    number: 0,
    title: "Options",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    number: 1,
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    number: 2,
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const handleLogout = () => {
    window.confirm("Are you sure you want to log out?");
  };

  return (
    <div className={styles.container}>
      <div className="styles.user">
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.number}>
            <span className={styles.cat}>{item.title}</span>
            {item.list.map((itm) => (
              <MenuLink item={itm} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout} onClick={handleLogout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
