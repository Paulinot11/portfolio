import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
    FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, 
    FaPaperPlane, FaCheckCircle, FaExclamationCircle,
    FaHeart, FaGamepad, FaMusic, FaFutbol, FaUsers,
    FaLanguage, FaUser, FaComment
} from 'react-icons/fa';
import { personalInfo, loisirs, langues } from '../data/data';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        emailjs.sendForm(
            'service_io4knrp', // service_xxxxx
            'template_himbr86', // template_xxxxx
            form.current,
            'vy5EkCcC_QS3L-0JF' // xxxxx
        )
        .then(() => {
            setStatus({ type: 'success', message: '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.' });
            form.current.reset();
        })
        .catch(() => {
            setStatus({ type: 'error', message: '❌ Erreur lors de l\'envoi. Veuillez réessayer ou m\'envoyer un email directement.' });
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container-custom">
                <h2 className="section-title">
                    <FaEnvelope className="inline mr-3 text-accent" /> Me contacter
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Informations */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6 text-text-primary">Informations</h3>
                        
                        <div className="flex items-start gap-4 p-4 bg-card-bg rounded-xl border border-border card-hover">
                            <FaPhoneAlt className="text-3xl text-accent mt-1" />
                            <div>
                                <h4 className="font-semibold text-text-primary">Téléphone</h4>
                                <p className="text-text-secondary">{personalInfo.telephone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-card-bg rounded-xl border border-border card-hover">
                            <FaEnvelope className="text-3xl text-accent mt-1" />
                            <div>
                                <h4 className="font-semibold text-text-primary">Email</h4>
                                <p className="text-text-secondary">{personalInfo.email}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-card-bg rounded-xl border border-border card-hover">
                            <FaMapMarkerAlt className="text-3xl text-accent mt-1" />
                            <div>
                                <h4 className="font-semibold text-text-primary">Adresse</h4>
                                <p className="text-text-secondary">{personalInfo.adresse}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-card-bg rounded-xl border border-border card-hover">
                            <FaGithub className="text-3xl text-accent mt-1" />
                            <div>
                                <h4 className="font-semibold text-text-primary">GitHub</h4>
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                                    {personalInfo.github}
                                </a>
                            </div>
                        </div>

                        {/* Loisirs */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-4 text-text-primary">
                                <FaHeart className="inline mr-2 text-accent" /> Centres d'intérêt
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-card-bg px-4 py-2 rounded-full border border-border text-text-secondary">
                                    <FaGamepad className="inline mr-2 text-accent" /> Jeux vidéo
                                </span>
                                <span className="bg-card-bg px-4 py-2 rounded-full border border-border text-text-secondary">
                                    <FaMusic className="inline mr-2 text-accent" /> Musique
                                </span>
                                <span className="bg-card-bg px-4 py-2 rounded-full border border-border text-text-secondary">
                                    <FaFutbol className="inline mr-2 text-accent" /> Football
                                </span>
                                <span className="bg-card-bg px-4 py-2 rounded-full border border-border text-text-secondary">
                                    <FaUsers className="inline mr-2 text-accent" /> AJEM
                                </span>
                            </div>
                        </div>

                        {/* Langues */}
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold mb-4 text-text-primary">
                                <FaLanguage className="inline mr-2 text-accent" /> Langues
                            </h3>
                            {langues.map((langue, idx) => (
                                <div key={idx} className="text-text-secondary mb-2">
                                    <span className="text-accent mr-2">•</span>
                                    <strong className="text-text-primary">{langue.langue}</strong> : {langue.niveau}
                                    {langue.description && ` (${langue.description})`}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-text-primary">
                            <FaPaperPlane className="inline mr-2 text-accent" /> Envoyez-moi un message
                        </h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-text-primary">
                                    <FaUser className="inline mr-2 text-accent" /> Nom complet
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border text-text-primary focus:border-accent focus:outline-none transition-colors placeholder:text-text-secondary/50"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-text-primary">
                                    <FaEnvelope className="inline mr-2 text-accent" /> Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border text-text-primary focus:border-accent focus:outline-none transition-colors placeholder:text-text-secondary/50"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-text-primary">
                                    <FaComment className="inline mr-2 text-accent" /> Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border text-text-primary focus:border-accent focus:outline-none transition-colors placeholder:text-text-secondary/50 resize-none"
                                    placeholder="Votre message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    '⏳ Envoi en cours...'
                                ) : (
                                    <>
                                        <FaPaperPlane className="mr-2" /> Envoyer le message
                                    </>
                                )}
                            </button>
                        </form>

                        {status.message && (
                            <div className={`mt-4 p-4 rounded-xl flex items-start gap-3 ${
                                status.type === 'success' 
                                    ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                            }`}>
                                {status.type === 'success' 
                                    ? <FaCheckCircle className="text-2xl mt-0.5" /> 
                                    : <FaExclamationCircle className="text-2xl mt-0.5" />
                                }
                                <p>{status.message}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;