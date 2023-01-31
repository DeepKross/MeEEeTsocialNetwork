import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import MyProfile from './Components/Profile/MyProfile'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <MyProfile/>
    </div>
  );
}

export default App;
