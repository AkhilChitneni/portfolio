import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
  <footer id="footer">
    <div className="container">
      
      <div className="social-links">
        <a href="https://twitter.com/chitneniakhil15?s=08" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/akhil.chitneni" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/akhilchitneni" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="https://github.com/AkhilChitneni" target="_blank" className="google-plus"><i className="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/akhil-chitneni-65a221145" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>Akhil Chitneni</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
)

export default Footer
