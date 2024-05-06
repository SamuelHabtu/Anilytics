import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [currentToken, setToken] = useState();
  const testApi = async () => {
    // const data = await axios.get("http://localhost:9090");
    try {
      const data = await axios.get(
        " https://myanimelist.net/v1/oauth2/authorize",
        {
          headers: {
            // "Access-Control-Allow-Origin": "*",
            //   "Access-Control-Allow-Methods":
            //     "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            //   "Access-Control-Allow-Headers": "Origin",
          },

          params: {
            client_id: import.meta.env.VITE_CLIENT_ID,
            state: "State1",
            code_challenge: import.meta.env.VITE_CRYPTO_CHALLENGE,
            response_type: import.meta.env.VITE_RESPONSE_TYPE,
          },
        }
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <button onClick={() => testApi()}>Press Me</button>
    </>
  );
}

export default App;
