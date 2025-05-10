import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navigate from "./components/navigate";
import Banner from "./components/banner";
import Main2 from "./components/Main2";
import Footer from "./components/footer";

function App3 (){
    return(
        <div>
            <Navigate />
            <Banner />
            <Main2 />
            <Footer />
        </div>
    )
}

export default App3;