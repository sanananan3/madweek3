import React, { useState } from "react";
import axios from 'axios';


const SignUp: React.FC = () => {

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const handleSignUp = async (event: React.FormEvent) => {

        try {
            const response = await axios.post('/api/signup', {
                userId,
                userPw,
            });

            console.log(response.data);

        } catch (error) {
            console.error('Error during sign up', error);

        }
    };

    return (
        <form onSubmit={handleSignUp}>
          <input 
            type="text" 
            placeholder="Username" 
            value={userId}
            onChange={(e) => setUserId(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)} 
            required 
          />
          <button type="submit">Sign Up</button>
          
        </form>
      );
};



export default SignUp;
