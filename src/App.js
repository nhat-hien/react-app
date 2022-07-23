import ListMenu from "./components/ListMenu";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-3">
          <ListMenu />
        </div>
        <div className="col-md-9">content</div>
      </div>
    </div>
  );
}

export default App;
