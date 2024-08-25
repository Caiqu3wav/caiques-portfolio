import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import "./home.css"
import Projects from "./components/projectscomp/projectsComp";
import Contact from "./components/contact/contact";

function Home(){

    return (
        <main className="overflow-x-hidden">
     <Header />
     <div className="bg-cont bg-HomeLight dark:bg-HomeDark bgMobileFix:bg-MobileLight bgMobileFix:dark:bg-MobileDark">
     <Hero />
     <About />
     </div>
     <Projects/>
     <Contact/>
     </main>
    )
}

export default Home;
