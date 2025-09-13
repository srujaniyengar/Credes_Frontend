import './App.css'

function App() {
  const handleBackendClick = () => {
    window.open('https://credes-backend.onrender.com', '_blank');
  };

  return (
    <div className="app">
      <div className="container">
        <main className="main-content">
          <h1 className="title">Credes Backend</h1>
          <p className="subtitle">
            Modern Task Management API - Seamlessly organize your workflow
          </p>
          <button 
            className="api-button"
            onClick={handleBackendClick}
          >
            Explore Backend API
          </button>
        </main>
        
        <footer className="footer">
          <p>&copy; 2024 Credes. Hosted on <a href="https://render.com" target="_blank" rel="noopener noreferrer">Render</a></p>
        </footer>
      </div>
    </div>
  )
}

export default App
