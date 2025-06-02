import React, { useState } from 'react';
import style from './Login.module.css'; 
import backgroundImage from '../../imgs/assets/bg.jpg';
import logo from '../../imgs/assets/logo.png';
import lockerIcon from '../../imgs/assets/lock.png';
import mailIcon from '../../imgs/assets/mail.png';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:1337/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: email, 
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok && data.jwt) {
                localStorage.setItem('token', data.jwt);
                localStorage.setItem('user', JSON.stringify(data.user));
                return data;
            } else {
                console.error('Erro no login:', data.message || data);
                return null;
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            return null;
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await login(email, password);

        if (response?.jwt) {
            navigate('/home');
        } else {
            alert("Email ou senha incorretos.");
        }
    };
  
      
    const handlePasswordVisibility = (e) => {
      setShowPassword(e.target.checked);
    };

    return (
        <div className={style.container}>
            <img src={backgroundImage} alt="Background" className={style.backgroundImage} />
            <div className={style.formContainerContainer}>
                <div className={style.formContainer}>
                    <img src={logo} className={style.logo}></img>
                    <form  style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-around', flex: 0.8 }}>
                        <div>
                            <label style={{fontFamily: 'Open Sans', color: '#4A4A4A', fontSize: '16px', fontWeight: '500', marginBottom:'10px' }} htmlFor="email">Email:</label>
                            <div className={style.inputContainer}>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='seunome@email.com'
                                    className={style.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <img src={lockerIcon} alt="Locker Icon" className={style.inputIcon} />
                            </div>
                        </div>
                        <div>
                            <label style={{fontFamily: 'Open Sans', color: '#4A4A4A', fontSize: '16px', fontWeight: '500' }} htmlFor="password">Password:</label>
                            <div className={style.inputContainer}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder='Password'
                                    className={style.input}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <img src={mailIcon} alt="Locker Icon" className={style.inputIcon} />
                            </div>
                            <label>
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className={style.checkbox}
                                    onChange={handlePasswordVisibility}
                                />
                                Mostrar senha
                            </label>
                        </div>
                        <button className={style.loginTrouble} onClick={() =>{}}>Problemas para acessar sua conta?</button>
                        <button type="submit" className={style.submitButton} onClick={handleSubmit}>Acessar</button>
                    </form>
                    <div className={style.inline}>
                        <div style={{height: '2px', backgroundColor: '#909090', width: '200px'}}></div> <div style={{textAlign: 'center'}}>ou</div> <div style={{height: '2px', backgroundColor: '#909090', width: '200px'}}></div>
                    </div>
                    <button className={style.createAccountButton}>Cadastrar</button>
                </div>
            </div>
        </div>
    );
};

export default Login;