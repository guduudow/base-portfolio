import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    class: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <IoIcons.IoIosArchive />,
    class: "nav-text",
  },
  {
    title: "Skills",
    path: "/skills",
    icon: <FaIcons.FaBook />,
    class: "nav-text",
  },
];
