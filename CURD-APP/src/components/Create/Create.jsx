import "./Create.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { baseURL } from "../../../url";

const Create = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);

  const handleSubmit = (e) => {
    setAdd(true);
    e.preventDefault();
    axios
      .post(`${baseURL}/createUser`, { name, email })
      .then((result) => {
        console.log(result);
        setAdd(false);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-user">
      <form onSubmit={handleSubmit} className="user-form">
        <h1>Add User</h1>
        <div className="user-name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="user-email">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">{add? "Adding...":"Add"}</button>
        <button style={{ background: "lightgrey" }}>
          <Link
            to={"/"}
            style={{
              color: " black",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            Go Back
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Create;
