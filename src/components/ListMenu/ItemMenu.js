import classNames from "classnames/bind";
import styles from "./ListMenu.module.scss";

const cx = classNames.bind(styles);

function ItemMenu({ id, menuId, title, selected = false, onClick }) {
  return (
    <a
      key={id}
      onClick={() => onClick({ menuId, subMenuID: id })}
      className={cx(
        `list-group-item list-group-item-action ${selected ? "active" : ""}`,
        "item-menu",
        selected ? "item-menu-active" : ""
      )}
      href="#list-profile"
    >
      {title}
    </a>
  );
}

export default ItemMenu;
