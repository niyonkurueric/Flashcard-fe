import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();
const token= localStorage.getItem("auth")
if(!token)
{
   navigate("/login");
}
  return (
    <div>AdminPanel</div>
  )
}

export default AdminPanel