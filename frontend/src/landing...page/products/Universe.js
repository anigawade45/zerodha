import React from "react";
import { motion } from "framer-motion";

const Universe = () => {
  const platforms = [
    { img: "/media/images/zerodhaFundHouse.png", alt: "Zerodha Fund House", description: "Asset Management", link: "#" },
    { img: "/media/images/sensibullLogo.svg", alt: "Sensibull", description: "Options trading platform", link: "#" },
    { img: "/media/images/goldenpiLogo.png", alt: "GoldenPi", description: "Bonds trading platform", link: "#" },
    { img: "/media/images/streakLogo.png", alt: "Streak", description: "Algo and strategy platform", link: "#" },
    { img: "/media/images/smallcaseLogo.png", alt: "Smallcase", description: "Thematic investing platform", link: "#" },
    { img: "/media/images/dittoLogo.png", alt: "Ditto", description: "Personalized insurance advice", link: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">The Zerodha Universe</h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Extend your trading and investment experience with our carefully curated
            partner platforms, each designed to enhance your financial journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row justify-content-center g-4"
        >
          {platforms.map(({ img, alt, description, link }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="col-lg-4 col-md-6"
            >
              <motion.a
                href={link}
                className="text-decoration-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center">
                  <div className="mb-3" style={{ height: '80px', display: 'flex', alignItems: 'center' }}>
                    <img
                      src={img}
                      alt={alt}
                      className="img-fluid"
                      style={{ maxHeight: '100%', maxWidth: '180px' }}
                    />
                  </div>
                  <h5 className="fw-bold text-dark mb-2">{alt}</h5>
                  <p className="text-muted text-center mb-0">{description}</p>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-5"
        >
          <motion.button
            className="btn btn-primary btn-lg px-5 py-3 rounded-pill"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Trading Now
          </motion.button>
          <p className="text-muted mt-3">
            Join millions of Indians who trust Zerodha for their investments
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Universe;
