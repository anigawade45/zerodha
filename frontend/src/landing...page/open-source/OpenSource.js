import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiCode, FiBook } from 'react-icons/fi';

const OpenSource = () => {
  const projects = [
    {
      name: 'Kite Connect',
      description: 'Python client for the Kite Connect trading API',
      stars: '1.2k',
      forks: '450',
      language: 'Python',
      url: '#',
      features: ['REST API', 'WebSocket', 'Historical Data', 'Order Management']
    },
    {
      name: 'Kite Connect JS',
      description: 'JavaScript client for the Kite Connect trading API',
      stars: '850',
      forks: '320',
      language: 'JavaScript',
      url: '#',
      features: ['Browser Support', 'Node.js', 'WebSocket', 'TypeScript']
    },
    {
      name: 'Kite Connect PHP',
      description: 'PHP client for the Kite Connect trading API',
      stars: '450',
      forks: '180',
      language: 'PHP',
      url: '#',
      features: ['Composer', 'PSR-4', 'WebSocket', 'Documentation']
    }
  ];

  const documentation = [
    {
      title: 'Getting Started',
      description: 'Quick start guide for our open source projects',
      icon: <FiBook size={24} />
    },
    {
      title: 'API Reference',
      description: 'Detailed API documentation and examples',
      icon: <FiCode size={24} />
    },
    {
      title: 'Contributing',
      description: 'Guidelines for contributing to our projects',
      icon: <FiGitBranch size={24} />
    }
  ];

  return (
    <div className="open-source-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Open Source</h1>
          <p className="lead mb-5">
            Contributing to the trading community through open source software.
          </p>

          {/* Featured Projects */}
          <div className="projects mb-5">
            <h2 className="h3 mb-4">Featured Projects</h2>
            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-md-4">
                  <motion.div
                    className="card border-0 shadow-sm h-100"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h3 className="h5 mb-0">{project.name}</h3>
                        <a href={project.url} className="text-decoration-none">
                          <FiGithub size={20} />
                        </a>
                      </div>
                      <p className="text-muted mb-3">{project.description}</p>
                      <div className="d-flex gap-3 mb-3">
                        <div className="d-flex align-items-center">
                          <FiStar className="text-warning me-1" />
                          <span>{project.stars}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <FiGitBranch className="text-primary me-1" />
                          <span>{project.forks}</span>
                        </div>
                        <span className="badge bg-light text-dark">
                          {project.language}
                        </span>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                          <span key={i} className="badge bg-light text-dark">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="documentation mb-5">
            <h2 className="h3 mb-4">Documentation</h2>
            <div className="row g-4">
              {documentation.map((doc, index) => (
                <div key={index} className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="text-primary mb-3">
                        {doc.icon}
                      </div>
                      <h3 className="h5 mb-3">{doc.title}</h3>
                      <p className="text-muted mb-3">{doc.description}</p>
                      <a href="#" className="btn btn-link p-0">Learn More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div className="community mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className="h3 mb-2">Join Our Community</h2>
                    <p className="text-muted mb-md-0">
                      Connect with other developers, share ideas, and contribute to our projects.
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <a href="#" className="btn btn-primary">
                      Join Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contributing Guidelines */}
          <div className="contributing">
            <h2 className="h3 mb-4">Contributing Guidelines</h2>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="h5 mb-3">How to Contribute</h4>
                    <ol className="mb-0">
                      <li className="mb-2">Fork the repository</li>
                      <li className="mb-2">Create a new branch</li>
                      <li className="mb-2">Make your changes</li>
                      <li className="mb-2">Submit a pull request</li>
                    </ol>
                  </div>
                  <div className="col-md-6">
                    <h4 className="h5 mb-3">Code of Conduct</h4>
                    <p className="text-muted mb-0">
                      We expect all contributors to follow our code of conduct and maintain a respectful environment.
                    </p>
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

export default OpenSource; 