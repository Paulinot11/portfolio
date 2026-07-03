import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
                <Navbar />
                <Hero />
                <Competences />
                <Projets />
                <Contact />
                <Footer />
                <ThemeToggle />
            </div>
        </ThemeProvider>
    );
}

export default App;