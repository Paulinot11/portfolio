import { 
    FaDatabase, FaProjectDiagram, FaHtml5, FaLayerGroup, 
    FaServer, FaCode, FaLinux, FaFileAlt 
} from 'react-icons/fa';
import { competences } from '../data/data';

const iconMap = {
    FaDatabase, FaProjectDiagram, FaHtml5, FaLayerGroup,
    FaServer, FaCode, FaLinux, FaFileAlt
};

const Competences = () => {
    return (
        <section id="competences" className="py-20">
            <div className="container-custom">
                <h2 className="section-title">Compétences techniques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {competences.map((cat, index) => {
                        const Icon = iconMap[cat.icon] || FaCode;
                        return (
                            <div key={index} className="bg-card-bg p-6 rounded-2xl border border-border card-hover">
                                <h3 className="text-xl font-semibold mb-4">
                                    <Icon className="inline mr-3 text-accent" /> {cat.categorie}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((item, idx) => (
                                        <span key={idx} className="skill-item">{item}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Competences;