import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/energy.png'
import IMG5 from '../../assets/game_calc.png'
import IMG2 from '../../assets/movie_wall.jpg'
import Rapport from '../../assets/Mémoire_de_Bachelor_KACEL_Clément_SISS.pdf'
import IMG4 from '../../assets/analyze_page.png'
import IMG_sort from '../../assets/sorting_viz.png'
import { useLanguage } from '../../context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section id='portfolio'>
  <h2 className='port_title'>{t('portfolio.title')}</h2>
  <div className='container portfolio__container'>

  {/* New Project: Multi-Agent System */}
    <article className='portfolio__item' data-aos="fade-up">
      <div className="portfolio__item-image placeholder-img" style={{ height: '200px', backgroundColor: 'var(--color-bg-variant)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <span style={{ color: 'var(--color-light)' }}>Multi-Agent System Architecture</span>
      </div>
      
      <h3>{t('portfolio.proj5_title')}</h3>
      <ul>
        <li className='li_item'>{t('portfolio.proj5_desc1')}</li>
        <li className='li_item'>{t('portfolio.proj5_desc2')}</li>
        <li className='li_item'>{t('portfolio.proj5_desc3')}</li>
      </ul>

      <div className="tag-container_2">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg" title="TypeScript" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" title="Python" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" title="FastAPI" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" title="PostgreSQL (pgVector)" className="skill-tag_2" />
      </div>
    </article>

    <article className='portfolio__item' data-aos="fade-up">
    <div className="portfolio__item-image">
      <img src={IMG4} alt="Project Screenshot" />
    </div>

    <h3>{t('portfolio.proj1_title')}</h3>

    <ul>
      <li className='li_item'>{t('portfolio.proj1_desc1')}</li>
      <li className='li_item'>{t('portfolio.proj1_desc2')}</li>
    </ul>

    <div className='portfolio__item-cta'>
      <a href={Rapport} className='btn-link'>{t('portfolio.pdf_report')}</a>
    </div>

    <div className="tag-container_2">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" title="Python" className="skill-tag_2" />
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" title="MariaDB" className="skill-tag_2" />
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" title="Flask" className="skill-tag_2" />
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" title="JavaScript" className="skill-tag_2" />
    </div>
  </article>

      {/* 
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG_sort} alt="Sorting Algorithms APP Screenshot" />
        </div>
        <h3>{t('portfolio.proj2_title')}</h3>
        <ul>
      <li className="li_item">{t('portfolio.proj2_desc1')}</li>
      <li className="li_item">{t('portfolio.proj2_desc2')}</li>

        </ul>
        <div className='portfolio__item-cta'>
      <a href="https://github.com/KaClement/AlgorithmVisualizerWPF" className="btn-link" target="_blank" rel="noopener noreferrer">{t('portfolio.github_code')}</a>
        </div>
        <div className="tag-container_2">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg" title=".NET" className="skill-tag_2" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/csharp.svg" title="C#" className="skill-tag_2" />
        </div>
        
      </article>
      */}


      <article className='portfolio__item' data-aos="fade-up">
      <div className="portfolio__item-image">
        <img src={IMG2} alt="Movie Recommender Screenshot" />
      </div>
      <h3>{t('portfolio.proj3_title')}</h3>
      <ul>
        <li className='li_item'>{t('portfolio.proj3_desc1')}</li>
        <li className='li_item'>{t('portfolio.proj3_desc2')}</li>
      </ul>
      <div className='portfolio__item-cta'>
        <a href="https://www.youtube.com/watch?v=8v2ag728vzo&ab_channel=Clem" className='btn-link'>{t('portfolio.video_demo')}</a>
      </div>
      <div className="tag-container_2">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" title="Python" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" title="Flask" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" title="MariaDB" className="skill-tag_2" />
      </div>
      
    </article>

    {/*
    <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG5} alt="Game Project Screenshot" />
      </div>
      <h3>{t('portfolio.proj4_title')}</h3>
      <ul>
        <li className='li_item'>{t('portfolio.proj4_desc1')}</li>
      </ul>

      <div className='portfolio__item-cta'>
        <a href="https://www.youtube.com/watch?v=Mhk03zlrYSY&ab_channel=Clem" className='btn-link'>{t('portfolio.video_demo')}</a>
      </div>
      <div className="tag-container_2">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/csharp.svg" title="C#" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/unity.svg" title="Unity" className="skill-tag_2" />
      </div>
      
    </article>
    */}

  </div>
</section>

  )
}

export default Portfolio