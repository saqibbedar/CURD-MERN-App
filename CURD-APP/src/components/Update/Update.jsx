import '../Create/Create.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../../url';
import { Link } from 'react-router-dom';

const Update = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(()=>{
    axios.get(`${baseURL}/getUser/${id}`)
    .then(result => {
      console.log(result);
      setName(result.data.name);
      setEmail(result.data.email);
    })
    .catch(err => console.log(err))
  }, [])
  
  const update = (e)=>{
    e.preventDefault();
    setIsUpdating(false);
    axios.put(`${baseURL}/updateUser/${id}`, {name, email})
    .then(result => {
      console.log(result);
      setIsUpdating(true);
    })
    .then(err => console.log(err))
    navigate("/");
  }

  return (
      <div className='add-user'>
      <form onSubmit={update} className='user-form'>
        <h1>Update User</h1>
        <div className="user-name">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter Name' value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="user-email">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' value={email}
          onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">{isUpdating ? 'Updating...':'Update'}</button>
        <button style={{background:"lightgrey"}}><Link to={"/"} style={{color:"black"}}>Go Back</Link></button>
      </form>
    </div>
  )
}

export default Update
