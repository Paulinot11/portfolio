import { useState } from 'react';
import { FaHome, FaCogs, FaFolderOpen, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 w-full bg-card-bg/95 backdrop-blur z-50 py-4 border-b border-border transition-colors duration-300">
            <div className="container-custom flex justify-between items-center">
                <div className="text-3xl font-extrabold tracking-tight">
                    RRP<span className="text-accent">.</span>
                </div>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    <li><a href="#accueil" className="hover:text-accent transition-colors"><FaHome className="inline mr-2" /> Accueil</a></li>
                    <li><a href="#competences" className="hover:text-accent transition-colors"><FaCogs className="inline mr-2" /> Compétences</a></li>
                    <li><a href="#projets" className="hover:text-accent transition-colors"><FaFolderOpen className="inline mr-2" /> Projets</a></li>
                    <li><a href="#contact" className="hover:text-accent transition-colors"><FaEnvelope className="inline mr-2" /> Contact</a></li>
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 transition-all duration-300 flex items-center justify-center text-xl text-text-primary dark:text-text-primary"
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </button>
                    </li>
                </ul>

                {/* Hamburger */}
                <button 
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`w-7 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-7 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-7 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-[73px] left-0 w-full bg-card-bg/95 backdrop-blur transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="flex flex-col items-center gap-6 py-8">
                    <li><a href="#accueil" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors"><FaHome className="inline mr-2" /> Accueil</a></li>
                    <li><a href="#competences" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors"><FaCogs className="inline mr-2" /> Compétences</a></li>
                    <li><a href="#projets" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors"><FaFolderOpen className="inline mr-2" /> Projets</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors"><FaEnvelope className="inline mr-2" /> Contact</a></li>
                    <li>
                        <button
                            onClick={() => { toggleTheme(); setIsOpen(false); }}
                            className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 transition-all duration-300 flex items-center justify-center text-xl text-text-primary dark:text-text-primary"
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;