import "./App.css";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="nav-content-container">
        <h1>GitHub Portfolio</h1>
      </div>
       <div className="sidebar-content-container">
        <h1>Profile</h1>
        {/* <Profile /> */}
        <div className="avatar">
        <img
          src="https://avatars.githubusercontent.com/u/47615635?v=4"
          alt="avatar"
          width="150px"
        />
      </div>
      </div>
      <div className="content-container">
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
