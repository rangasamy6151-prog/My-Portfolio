import AboutImg from "../assets/About.png"

export const About = () => {

    const config = {
        para1 : 'I’m a Python Full-Stack Developer focused on building clean, responsive and user-friendly web applications.',

        para2 : 'I work with Python, Django, MySQL, Bootstrap, and React to create efficient and scalable projects.',

        para3 : 'I continuously upgrade my skills and explore new technologies to stay ahead in the development field.'
    }

  return (
    <section className="about container-fluid d-flex flex-column flex-lg-row align-items-center px-5 py-5" id="about">

  <div className="col-12 col-lg-5 text-center text-lg-start mb-4 mb-lg-0">
      <img src={AboutImg} alt="About" className="img-fluid" />
  </div>

  <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center">
      <div>
          <h1 className="fw-bold text-light border-primary border-3 border-bottom mb-4 d-inline-block">
              About Me
          </h1>
          <p className="text-light">
              {config.para1}
          </p>
          <p className="text-light">
              {config.para2}
          </p>
          <p className="text-light">
              {config.para3}
          </p>
      </div>
  </div>

</section>

  )
}
