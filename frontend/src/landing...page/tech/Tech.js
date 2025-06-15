import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiCpu, FiShield, FiActivity } from 'react-icons/fi';

const Tech = () => {
  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'WebSocket', 'Redux'],
      icon: <FiCode size={32} />
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Go', 'Kafka'],
      icon: <FiServer size={32} />
    },
    {
      category: 'Database',
      technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'TimescaleDB'],
      icon: <FiDatabase size={32} />
    },
    {
      category: 'Infrastructure',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      icon: <FiCpu size={32} />
    },
    {
      category: 'Security',
      technologies: ['2FA', 'SSL/TLS', 'Encryption', 'Firewall'],
      icon: <FiShield size={32} />
    },
    {
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger'],
      icon: <FiActivity size={32} />
    }
  ];

  const openSourceProjects = [
    {
      name: 'Kite Connect',
      description: 'Python client for the Kite Connect trading API',
      stars: '1.2k',
      language: 'Python',
      url: '#'
    },
    {
      name: 'Kite Connect JS',
      description: 'JavaScript client for the Kite Connect trading API',
      stars: '850',
      language: 'JavaScript',
      url: '#'
    },
    {
      name: 'Kite Connect PHP',
      description: 'PHP client for the Kite Connect trading API',
      stars: '450',
      language: 'PHP',
      url: '#'
    }
  ];

  return (
    <div className="tech-page py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-4">Technology at Zerodha</h1>
          <p className="lead mb-5">
            Building the future of trading with cutting-edge technology.
          </p>

          {/* Tech Stack */}
          <div className="tech-stack mb-5">
            <h2 className="h3 mb-4">Our Tech Stack</h2>
            <div className="row g-4">
              {techStack.map((tech, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <motion.div
                    className="card border-0 shadow-sm h-100"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card-body p-4">
                      <div className="text-primary mb-3">
                        {tech.icon}
                      </div>
                      <h3 className="h5 mb-3">{tech.category}</h3>
                      <div className="d-flex flex-wrap gap-2">
                        {tech.technologies.map((item, i) => (
                          <span key={i} className="badge bg-light text-dark">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Source Projects */}
          <div className="open-source mb-5">
            <h2 className="h3 mb-4">Open Source Projects</h2>
            <div className="row g-4">
              {openSourceProjects.map((project, index) => (
                <div key={index} className="col-md-4">
                  <motion.div
                    className="card border-0 shadow-sm h-100"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card-body p-4">
                      <h3 className="h5 mb-3">{project.name}</h3>
                      <p className="text-muted mb-3">{project.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-light text-dark">
                          {project.language}
                        </span>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-star-fill text-warning me-1"></i>
                          <span>{project.stars}</span>
                        </div>
                      </div>
                      <a href={project.url} className="stretched-link"></a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Blog Section */}
          <div className="tech-blog mb-5">
            <h2 className="h3 mb-4">Tech Blog</h2>
            <div className="row g-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h3 className="h5 mb-3">Scaling Our Trading Infrastructure</h3>
                      <p className="text-muted mb-3">
                        Learn how we handle millions of orders per day with our robust infrastructure.
                      </p>
                      <a href="#" className="btn btn-link p-0">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Our Team */}
          <div className="join-team">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className="h3 mb-2">Join Our Tech Team</h2>
                    <p className="text-muted mb-md-0">
                      We're always looking for talented engineers to join our team.
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <a href="/careers" className="btn btn-primary">
                      View Open Positions
                    </a>
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

export default Tech; 