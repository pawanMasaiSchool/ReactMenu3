import "./styles.css";
import JoinUs from "./Components/JoinUs";
import Settings from "./Components/Settings";
import Contact from "./Components/Contact";
import Download from "./Components/Download";
import Help from "./Components/Help";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Login from "./Components/Login";
import MyButton from "./Components/MyButton";

export default function App() {
  return (
    <div className="App">
      {/* <JoinUs />
      <Settings />
      <Login />
      <Contact />
      <Search />
      <Help />
      <Home />
      <Download /> */}
      <MyButton name="JOIN US" bgclr="blue" />
      <MyButton name="SETTINGS" bgclr="teal" />
      <MyButton name="LOGIN" bgclr="orange" />
      <MyButton name="CONTACT US" bgclr="red" />
      <MyButton name="SEARCH" bgclr="green" />
      <MyButton name="HELP" bgclr="violet" />
      <MyButton name="HOME" bgclr="pink" />
      <MyButton name="DOWNLOAD" bgclr="brown" />
    </div>
  );
}
