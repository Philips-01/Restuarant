import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navigate from "./components/Navigate";
import Main from "./components/Main";
// import Main3 from "./components/Main3";
import Footer from "./components/Footer";


function App2 (){

    return(
        <div>
            <Navigate />
            <Main />
            <Footer />
        </div>
    )
}

export default App2;