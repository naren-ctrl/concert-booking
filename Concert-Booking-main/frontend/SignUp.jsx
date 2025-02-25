import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/SignUp.css";


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Please Fill All Fields");
            return;
        }

        try {
            // Send the sign-up data to the mock API (db.json)
            await axios.post('http://localhost:5000/api/users/signup', { username, password });


            alert("Sign Up Successful! Please login");
            navigate("/signIn");
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Error during sign up.");
        }
    };

    return (
        <div className="signUp-container">
      
            <form onSubmit={handleSignUp} className="Signup-form">
                <input type="text" placeholder="Enter User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <input type="password" placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
                <p>ALready have a account?</p>
                <div className="signuplink">
                    <a href="/SignIn">SignIn</a>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
