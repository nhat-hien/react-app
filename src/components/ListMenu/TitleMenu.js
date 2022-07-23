import classNames from "classnames/bind";
import styles from "./ListMenu.module.scss";
const cx = classNames.bind(styles);

function TitleMenu({
  checked = false,
  widen = false,
  id,
  onClick,
  title,
  ...props
}) {
  const onClickTitle = () => {
    onClick(id);
  };

  const renderIcon = () => {
    return widen ? (
      <i className="fa-solid fa-angle-down"></i>
    ) : (
      <i className="fa-solid fa-angle-right"></i>
    );
  };
  return (
    <h5
      className={cx(
        `list-group-item list-group-item-action ${checked ? "active" : ""}`,
        "title-menu"
      )}
      onClick={onClickTitle}
    >
      {renderIcon()} {title}
    </h5>
  );
}

export default TitleMenu;
