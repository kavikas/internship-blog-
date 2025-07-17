'use client';
import Link from 'next/link';
const AdminLogin = () => {
  return (
    <>
      <div className="links">
        <nav>
          <a href="/Create">create</a>
          <a href="/Update">Update</a>
          <a href="/Delete">Delete</a>
        </nav>
      </div>
      <h1 className="heading">Admin Login</h1>
      <div className="form">
        <form>
          <div className="form-container">
            <label className="label">Username</label>
            <input className="input" placeholder="Enter your name" />

            <label className="label">Email</label>
            <input className="input" placeholder="Enter your email" />

            <label className="label">Password</label>
            <input className="input" type="password" placeholder="Enter your password" />
            <button className="submit">submit</button>
          </div>
        </form>
    </div>
    </>
  );
};

export default AdminLogin;
