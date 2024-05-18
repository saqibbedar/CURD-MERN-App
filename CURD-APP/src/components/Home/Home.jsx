import "./Home.css";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../url";

const Home = () => {
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
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((result) => {
        console.log(result);
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
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  style={{
                    position: "absolute",
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "600",
                    left: "0",
                  }}
                >
                  No Data found
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
                            {isLoading? 'Deleting...':'Yes, Delete'}
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
