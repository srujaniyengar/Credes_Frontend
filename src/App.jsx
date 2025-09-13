import './App.css'

function App() {
  const handleOpenBackend = () => {
    window.open('https://credes-backend.onrender.com', '_blank')
  }

  return (
    <div className="app">
      <main className="main-content">
        <div className="content-container">
          <h1 className="title">Credes Backend</h1>
          <p className="subtitle">
            A modern task management system with powerful API endpoints
          </p>
          <button className="backend-button" onClick={handleOpenBackend}>
            Open Backend API
          </button>
        </div>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Credes Project</p>
        <p>Hosted on <strong>Render</strong></p>
      </footer>
    </div>
  )
}

export default App
