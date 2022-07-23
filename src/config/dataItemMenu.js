import routes from "./routes";

const listMenus = [
  {
    id: 1,
    title: "Quản Lí dự án",
    list: [
      { id: 1, title: "Nội dung 1", path: `/projects/1` },
      { id: 2, title: "Nội dung 2", path: `/projects/2` },
      { id: 3, title: "Nội dung 3", path: `/projects/3` },
    ],
  },
  {
    id: 2,
    title: "Quản lí nhân viên",
    list: [
      // { id: 4, title: "Nội dung 4", path: "/em/4" },
      // { id: 5, title: "Nội dung 5" },
      // { id: 6, title: "Nội dung 6" },
    ],
  },
];

export default listMenus;
