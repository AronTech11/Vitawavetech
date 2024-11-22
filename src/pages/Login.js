import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";  // Import useAuth

export default function Login() {
  const [, setAuth] = useAuth(); // Access auth context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate if both email and password are provided
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    setLoading(true);

    // Mock user credentials for testing
    const mockEmail = "test@1.com";
    const mockPassword = "123";

    // Simulate an API response with mock data
    try {
      // Check if the email and password match
      if (email === mockEmail && password === mockPassword) {
        const data = { email, token: "fake-jwt-token" }; // Mock data (e.g., token)
        
        setAuth(data);  // Set the authenticated user in context
        localStorage.setItem("auth", JSON.stringify(data)); // Store it in localStorage
        toast.success("Login successful");
        navigate("/home"); // Redirect to dashboard after login
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="display-1 p-5"></h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control mb-4"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control mb-4"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                disabled={loading}
                className="btn btn-primary col-12 mb-4"
              >
                {loading ? "Waiting..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
