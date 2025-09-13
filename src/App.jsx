import './App.css'
import { API_CONFIG } from './api'

function App() {
  const handleOpenAPI = () => {
    window.open(API_CONFIG.BASE_URL, '_blank');
  };

  return (
    <div className="app">
      <main className="main-content">
        <div className="hero-section">
          <h1 className="title">Credes</h1>
          <p className="subtitle">Modern API Management Platform</p>
          <p className="description">
            Streamline your API workflows with our comprehensive platform. 
            Manage authentication, tasks, users, and more with ease.
          </p>
          <button className="api-button" onClick={handleOpenAPI}>
            Explore API
          </button>
        </div>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Credes. Built with React + Vite.</p>
        <div className="api-endpoints">
          <span>Available endpoints: {Object.values(API_CONFIG.ENDPOINTS.AUTH).join(', ')}, {API_CONFIG.ENDPOINTS.TASKS}, {API_CONFIG.ENDPOINTS.USERS}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
