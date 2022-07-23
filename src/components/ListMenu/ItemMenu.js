import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./ListMenu.module.scss";

const cx = classNames.bind(styles);

function ItemMenu({ id, menuId, title, selected = false, onClick, to }) {
  return (
    <NavLink
      to={to}
      key={id}
      onClick={(e) => {
        e.stopPropagation();
        onClick({ menuId, subMenuID: id });
      }}
      className={(nav) =>
        cx(`list-group-item list-group-item-action `, "item-menu", {
          "item-menu-active": nav.isActive,
        })
      }
      // className={cx(
      //   `list-group-item list-group-item-action `,
      //   "item-menu",
      //   selected ? "item-menu-active" : ""
      // )}
      href="#list-profile"
    >
      {title}
    </NavLink>
  );
}

export default ItemMenu;
