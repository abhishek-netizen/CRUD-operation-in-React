import React,{useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


function AddUser() {

    let history = useHistory();



    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    

     
    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
        // console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        // console.log(user)
        await axios.post("http://localhost:3003/users", user)
        history.push("/");

    }







    return (
        <div style={{ marginTop: "20px" }}>
            
            <div className="container">
            <Link className="btn btn-primary" to="/" >
                      Back to home
            </Link>
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control from-control-lg"
                                placeholder="Enter Your Name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control from-control-lg"
                                placeholder="Enter Your Username"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control from-control-lg"
                                placeholder="Enter Your E-mail Address"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control from-control-lg"
                                placeholder="Enter Your Phone Number"
                                name="phone"
                                value={phone}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control from-control-lg"
                                placeholder="Enter Your Webiste Name"
                                name="website"
                                value={website}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add User</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddUser
