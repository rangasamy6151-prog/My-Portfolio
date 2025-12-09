import React, { useState } from 'react';
import Project1 from '../assets/Project-1.jpg'
import Project2 from '../assets/Project-2.jpg'
import Project3 from '../assets/Project-3.jpg'

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      image: Project1,
      alt: "E-commerce Website",
      title: "E-commerce Platform with Modern UI",
      description: "Built with HTML & CSS",
      link : "https://rangasamy6151-prog.github.io/TN-41-E-Commerce/"
    },
    {
      id: 2,
      image: Project2,
      alt: "QR Generator Project",
      title: "QR Code Generator",
      description: "Built with Reactjs",
      link : "https://rangasamy6151-prog.github.io/QR-Maker/"
    },
    {
      id: 3,
      image: Project3,
      alt: "Blog Website",
      title: "Modern Blog Platform",
      description: "Built with Django",
      link : "https://github.com/rangasamy6151-prog/Blog"
    }
  ];

  return (
    <>      
      <section id='projects' className="py-5 min-vh-100" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div className="container">
          <h1 className="text-white fw-bold mb-3 display-4">
            Projects
          </h1>
          <p className="text-white mb-5 fs-6">
            These are some of my best projects. I have built these with HTML5,CSS,React.JS and Django. Check them out.
          </p>

          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4">
                <div 
                  className="position-relative rounded-3 overflow-hidden shadow-lg"
                  style={{ height: '280px', cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-100 h-100 object-fit-cover"
                  />
                  
                  <div 
                    className={`position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4 ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(88, 80, 141, 0.95) 0%, rgba(75, 63, 114, 0.95) 100%)',
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <h3 className="text-light fs-5 fw-normal mb-4 lh-base px-3">
                      {project.title}
                    </h3>
                    <button 
                      className="btn btn-primary btn-lg fw-semibold px-4 py-3 rounded-3 shadow"
                      style={{
                        backgroundColor: '#6366f1',
                        borderColor: '#6366f1'
                      }}
                    >
                      <a className='text-light' href={project.link}>View Project</a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;