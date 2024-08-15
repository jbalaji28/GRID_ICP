// src/components/NewsPage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './NewsPage.css';

function NewsPage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_KEY = 'Cel5E9ZmSyM8V6UozGrUi4kmDST9Yi7x'; // Your API key
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=renewable+energy&apiKey=${API_KEY}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="news-page">
            <Navbar />
            <div className="news-content">
                <h1>Renewable Energy News</h1>
                {loading && <p className="loading">Loading...</p>}
                {error && <p className="error">{error}</p>}
                <div className="articles">
                    {articles.length === 0 && !loading && <p>No news articles found.</p>}
                    {articles.map((article, index) => (
                        <div key={index} className="article">
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="article-image"
                                />
                            )}
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NewsPage;
