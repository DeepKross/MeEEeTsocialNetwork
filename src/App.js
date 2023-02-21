import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import MyProfile from './Components/Profile/MyProfile'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MessagesPage from "./Components/Messages/MessagesPage";
import UsersPageContainer from "./Components/Users/UsersPageContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <div className="mainContent">
                    <Routes>
                        <Route path="/"
                               element={<MyProfile/>}></Route>
                        <Route path="/profile"
                               element={<MyProfile/>}></Route>
                        <Route path="/messages/*"
                               element={<MessagesPage/>}></Route>
                        <Route path="/users/*"
                               element={<UsersPageContainer/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
