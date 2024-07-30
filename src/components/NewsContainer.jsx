import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NewsCard from './NewsCard';
import Pagination from './Pagination'; 
import '../styles/newsContainer.css';

const NewsContainer = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0); 
    
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true); 
            const API_KEY = '475dab401b2747f3b4cc74ea88d08276';
            const baseUrl = 'https://newsapi.org/v2';
            let url;

            if (searchQuery) {
                url = `${baseUrl}/everything?q=${encodeURIComponent(searchQuery)}&apiKey=${API_KEY}&page=${currentPage}&pageSize=9`;
            } else {
                url = `${baseUrl}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&page=${currentPage}&pageSize=9`;
            }

            try {
                const response = await axios.get(url);
                setArticles(response.data.articles);
                setTotalResults(response.data.totalResults); 
                setError(null); 
            } catch (err) {
                setError('Failed to fetch news articles');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [searchQuery, category, currentPage]);

   
    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h2>{error}</h2>;

    const totalPages = Math.ceil(totalResults / 9); 

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="news-container">
                {articles.length === 0 && <h1>No articles found.</h1>}
                {articles.length > 0 && articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default NewsContainer;

