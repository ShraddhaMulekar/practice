import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://fakestoreapi.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  loading ? "Loading..." : "";
  error ? { error } : "";
  return (
    <>
      <div>
        <h2>User Data</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {users?.map((u) => (
            <div
              key={u.id}
              onClick={() => navigate(`/user/${u.id}`)}
              style={{
                borderRadius: "95px",
                margin: "20px",
                padding: "25px",
                background: "linear-gradient(0deg,#557903 0%, #aab88d 100%)",
              }}
            >
              <h3>
                User Name: {u.name["firstname"]} {u.name["lastname"]}{" "}
              </h3>
              <p>Email Id: {u.email}</p>
              <p>Phone No.: {u.phone}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Re-fetch data */}
      <button onClick={fetchUser}>Refetch</button>
    </>
  );
};

export default User;
