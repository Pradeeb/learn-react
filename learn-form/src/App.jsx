import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔥 prevent page reload

    const formData = new FormData();
    formData.append("username", name);
    formData.append("password", password);

    try {
      const response = await fetch("https://your-api-url.com/login", {
        method: "POST",
        body: formData, // ✅ form-data
      });

      const data = await response.json();
      console.log("Response:", data);

      setShow(true); // show result after success
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>

        {/* ✅ FORM TAG */}
        <form onSubmit={handleSubmit}>

          <div className="input">
            <input
              name="username"
              type="text"
              required
              placeholder="user name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input">
            <input
              name="password"
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input">
            <button type="submit" className="button">
              Login
            </button>
          </div>

        </form>

        {show && <h5>{`${name} ${password}`}</h5>}
      </div>
    </>
  );
}

export default App;