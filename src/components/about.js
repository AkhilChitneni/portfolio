import React from 'react'

import profile from '../images/profile1.jpeg'

const about = () => {
    return (
        <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          
        </div>
        

        <div className="row">
          <div className="col-lg-4">
            <img src={profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Developer</h3>
            
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>15 December 1997</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="http://akhilchitneni.netlify.app" target="_blank">http://akhilchitneni.netlify.app</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 98858 10277</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Hyderabad, Telangana</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>akhilchitneni@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
    
       
    )
}

export default about
