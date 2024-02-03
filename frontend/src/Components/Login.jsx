import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useLogin } from "../hooks/useLogin";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
      e.preventDefault()

      await login(email,password)
    }

  return (
    <div className="container py-5 bg-fitness">
        <div className="d-flex justify-content-center align-items-center py-5">

            <div className="bg-dark p-3 rounded w-75 text-white">
              <h2>Accedi</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    placeholder="Inserisci Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    placeholder="Inserisci Password"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button type="submit" className="btn btn-danger w-100 rounded-0 mt-3" disabled={isLoading}>
                  Accedi
                </button>
                {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
                </form>
                <p className="mt-5">Non hai un account?</p>
                <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                  Registrati
                </Link>

            </div>

      </div>
    </div>
  );
}

export default Login;
