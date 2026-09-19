import React from 'react';
import './about.css';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id='about'>
      <div className='about__container'>
        <main className='row'>
          <section className="col">
            <div className='title'>
              <h2>{t('about.education')}</h2>
            </div>
            <div className='contents'>

              {/* Databricks Cert */}
              <div className='box' data-aos="fade-up" style={{ borderColor: '#38bdf8', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/databricks.svg" alt="Databricks" style={{ width: '40px', filter: 'invert(58%) sepia(85%) saturate(3015%) hue-rotate(170deg) brightness(99%) contrast(98%)' }} />
                  <h3 style={{ color: '#38bdf8', marginBottom: 0 }}>{t('about.cert_db')}</h3>
              </div>

              {/* Master */}
              <div className='box' data-aos="fade-up">
                <h3>{t('about.msc_title')}</h3>
                <h4>{t('about.msc_school')}</h4>
                <ul>
                    <li>{t('about.msc_desc')}</li>
                </ul>
                <div className="tag-container">
                    <span className="tag">Data Science</span>
                    <span className="tag">Machine Learning</span>
                    <span className="tag">Information Retrieval</span>
                    <span className="tag">Semantic Web technologies</span>
                    <span className="tag">Knowledge Organization System</span>
                </div>
              </div>

              {/* AWS Cert */}
              <div className='box' data-aos="fade-up" style={{ borderColor: '#FF9900', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => window.open('https://www.credly.com/badges/84b2d43c-82e4-4982-acd4-5fcbf4263c9c/public_url', '_blank')}>
                  <img src="https://images.credly.com/size/340x340/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png" alt="AWS Certified Machine Learning – Specialty" style={{ width: '60px' }} />
                  <h3 style={{ color: '#FF9900', marginBottom: 0 }}>{t('about.cert_aws')}</h3>
              </div>

              {/* Bachelor */}
              <div className='box' data-aos="fade-up">
                  <h3>{t('about.bsc_title')}</h3>
                  <h4>{t('about.bsc_school')}</h4>
                  <ul>
                      <li>{t('about.bsc_desc1')}</li>
                      <li>{t('about.bsc_desc2')}</li>
                  </ul>
                  <div className="tag-container">
                      <span className="tag">Object-Oriented Programming</span>
                      <span className="tag">Algorithms</span>
                      <span className="tag">Database Design</span>
                      <span className="tag">Artificial Intelligence</span>
                      <span className="tag">Data Mining</span>
                      <span className="tag">Linear Algebra</span>
                      <span className="tag">Information Systems Security</span>
                      <span className="tag">Enterprise Information Systems</span>
                </div>
              </div>

              {/* Baccalaureate */}
              <div className='box' data-aos="fade-up">
                <h3>{t('about.bac_title')}</h3>
                <p>{t('about.bac_school')}</p>
              </div>

            </div>
          </section>

          <section className="col">
            <div className='title'>
              <h2>{t('about.experience')}</h2>
            </div>


            <div className='contents'>

                <div className='box'>
                    <h3>{t('about.ta_title')}</h3>

                    <h4>{t('about.ta_school')}</h4>
                    <h4>{t('about.ta_date')}</h4>
                    <ul>
                        <li>{t('about.ta_desc1')}</li>
                        <li>{t('about.ta_desc2')}</li>
                        <li>{t('about.ta_desc3')}</li>
                    </ul>

                        <div className="tag-container_2">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scala.svg" alt="Scala" title="Scala" className="skill-tag_2"/>
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" title="Python" className="skill-tag_2"/>
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" title="Docker" className="skill-tag_2"/>
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg" alt="Git" title="Git" className="skill-tag_2"/>
                            </div>
                    </div>

                    <div className='box'>
                        <h3>{t('about.intern_title')}</h3>
                        <h4>{t('about.intern_school')}</h4>
                        <h4>{t('about.intern_date')}</h4>

                        <ul>
                            <li>{t('about.intern_desc1')}</li>
                            <li>{t('about.intern_desc2')}</li>
                            <li>{t('about.intern_desc3')}</li>
                            <li>{t('about.intern_desc4')}</li>
                        </ul>

                        <div className="tag-container_2">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python"
                                 title="Python" className="skill-tag_2"/>
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" alt="Flask"
                                 title="Flask" className="skill-tag_2"/>
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mariadb.svg" alt="MariaDB"
                                 title="SQL" className="skill-tag_2"/>
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker"
                                 title="Docker" className="skill-tag_2"/>
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg" alt="Linux"
                                 title="Linux" className="skill-tag_2"/>
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg"
                                 alt="Javascript" title="Javascript" className="skill-tag_2"/>
                        </div>


                    </div>


                    <div className='box'>
                        <h4>{t('about.vol_date')}</h4>
                        <h3>{t('about.vol_title')}</h3>
                        <ul>
                            <li>{t('about.vol_desc1')}</li>
                            <li>{t('about.vol_desc2')}</li>
                        </ul>
                    </div>


                </div>
          </section>
        </main>
      </div>
    </section>
);
};

export default About;