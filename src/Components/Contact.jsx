const Contact = () => {
  return (
    <section id="contact" className="py-5 d-flex align-items-center" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <h1 className="text-white fw-bold mb-4">Contact</h1>
            <p className="text-white mb-5">
              If you want to discuss more in detail, please contact me
            </p>
            <div className="mb-4">
              <p className="text-white mb-3">
                <span className="fw-bold" style={{ color: '#ffd700' }}>Email :</span> rangasamy6151@gmail.com
              </p>
              <p className="text-white">
                <span className="fw-bold" style={{ color: '#ffd700' }}>Phone :</span> +91 6385525635
              </p>
            </div>
            <footer className="mt-5 pt-4 border-top border-white border-opacity-25">
              <p className="text-white mb-0">© Sanjay✨ 2025</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;