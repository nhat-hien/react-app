import ListMenu from "../../components/ListMenu";

function DefaultLayout({ children }) {
  return (
    <div className="row">
      <div className="col-md-3">
        <ListMenu />
      </div>
      <div className="col-md-9">{children}</div>
    </div>
  );
}

export default DefaultLayout;
