import ResumeImg from '../assets/Resume.jpg'
import Pdf from '../assets/Rangasamy M_Python Fullstack Developer.pdf'


const Resume = () => {
  return (
    <>
      <section id='resume' className="resume-gradient-bg min-vh-100 d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6 text-center">
              <div className="bg-white rounded-4 shadow-lg p-4 p-md-4 d-inline-block">
                <img 
                  src={ResumeImg } 
                  alt="Resume" 
                  className="img-fluid rounded-3"
                  style={{ maxWidth: '300px', width: '100%' }}
                />
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center text-lg-start">
              <h1 className="fw-bold text-white mb-4">Resume</h1>
              <p className="fs-6 text-white d-inline me-3">You can view my resume</p>
              <button className="btn btn-primary btn-lg px-5 py-3 fw-bold fs-5 rounded-3 shadow">
                <a className='text-light' rel="noopener noreferrer" href={Pdf} download={'Rangasamy M_Python Fullstack Developer.pdf'}>Download</a> 
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;