// import logo from "./logo.svg";
import "./App.css";
import Sneaker from "./components/Sneaker";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
// import MyFirstComp from "./components/MyFirstComp";
// import Massive from "./components/Massive";
// import Box from "./components/Box";

function App() {
  const data = [
    {
      id: "1",
      name: "Nike Blazer Mid '77",
      description: "Classic sneakers with a vintage look.",
      image: image1,
    },
    {
      id: "2",
      name: "Nike Air Max 270",
      description: "Air Max series with a comfortable and stylish design.",
      image: image2,
    },
    {
      id: "3",
      name: "Nike React Element 55",
      description:
        "Modern design with React technology for a comfortable feel.",
      image: image3,
    },
    {
      id: "4",
      name: "Nike Zoom Pegasus Turbo 2",
      description: "Lightweight and responsive running shoes.",
      image: image4,
    },
    {
      id: "5",
      name: "Nike Air Force 1",
      description: "Timeless style and versatility.",
      image: image5,
    },
    {
      id: "6",
      name: "Nike Joyride Run Flyknit",
      description: "Innovative cushioning for a smooth and comfortable run}.",
      image: image6,
    },
  ];
  return (
    <>
      <h1>Your React App</h1>
      <div className="App">
        {data.map((obj) => (
          <Sneaker
            imageUrl={obj.image}
            header={obj.name}
            description={obj.description}
          />
        ))}

        {/* <Sneaker />
      <Massive />
      <Box text="BOX 1" coloR="1" />
      <Box text="BOX 2" coloR="2" />
      <Box text="BOX 3" coloR="3" />
      <p>Wlcome to My first React</p>
      <MyFirstComp />
      <MyFirstComp /> */}
      </div>
    </>
  );
}

export default App;
