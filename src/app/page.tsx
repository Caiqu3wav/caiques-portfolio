import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import "./home.css"
import Projects from "./components/projectscomp/projectsComp"

function Home(){

    return (
        <main className=" overflow-x-hidden">
     <Header />
     <div className="bg-cont">
     <Hero />
     <About />
     </div>
     <Projects/>
     </main>
    )
}

export default Home;
