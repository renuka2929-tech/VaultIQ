import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="home">
        <h1>Welcome to VaultIQ</h1>
        <p>
          AI-Powered Business Document Intelligence Platform
        </p>

        <button>Get Started</button>
      </div>
    </>
  );
}

export default App;