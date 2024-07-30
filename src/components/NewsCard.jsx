import React from 'react';
import '../styles/newsCard.css'; 

const NewsCard = ({ article }) => {
    return (
        <div className="news-card" onClick={() => window.open(article.url)}>
            <div className="news-card-content">
                <h3 className="news-card-title">{article.title}</h3>
                <p className="news-card-description">{article.description}</p>
                <div className="news-card-footer">
                    <span className="news-card-source">{article.source.name}</span>
                    <span className="news-card-date">{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
