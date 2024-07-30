import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewsContainer from './components/NewsContainer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<NewsContainer category="general" />} />
            <Route path="/entertainment" element={<NewsContainer category="Entertainment" />} />
            <Route path="/business" element={<NewsContainer category="Business" />} />
            <Route path="/technology" element={<NewsContainer category="Technology" />} />
            <Route path="/health" element={<NewsContainer category="Health" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

