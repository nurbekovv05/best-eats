import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineHard from "./components/HeadLineHard";
import Food from "./components/Food";
import Category from "./components/Category";
function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <HeadLineHard/>
            <Food/>
            <Category/>
        </div>
    );
}

export default App;
