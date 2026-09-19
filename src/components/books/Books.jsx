import React from 'react';
import Slider from 'react-slick';
import './books.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ddiaImage from '../../assets/ddia_image.jpg';
import dbInternals from '../../assets/database_internals_imgage.jpg';
import aiEngineering from '../../assets/ai_engineering.jpg';
import advancedPython from '../../assets/advanced_python.jpg';
import mlDesign from '../../assets/ml_design.jpg';
import sqlMereMortals from '../../assets/sqlformeremortals_img.jpg';
import { useLanguage } from '../../context/LanguageContext';

const Books = () => {
    const { t } = useLanguage();

    const books = [
        {
            img: ddiaImage,
            title: 'Designing Data-Intensive Applications',
            author: 'Martin Kleppmann',
            description: t('books.ddia_desc')
        },
        {
            img: dbInternals,
            title: 'Database Internals',
            author: 'Alex Petrov',
            description: t('books.db_internals_desc')
        },
        {
            img: aiEngineering,
            title: 'AI Engineering',
            author: 'Chip Huyen',
            description: t('books.ai_eng_desc')
        },
        {
            img: advancedPython,
            title: 'Advanced Guide to Python 3 Programming',
            author: 'John Hunt',
            description: t('books.python_desc')
        },
        {
            img: mlDesign,
            title: 'Designing Machine Learning Systems',
            author: 'Chip Huyen',
            description: t('books.ml_design_desc')
        },
        {
            img: sqlMereMortals,
            title: 'SQL Queries for Mere Mortals',
            author: 'John L. Viescas',
            description: t('books.sql_desc')
        }
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <section className='booklist-section' id='books' data-aos="fade-up">
            <h1 className='booklist-title'> {t('books.title')} </h1>
            <div className='book-carousel-container' data-aos="fade-up" data-aos-delay="200">
                <Slider {...settings} className="books-slider">
                    {books.map((book, index) => (
                        <div key={index}>
                            <div className='book-card'>
                                <img src={book.img} alt={book.title} className='book-image' />
                                <div className='book-header'>{book.title}</div>
                                <div className='book-author'>{t('books.by')} {book.author}</div>
                                <div className='book-description'>{book.description}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Books;
