import './index.css'

const NotFound = () => (
  <div className="not-found-bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      className="not-found-image"
      alt="not found"
    />
    <h1 className="not-found-heading">Lost Your Way?</h1>
    <p className="not-found-text">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
