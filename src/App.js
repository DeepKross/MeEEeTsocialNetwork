import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MessagesPage from "./Components/Messages/MessagesPage";
import UsersPageContainer from "./Components/Users/UsersPageContainer";
import MyProfileContainer from "./Components/Profile/MyProfileContainer";
import NavBarContainer from "./Components/NavBarContainer";
import LoginContainer from "./Components/Login/LoginContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBarContainer/>
                <div className="mainContent">
                    <Routes>
                        <Route path="profile"
                               element={<MyProfileContainer/>}>
                            <Route path={":profileId"} element={<MyProfileContainer/>}/>
                        </Route>
                        <Route path="/messages/*"
                               element={<MessagesPage/>}></Route>
                        <Route path="/users/*"
                               element={<UsersPageContainer/>}></Route>
                        <Route path="/login" element={<LoginContainer/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
