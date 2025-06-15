import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Nithin Kamath",
      role: "Founder & CEO",
      image: "media/images/nithinKamath.jpg",
      bio: "Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.",
      achievements: "Member of SEBI Secondary Market Advisory Committee (SMAC) and Market Data Advisory Committee (MDAC).",
      interests: "Playing basketball is his zen.",
      social: [
        { name: "LinkedIn", url: "#" },
        { name: "Twitter", url: "https://twitter.com/Nithin0dha" }
      ]
    },
    {
      name: "Kailash",
      role: "Director",
      image: "media/images/Kailash.jpg",
      bio: "Kailash brings over 15 years of experience in the financial markets. His expertise in risk management and compliance has been instrumental in Zerodha's growth.",
      achievements: "Pioneered several risk management systems in Indian broking.",
      interests: "Passionate about market microstructure and technology.",
      social: [
        { name: "LinkedIn", url: "#" },
        { name: "Twitter", url: "#" }
      ]
    }
  ];

  return (
    <section className="team-section py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h6 className="text-primary fw-semibold mb-3 animate__animated animate__fadeIn">OUR TEAM</h6>
          <h2 className="display-5 fw-bold mb-4 animate__animated animate__fadeInUp">Meet the People Behind Zerodha</h2>
          <p className="lead text-secondary col-lg-8 mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Our team of experienced professionals is dedicated to revolutionizing the Indian financial markets through technology and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-6 animate__animated animate__fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="card border-0 shadow-sm h-100">
                <div className="row g-0">
                  {/* Image Column */}
                  <div className="col-md-5">
                    <div className="p-4 text-center">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="rounded-circle img-fluid shadow-sm mb-3"
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                      />
                      <h4 className="fw-bold mb-1">{member.name}</h4>
                      <p className="text-primary mb-3">{member.role}</p>
                      <div className="d-flex justify-content-center gap-2">
                        {member.social.map((link, i) => (
                          <a 
                            key={i}
                            href={link.url} 
                            className="btn btn-sm btn-outline-primary rounded-pill px-3"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="col-md-7">
                    <div className="p-4">
                      <p className="mb-3">{member.bio}</p>
                      <div className="mb-3">
                        <h6 className="fw-bold text-primary mb-2">Achievements</h6>
                        <p className="mb-0 text-secondary">{member.achievements}</p>
                      </div>
                      <div>
                        <h6 className="fw-bold text-primary mb-2">Interests</h6>
                        <p className="mb-0 text-secondary">{member.interests}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="text-center mt-5 pt-5 border-top animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="fw-bold mb-4">Join Our Team</h3>
          <p className="lead text-secondary mb-4">
            We're always looking for talented individuals who share our vision of making financial markets accessible to everyone.
          </p>
          <a href="/careers" className="btn btn-primary btn-lg px-4">
            <i className="bi bi-person-plus me-2"></i>
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
