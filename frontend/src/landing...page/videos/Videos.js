import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiClock, FiBookmark, FiShare2 } from 'react-icons/fi';

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'tutorials', name: 'Trading Tutorials' },
    { id: 'market', name: 'Market Analysis' },
    { id: 'education', name: 'Trading Education' }
  ];

  const videos = [
    {
      id: 1,
      title: 'Getting Started with Kite',
      description: 'Learn the basics of using our trading platform.',
      duration: '15:30',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      category: 'tutorials',
      views: '12.5K',
      date: '2024-03-15'
    },
    {
      id: 2,
      title: 'Understanding Market Trends',
      description: 'A comprehensive guide to market trend analysis.',
      duration: '22:45',
      thumbnail: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      category: 'market',
      views: '8.2K',
      date: '2024-03-14'
    },
    {
      id: 3,
      title: 'Options Trading Basics',
      description: 'Introduction to options trading strategies.',
      duration: '18:20',
      thumbnail: 'https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=800&q=80',
      category: 'education',
      views: '15.7K',
      date: '2024-03-13'
    },
    {
      id: 4,
      title: 'Technical Analysis Fundamentals',
      description: 'Learn the basics of technical analysis.',
      duration: '25:15',
      thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      category: 'education',
      views: '10.3K',
      date: '2024-03-12'
    },
    {
      id: 5,
      title: 'Market Watch Tutorial',
      description: 'How to use Market Watch effectively.',
      duration: '12:40',
      thumbnail: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&w=800&q=80',
      category: 'tutorials',
      views: '7.8K',
      date: '2024-03-11'
    },
    {
      id: 6,
      title: 'Weekly Market Review',
      description: 'Analysis of the past week\'s market movements.',
      duration: '20:30',
      thumbnail: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&w=800&q=80',
      category: 'market',
      views: '9.5K',
      date: '2024-03-10'
    }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="videos-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Trading Videos</h1>
          <p className="lead mb-5">
            Learn trading through our comprehensive video tutorials and market analysis.
          </p>

          {/* Categories */}
          <div className="categories mb-5">
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

          {/* Featured Video */}
          <div className="featured-video mb-5">
            <div className="card border-0 shadow-sm">
              <div className="position-relative">
                <img
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="card-img-top"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-50 start-50 translate-middle">
                  <button className="btn btn-primary btn-lg rounded-circle">
                    <FiPlay size={24} />
                  </button>
                </div>
              </div>
              <div className="card-body p-4">
                <h2 className="h3 mb-3">{videos[0].title}</h2>
                <p className="text-muted mb-3">{videos[0].description}</p>
                <div className="d-flex align-items-center text-muted">
                  <small className="me-3">
                    <FiClock className="me-1" />
                    {videos[0].duration}
                  </small>
                  <small className="me-3">{videos[0].views} views</small>
                  <small>{new Date(videos[0].date).toLocaleDateString()}</small>
                </div>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="row g-4">
            {filteredVideos.slice(1).map(video => (
              <div key={video.id} className="col-md-6 col-lg-4">
                <motion.div
                  className="card border-0 shadow-sm h-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="position-relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <button className="btn btn-primary btn-sm rounded-circle">
                        <FiPlay size={16} />
                      </button>
                    </div>
                    <div className="position-absolute bottom-0 end-0 m-2">
                      <span className="badge bg-dark">
                        <FiClock className="me-1" />
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h3 className="h5 mb-2">{video.title}</h3>
                    <p className="text-muted small mb-3">{video.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        {video.views} views • {new Date(video.date).toLocaleDateString()}
                      </small>
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
                      Subscribe to our newsletter for the latest trading videos and updates.
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

export default Videos; 