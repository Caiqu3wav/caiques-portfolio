import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import "./home.css"
function Home(){

    return (
        <main className=" overflow-x-hidden">
     <Header />
     <div className="bg-cont">
     <Hero />
     <About />
     </div>
     </main>
    )
}

export default Home;
