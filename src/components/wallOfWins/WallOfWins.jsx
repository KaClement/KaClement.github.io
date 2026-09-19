import React from 'react';
import './wallOfWins.css';
import IMG1 from '../../assets/hackathons_piuc.jpeg';
import IMG2 from '../../assets/swiss_ai_hachaktohns.jpg';
import { useLanguage } from '../../context/LanguageContext';

const WallOfWins = () => {
    const { t } = useLanguage();

    const wins = [
        {
            img: IMG1,
            title: t('wins.hug_title'),
            description: t('wins.hug_desc'),
            linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7312503952464379906/',
        },
        {
            img: IMG2,
            title: t('wins.swiss_title'),
            description: t('wins.swiss_desc'),
            github: 'https://github.com/andriiboikofr/Hackathon-Geneva', // 🔹 replace with actual repo
            linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7378683154259222528/',
        },
    ];

    return (
        <section className="wins-section" id="wins">
            <h1 className="wins-title" data-aos="fade-up">{t('wins.title')}</h1>
            <div className="wins-grid">
                {wins.map((win, index) => (
                    <div className="win-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                        <img src={win.img} alt={win.title} className="win-image" />
                        <div className="win-header">{win.title}</div>
                        <div className="win-description">{win.description}</div>
                        <div className="win-links">
                            {win.github && (
                                <a
                                    href={win.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="win-link github-link"
                                >
                                    {t('wins.github')}
                                </a>
                            )}
                            {win.linkedin && (
                                <a
                                    href={win.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="win-link linkedin-link"
                                >
                                    {t('wins.linkedin')}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WallOfWins;
