import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import MyProfile from './Components/Profile/MyProfile'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Messages from "./Components/Messages/Messages";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <div className="mainContent">
                    <Routes>
                        <Route path="/profile" element={<MyProfile/>}></Route>
                        <Route path="/messages" element={<Messages/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
