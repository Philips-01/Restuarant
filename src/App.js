import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Table from "./components/Table";
import Dark from "./components/Dark";

function App() {

  var classn = "bg-primary";
  return (
    <div>
      {/* <Header />
      <h1 className={classn + "p-3 mt-2"} onClick={() => {alert("Hello World")}}>Hello world</h1>
      <h2>Good bye</h2>
      <h3 className="text-mute">Table Below</h3>
      <Table /> */}

      <Dark />
    </div>
  );
}


export default App;
