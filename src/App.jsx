import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <Navbar />
            <main className="pt-16">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default App;