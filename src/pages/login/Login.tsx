import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleEntrar = (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <h1>Login page</h1>
      <form>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
          />
        </label>

        <button type="submit" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </>
  );
};
