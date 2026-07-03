import { FaCopyright, FaRocket } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-center py-8 border-t border-border text-text-gray">
            <p>
                <FaCopyright className="inline mr-1" /> 2026 - Ravonantenaina Paulinot - ENI Fianarantsoa
                <FaRocket className="inline ml-2" />
            </p>
        </footer>
    );
};

export default Footer;