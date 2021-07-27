import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

// Import useMutation from react-query here ...

// Get API config here ...

export default function Login() {
  const title = "Login";
  document.title = "DumbMerch | " + title;

  let history = useHistory();
  let api = API();

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);

  // Create variabel for store data with useState here ...

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Create function for handle login process with useMutation here ...

  return (
    <div className="d-flex justify-content-center">
      <div className="card-auth p-4">
        <div
          style={{ fontSize: "36px", lineHeight: "49px", fontWeight: "700" }}
          className="mb-3"
        >
          Login
        </div>
        {message && message}
        <form onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="mt-3 form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleChange}
              className="px-3 py-2 mt-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChange}
              className="px-3 py-2 mt-3"
            />
          </div>
          <div className="d-grid gap-2 mt-5">
            <button className="btn btn-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
