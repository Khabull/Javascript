import logo from "./logo.svg";
import "./App.css";
import MyFirstComp from "./components/MyFirstComp";
import Box from "./components/Box";

function App() {
  return (
    <div>
      <Box text="BOX 1" coloR="1" />
      <Box text="BOX 2" coloR="2" />
      <Box text="BOX 3" coloR="3" />
      <p>Wlcome to My first React</p>
      <MyFirstComp />
      <MyFirstComp />
    </div>
  );
}

export default App;
