import React from "react";
import { useEffect, useState } from "react";

export default function Test() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4505/api/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h1>CIAO PAPA</h1>
      <ul>
        {user.map((singleuser) => (
          <li>
            <h2>{singleuser.name}</h2>
            <h2>{singleuser.role}</h2>
            <h2>{singleuser.email}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
