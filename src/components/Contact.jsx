import { 
    FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, 
    FaHeart, FaGamepad, FaMusic, FaFutbol, FaUsers, 
    FaFlagCheckered, FaLanguage 
} from 'react-icons/fa';
import { personalInfo, loisirs, langues } from '../data/data';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container-custom">
                <h2 className="section-title"><FaEnvelope className="inline mr-3 text-accent" /> Me contacter</h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="flex items-start gap-4 mb-6">
                            <FaPhoneAlt className="text-3xl text-accent w-12" />
                            <div>
                                <h4 className="font-semibold">Téléphone</h4>
                                <p>{personalInfo.telephone}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-6">
                            <FaEnvelope className="text-3xl text-accent w-12" />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p>{personalInfo.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-6">
                            <FaMapMarkerAlt className="text-3xl text-accent w-12" />
                            <div>
                                <h4 className="font-semibold">Adresse</h4>
                                <p>{personalInfo.adresse}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaGithub className="text-3xl text-accent w-12" />
                            <div>
                                <h4 className="font-semibold">GitHub</h4>
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                    {personalInfo.github}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Loisirs & Langues */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4"><FaHeart className="inline mr-2 text-accent" /> Centres d'intérêt</h3>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {loisirs.map((loisir, idx) => {
                                const IconMap = { FaGamepad, FaMusic, FaFutbol, FaUsers };
                                const Icon = IconMap[loisir.icon] || FaGamepad;
                                return (
                                    <span key={idx} className="bg-card-bg px-4 py-2 rounded-full border border-border">
                                        <Icon className="inline mr-2 text-accent" /> {loisir.nom}
                                    </span>
                                );
                            })}
                        </div>

                        <h3 className="text-2xl font-bold mb-4"><FaLanguage className="inline mr-2 text-accent" /> Langues</h3>
                        {langues.map((langue, idx) => (
                            <div key={idx} className="text-text-gray mb-2">
                                <FaFlagCheckered className="inline mr-2 text-accent" />
                                <strong>{langue.langue}</strong> : {langue.niveau}
                                {langue.description && ` (${langue.description})`}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;