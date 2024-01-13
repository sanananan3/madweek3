import React, {useState} from "react";
import axios from 'axios';


    const SignUp: React.FC = () => {
        
        const [userId, setUserId] = useState('');
        const [userPw, setUserPw] = useState('');

        const handleSignUp = async () => {

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
            <section id ="signup">
            <div className ="signup__inner">
                <h1 className="signup__title">회원가입</h1>
                <div className = "signup__lines" aria-hidden="true">
                <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    </div>
                    <div className="signup__top">
                    <div className="signup__id">
                        아이디  
                        <input type="text" id= "input_id" value={userId} onChange={(e) => setUserId(e.target.value)} />
                   
                    </div>  
                </div>

                <br />

                <div className="signup__bottom">
                    <div className="signup_pw">
                    비밀번호 
                    <input type="password" id="input_pw"  value={userPw} onChange={(e) => setUserPw(e.target.value)} />
                </div>
                </div>
                <br/>
                <button onClick={handleSignUp}>회원가입</button>
          
            </div>
            </section>
        );
    };



export default SignUp;
