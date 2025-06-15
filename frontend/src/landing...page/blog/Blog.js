import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiClock, FiUser, FiTag, FiBookmark, FiShare2 } from 'react-icons/fi';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'market', name: 'Market Analysis' },
    { id: 'trading', name: 'Trading Strategies' },
    { id: 'education', name: 'Trading Education' },
    { id: 'news', name: 'Market News' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Understanding Market Trends in 2024',
      excerpt: 'A comprehensive analysis of current market trends and what to expect in the coming months.',
      author: 'John Doe',   
      category: 'market',
      date: '2024-03-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      tags: ['Market Analysis', 'Trends', '2024']
    },
    {
      id: 2,
      title: 'Options Trading Strategies for Beginners',
      excerpt: 'Learn the basics of options trading and essential strategies for new traders.',
      author: 'Jane Smith',
      category: 'trading',
      date: '2024-03-14',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=800&q=80',
      tags: ['Options', 'Beginners', 'Strategies']
    },
    {
      id: 3,
      title: 'Technical Analysis Fundamentals',
      excerpt: 'Master the basics of technical analysis and chart patterns.',
      author: 'Mike Johnson',
      category: 'education',
      date: '2024-03-13',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      tags: ['Technical Analysis', 'Chart Patterns', 'Education']
    },
    {
      id: 4,
      title: 'Market Update: Sensex Crosses 74,000',
      excerpt: 'Breaking news and analysis of the latest market milestone.',
      author: 'Sarah Wilson',
      category: 'news',
      date: '2024-03-12',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&w=800&q=80',
      tags: ['Market News', 'Sensex', 'Milestone']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Trading Blog</h1>
          <p className="lead mb-5">
            Insights, analysis, and educational content for traders.
          </p>

          {/* Search and Categories */}
          <div className="row mb-5">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <FiSearch className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Article */}
          <div className="featured-article mb-5">
            <div className="card border-0 shadow-sm">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="img-fluid h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body p-4">
                    <div className="d-flex gap-2 mb-3">
                      {articles[0].tags.map((tag, index) => (
                        <span key={index} className="badge bg-light text-dark">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="h3 mb-3">{articles[0].title}</h2>
                    <p className="text-muted mb-4">{articles[0].excerpt}</p>
                    <div className="d-flex align-items-center text-muted mb-4">
                      <small className="me-3">
                        <FiUser className="me-1" />
                        {articles[0].author}
                      </small>
                      <small className="me-3">
                        <FiClock className="me-1" />
                        {articles[0].readTime}
                      </small>
                      <small>
                        {new Date(articles[0].date).toLocaleDateString()}
                      </small>
                    </div>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <div className="row g-4">
            {filteredArticles.slice(1).map(article => (
              <div key={article.id} className="col-md-6">
                <motion.div
                  className="card border-0 shadow-sm h-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body p-4">
                    <div className="d-flex gap-2 mb-3">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="badge bg-light text-dark">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="h5 mb-3">{article.title}</h3>
                    <p className="text-muted mb-4">{article.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center text-muted">
                        <small className="me-3">
                          <FiUser className="me-1" />
                          {article.author}
                        </small>
                        <small>
                          <FiClock className="me-1" />
                          {article.readTime}
                        </small>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-link btn-sm text-muted">
                          <FiBookmark />
                        </button>
                        <button className="btn btn-link btn-sm text-muted">
                          <FiShare2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-section mt-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h3 className="h4 mb-2">Stay Updated</h3>
                    <p className="text-muted mb-md-0">
                      Subscribe to our newsletter for the latest trading insights and market analysis.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <button className="btn btn-primary">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 