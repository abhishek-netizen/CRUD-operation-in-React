import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function EditUser() {


    let history = useHistory();

    const { id } = useParams();




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

    useEffect(() => {
        loaduser();
    }, []);




    const onSubmit = async(e) => {
        e.preventDefault();
        // console.log(user)
        await axios.put(`http://localhost:3003/users/${id}`, user)
        history.push("/");

    }

    const loaduser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        // console.log(result)
        setUser(result.data)
    }







    return (
        <div style={{ marginTop: "20px" }}>
            <div className="container">
            <Link className="btn btn-primary" to="/" >
                      Back to home
            </Link>
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit A User</h2>
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
                        <button className="btn btn-warning btn-block">Update User</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditUser

