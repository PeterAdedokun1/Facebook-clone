import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from "./Feed"
import Widgets from "./Widgets"
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
      // const user = null;
  const [{user}, dispatch] =useStateValue()
  return (
    <div className="App">
      {!user ?
        <Login />
        : (
        <>
      <Header />

        <div className="app_body">
        <SideBar />
        <Feed />
        <Widgets/>
          </div>
          </>
      )}
      
      
      
    </div>
  );
}

export default App;
//stop at 3hrs