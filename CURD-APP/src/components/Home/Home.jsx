import "./Home.css";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../url";
import Animation from "../Animation/Animation";

const Home = () => {
  axios.defaults.withCredentials = true;
  const [users, setUsers] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${baseURL}`)
      .then((result) => {
        setUsers(result.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    setIsLoading(true);
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((result) => {
        console.log(result);
        setIsLoading(false)
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const activePopUp = () => {
    !setPopUp(); 
    if (!popUp) {
      document.querySelector(".wrapper").classList.add("active");
    }
  };
  const removePopUp = () => {
    document.querySelector(".wrapper").classList.remove("active");
  };

  return (
    <>
      <div className="users">
        <Link to={"/createUser"} className="add-new-user">
          {" "}
          Add User
        </Link>
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </thead>
          <br />
          <tbody className={isLoading? "animate": "remove-anim"}>
            {isLoading ? (
              <tr style={{display: "flex", padding:"25px 0"}}>
                <td
                  style={{
                    position: "absolute",
                    left: "0",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Animation height="30px" width="30px"/>
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td id="action-zone" className="action-zone">
                    <Link
                      to={`/updateUser/${user._id}`}
                      id="update"
                      title="Update"
                    >
                      <RxUpdate />
                    </Link>
                    <button id="danger" title="Delete" onClick={activePopUp} >
                      <MdDelete />
                    </button>
                    <div className="wrapper">
                      <div className="open-danger-area">
                        <p>Want to delete your data completely?</p>
                        <div className="btns">
                          <button onClick={() => handleDelete(user._id)}>
                            {isLoading? <><Animation/> Deleting...</>:'Yes, Delete'}
                          </button>
                          <button onClick={removePopUp}>Cancel</button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
