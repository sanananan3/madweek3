import React, { useState, FC } from 'react';
import axios from 'axios';

interface LoginProps {
    onLoginSuccess: () => void;
}

const clientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
console.log(clientID);
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const Login: FC<LoginProps> = ({ onLoginSuccess }) => {

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const handleGitHubLogin = () => {
        // GitHub OAuth 로그인 페이지로 리디렉션
        if (!clientID) {
            console.error('GitHub Client ID is not defined');
            return;
        }
        const redirectUri = encodeURIComponent('http://localhost:3000');
        const scope = encodeURIComponent('user');
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scope}`;
        window.location.href = githubAuthUrl;
    };


    const handleLogin = async (event: React.FormEvent) => {
        try {
            const response = await axios.post('/api/signup', {
                userId,
                userPw,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error during sign up', error);
        }
        onLoginSuccess();
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={userPw}
                    onChange={(e) => setUserPw(e.target.value)}
                    required
                />
                <button type="submit">Login</button>

            </form>
            <p>hello</p>
            <button onClick={handleGitHubLogin}>Login with GitHub</button>
        </div>
    );
};

export default Login;
