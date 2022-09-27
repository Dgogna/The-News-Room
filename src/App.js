
import './App.css';
import {Routes,Route} from "react-router-dom";
import NewsList from './components/NewsList';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<NewsList/>}></Route>
            {/* <Route path="/news/:id" element={<NewsDetails/>}></Route> */}
            <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
