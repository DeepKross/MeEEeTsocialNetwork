import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import MyProfile from './Components/Profile/MyProfile'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MessagesPage from "./Components/Messages/MessagesPage";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <div className="mainContent">
                    <Routes>
                        <Route path="/profile"
                               element={<MyProfile store={props.store}/>}></Route>
                       {/* <Route path="/messages/*"
                               element={<MessagesPage messagesPage={props.state.messagesPage}
                                                      dispatch={props.dispatch}/>}></Route>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
