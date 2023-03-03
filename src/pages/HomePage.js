import { useState, useEffect } from "react";
import { useAuth } from "../hooks/auth";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const HomePage = () => {
  const [message, setMessage] = useState("");
  const auth = useAuth();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(`${urlEndpoint}/users/message`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
          },
        });
        const data = await response.json();
        setMessage(data.message || "");
      } catch (error) {
        console.error(error);
        setMessage("");
      }
    };
    if (auth.userToken) {
      fetchMessage();
    } else {
      setMessage("");
    }
  }, [auth.userToken]);

  return (
    <div>
      <h1>Auth Home Page</h1>
      {message && <h3>Message: {message}</h3>}
    </div>
  );
};

export default HomePage;