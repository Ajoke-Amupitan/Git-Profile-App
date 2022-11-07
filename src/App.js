import "./App.css";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="nav-content-container">
        <h1>GitHub Portfolio</h1>
      </div>
      <div className="sidebar-content-container">
        <h1>Profile</h1>
        <Profile />
      </div>
      <div class="content-container">
        <h1>Repositories</h1>
        <SearchBar />
      </div>
    </>
  );

  // <div className="App">
  //   <input type="text" /> <br></br>
  //   <br></br>
  //   <button type="submit">Get Repositories</button>
  // </div>
}

export default App;
