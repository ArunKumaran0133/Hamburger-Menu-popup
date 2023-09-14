import './index.css'

import Header from '../Header'

const About = () => (
  <div>
    <Header />
    <div className="about-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="large-about-image"
        alt="about"
      />
      <h1 className="about-heading">About</h1>
    </div>
  </div>
)

export default About
