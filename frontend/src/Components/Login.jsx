// src/Components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://e-commerce-916t.onrender.com/api/auth/login', { username, password }, { withCredentials: true });
    
            if (response.status === 200) {
                // Assuming response data contains userId and token
                console.log(response.data);
                const { userId, token } = response.data;
    
                // Store user ID and token in local storage
                localStorage.setItem('userId', userId);
                localStorage.setItem('token', token); // If you use a token for authentication
    
                navigate('/home');
            }
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed. Please check your credentials and try again.');
        }
    };
    
    return (
        <div className="flex flex-col items-center min-h-screen pt-16 text-white bg-black sm:justify-center sm:pt-0">
            
                <div className="flex items-center gap-2 mx-auto text-2xl font-semibold tracking-tighter text-foreground">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                        </svg>
                    </div>
                    Hari Store's
                </div>
            
            <div className="relative w-full max-w-lg mt-12 sm:mt-10">
                <div className="relative w-full h-px -mb-px bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
                <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                    <div className="flex flex-col p-6">
                        <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
                        <p className="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.</p>
                    </div>
                    <div className="p-6 pt-0">
                        <form onSubmit={handleLogin}>
                            <div>
                                <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                    <div className="flex justify-between">
                                        <label className="text-xs font-medium text-gray-400 text-muted-foreground group-focus-within:text-white">Username</label>
                                        <div className="absolute text-green-200 translate-y-2 right-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd"
                                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <input type="text" name="username" placeholder="Username"
                                        autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}
                                        className="block w-full p-0 text-sm bg-transparent border-0 file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                    <div className="flex justify-between">
                                        <label className="text-xs font-medium text-gray-400 text-muted-foreground group-focus-within:text-white">Password</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full p-0 text-sm bg-transparent border-0 file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" name="remember"
                                        className="outline-none focus:outline focus:outline-sky-300" />
                                    <span className="text-xs">Remember me</span>
                                </label>
                                <a className="text-sm font-medium underline text-foreground" href="/forgot-password">Forgot password?</a>
                            </div>
                            <div className="flex items-center justify-end mt-4 gap-x-2">
                                <a className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white"
                                    href="/signup">Register</a>
                                <button
                                    className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-semibold text-black transition duration-300 bg-white rounded-md hover:bg-black hover:text-white hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                    type="submit">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
