import HomeImg from '../assets/Home.png'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {

    const config = {
        title : 'I am a Python Full-Stack Developer'
    }

    return (
        <>
            <section className="container-fluid d-flex align-items-center vh-100">
                <div className="row align-items-center justify-content-between w-100">
                    <div className="col-md-6">
                        <h1 className='fs-1 text-light ps-lg-5 ms-lg-5' >
                            Hi, <br /> I'm Rangasamy <span style={{color: 'black'}}>M</span>
                            <p className="mt-3 fs-3 mb-1">{config.title}</p>
                            <a className="icon mt-3 d-inline-block" href="#"><AiOutlineGithub/></a>
                            <a className="icon mt-3 ms-3 d-inline-block" href="#"><AiOutlineLinkedin/></a>
                        </h1>
                    </div>
                    
                    <div className="col-md-6 mt-4 mt-md-0">
                        <img 
                            src={HomeImg} 
                            className="img-fluid rounded w-75 mx-auto d-block" 
                            alt="Hero Image"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}
