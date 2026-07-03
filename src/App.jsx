import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Competences />
            <Projets />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;