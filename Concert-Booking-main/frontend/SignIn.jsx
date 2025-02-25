import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Signin.css";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            // Send GET request to fetch all users from the mock API (db.json)
            const response = await axios.post('http://localhost:5000/api/users/signin', { username, password });

            const users = response.data;

            // Find the user with matching username and password
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                alert('Login Successful!');
                navigate("/HomePage");
            } else {
                alert('Invalid Username or Password');
            }
        } catch (error) {
            console.error('Error signing in:', error);
            alert('Error during sign in.');
        }
    };

    return (
        <div className="signin-container">
          
            <form onSubmit={handleSignIn} className="signin-form">
                <input type="text" placeholder="Enter Username" value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Enter Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
                <p>Dont have account?</p>
                <a href="/">SignUp</a>
            </form>
        </div>
    );
};

export default SignIn;
