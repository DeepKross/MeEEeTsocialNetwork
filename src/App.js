import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MessagesPage from "./Components/Messages/MessagesPage";
import UsersPageContainer from "./Components/Users/UsersPageContainer";
import MyProfileContainer from "./Components/Profile/MyProfileContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
