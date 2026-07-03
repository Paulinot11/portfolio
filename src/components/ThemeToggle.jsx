import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 flex items-center justify-center text-2xl text-white"
            aria-label="Changer le thème"
        >
            {isDark ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;