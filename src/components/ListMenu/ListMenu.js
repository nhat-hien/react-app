import React, { useState } from "react";

import TitleMenu from "./TitleMenu";
import ItemMenu from "./ItemMenu";

const ListMenus = [
  {
    id: 1,
    title: "Quản Lí dự án",
    list: [
      { id: 1, title: "Nội dung 1" },
      { id: 2, title: "Nội dung 2" },
      { id: 3, title: "Nội dung 3" },
    ],
  },
  {
    id: 2,
    title: "Quản lí nhân viên",
    list: [
      { id: 4, title: "Nội dung 4" },
      { id: 5, title: "Nội dung 5" },
      { id: 6, title: "Nội dung 6" },
    ],
  },
];

function ListMenu() {
  const [menuChecked, setMenuChecked] = useState({ menuId: 0, subMenuID: 0 });
  const [menusChecked, setMenusChecked] = useState([]);

  const onClickTitle = (id) => {
    if (!menusChecked.includes(id)) {
      setMenusChecked([...menusChecked, id]);
    } else {
      setMenusChecked(menusChecked.filter((item) => !item === id));
    }
  };

  return (
    <div>
      <div className="list-group" style={{ overflow: "hidden" }}>
        {ListMenus.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <TitleMenu
                onClick={onClickTitle}
                id={item.id}
                title={item.title}
                checked={item.id === menuChecked.menuId}
                widen={menusChecked.includes(item.id)}
              />
              {menusChecked.includes(item.id)
                ? item.list.map((sub) => (
                    <ItemMenu
                      id={sub.id}
                      menuId={item.id}
                      title={sub.title}
                      selected={sub.id === menuChecked.subMenuID}
                      onClick={setMenuChecked}
                    />
                  ))
                : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ListMenu;
