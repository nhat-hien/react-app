import React, { useState } from "react";

import TitleMenu from "./TitleMenu";
import ItemMenu from "./ItemMenu";
import config from "../../config";

function ListMenu() {
  const [menuChecked, setMenuChecked] = useState({ menuId: 0, subMenuID: 0 });
  const [menusChecked, setMenusChecked] = useState([]);

  const onClickTitle = (id) => {
    if (!menusChecked.includes(id)) {
      setMenusChecked([...menusChecked, id]);
    } else {
      setMenusChecked(menusChecked.filter((item) => !(item === id)));
    }
  };

  return (
    <div>
      <div className="list-group" style={{ overflow: "hidden" }}>
        {config.listMenus.map((item) => {
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
                      to={sub.path}
                      key={sub.id}
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
