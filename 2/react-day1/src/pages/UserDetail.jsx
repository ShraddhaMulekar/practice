import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const fetchUsersDetail = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/users/${id}`);
      const data = await res.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchUsersDetail();
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (!user) return <h3>No user found</h3>;

  return (
    <div>
      <h2>User Detail</h2>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <h3>
        {user?.name?.firstname} {user?.name?.lastname}
      </h3>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Username: {user?.username}</p>
      <p>City: {user?.address?.city}</p>
    </div>
  );
};

export default UserDetail;
