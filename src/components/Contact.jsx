import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
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
                    <span className="text-accent">📬</span> Me contacter
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Informations */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6">Informations</h3>
                        
                        <div className="flex items-start gap-4 p-4 bg-card-bg rounded-xl border border-border card-hover">
                            <FaPhoneAlt className="text-3xl text-accent mt-1" />
                            <div>
                                <h4 className="font-semibold">Téléphone</h4>
                                <p className="text-text-gray">{personalInfo.telephone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-card-bg rounded-xl border border-border card-hover">
                            <FaEnvelope className="text-3xl text-accent mt-1" />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-text-gray">{personalInfo.email}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-card-bg rounded-xl border border-border card-hover">
                            <FaMapMarkerAlt className="text-3xl text-accent mt-1" />
                            <div>
                                <h4 className="font-semibold">Adresse</h4>
                                <p className="text-text-gray">{personalInfo.adresse}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-card-bg rounded-xl border border-border card-hover">
                            <FaGithub className="text-3xl text-accent mt-1" />
                            <div>
                                <h4 className="font-semibold">GitHub</h4>
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-gray hover:text-accent transition-colors">
                                    {personalInfo.github}
                                </a>
                            </div>
                        </div>

                        {/* Loisirs */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-4">🎯 Centres d'intérêt</h3>
                            <div className="flex flex-wrap gap-3">
                                {loisirs.map((loisir, idx) => {
                                    const IconMap = { FaGamepad: 'FaGamepad', FaMusic: 'FaMusic', FaFutbol: 'FaFutbol', FaUsers: 'FaUsers' };
                                    return (
                                        <span key={idx} className="bg-card-bg px-4 py-2 rounded-full border border-border text-text-gray">
                                            <span className="text-accent mr-2">•</span> {loisir.nom}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Langues */}
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold mb-4">🌐 Langues</h3>
                            {langues.map((langue, idx) => (
                                <div key={idx} className="text-text-gray mb-2">
                                    <span className="text-accent mr-2">•</span>
                                    <strong>{langue.langue}</strong> : {langue.niveau}
                                    {langue.description && ` (${langue.description})`}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Nom complet</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-card-bg border border-border text-text-light focus:border-accent focus:outline-none transition-colors"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-card-bg border border-border text-text-light focus:border-accent focus:outline-none transition-colors"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-card-bg border border-border text-text-light focus:border-accent focus:outline-none transition-colors resize-none"
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
                                        <FaPaperPlane /> Envoyer le message
                                    </>
                                )}
                            </button>
                        </form>

                        {status.message && (
                            <div className={`mt-4 p-4 rounded-xl flex items-start gap-3 ${
                                status.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'
                            }`}>
                                {status.type === 'success' ? <FaCheckCircle className="text-2xl mt-0.5" /> : <FaExclamationCircle className="text-2xl mt-0.5" />}
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