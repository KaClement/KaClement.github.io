import React from 'react';
import './myinfo.css';
import me_img2 from '../../assets/profile_pic_link.PNG'
import { useLanguage } from '../../context/LanguageContext';

const MyInfo = () => {
  const { t } = useLanguage();

  return (
      <section id="myinfo">
          <h2>{t('myInfo.title')}</h2>
          <br />
          <p className="subtitle">
          </p>

          <div className="row div-box">
              <div className="col-4 img-box">
                  <img src={me_img2} alt='IMG'/>
              </div>
              <div className="col-8 text-box">
              <p className="about-description">
                  {t('myInfo.bio1')}
              </p>

              <p className="about-description">
                  {t('myInfo.bio2')}
              </p>

              <p className="about-description" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--color-primary)' }}>
                  {t('myInfo.bio3')}
              </p>
              </div>
          </div>

          <div className="skills-section">

              {/* Core & Data Science Island */}
              <div className="skills-island" data-aos="fade-up" data-aos-delay="0">
                  <h3 className="island-title">{t('myInfo.core_data')}</h3>
                  <div className="skills-container">
                      <div className="skill-tag" style={{ backgroundColor: '#3776AB' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="skill-logo" />
                          <span className="skill-name">Python</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#9AB4F6', color: '#000' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg" alt="Pandas" className="skill-logo" />
                          <span className="skill-name">Pandas</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#F7931E' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg" alt="Scikit-Learn" className="skill-logo" />
                          <span className="skill-name">Scikit-Learn</span>
                      </div>
                  </div>
              </div>

              {/* Databases & Querying Island */}
              <div className="skills-island" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="island-title">{t('myInfo.databases')}</h3>
                  <div className="skills-container">
                      <div className="skill-tag" style={{ backgroundColor: '#336791' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="skill-logo" />
                          <span className="skill-name">PostgreSQL</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#003545' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mariadb.svg" alt="MariaDB" className="skill-logo" />
                          <span className="skill-name">MariaDB</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#4581C3' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/neo4j.svg" alt="Neo4j" className="skill-logo" />
                          <span className="skill-name">Neo4j</span>
                      </div>
                  </div>
              </div>

              {/* Backend & APIs Island */}
              <div className="skills-island" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="island-title">{t('myInfo.backend')}</h3>
                  <div className="skills-container">
                      <div className="skill-tag" style={{ backgroundColor: '#009688' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" alt="FastAPI" className="skill-logo" />
                          <span className="skill-name">FastAPI</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#FFFFFF' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" alt="Flask" className="skill-logo" />
                          <span className="skill-name-black">Flask</span>
                      </div>
                  </div>
              </div>

              {/* Cloud & DevOps Island */}
              <div className="skills-island" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="island-title">{t('myInfo.cloud_devops')}</h3>
                  <div className="skills-container">
                      <div className="skill-tag" style={{ backgroundColor: '#FF9900' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" alt="AWS" className="skill-logo" />
                          <span className="skill-name">AWS</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#FF3621' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/databricks.svg" alt="Databricks" className="skill-logo" />
                          <span className="skill-name">Databricks</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#2496ED' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" className="skill-logo" />
                          <span className="skill-name">Docker</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#326CE5' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg" alt="Kubernetes" className="skill-logo" />
                          <span className="skill-name">Kubernetes</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#0F1689' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/helm.svg" alt="Helm" className="skill-logo" />
                          <span className="skill-name">Helm</span>
                      </div>
                      <div className="skill-tag" style={{ backgroundColor: '#009639' }}>
                          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg" alt="Nginx" className="skill-logo" />
                          <span className="skill-name">Nginx</span>
                      </div>
                  </div>
              </div>

          </div>
      </section>
  );
};

export default MyInfo;