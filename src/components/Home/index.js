import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="large-home-image"
        alt="home"
      />
      <h1 className="home-heading">Home</h1>
    </div>
  </div>
)

export default Home
