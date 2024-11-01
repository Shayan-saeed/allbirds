'use client'
import React, { useState } from 'react'
import { signUp, login } from '../app/authService'
import { toast } from 'react-toastify';

const LoginSignup = () => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await login(loginEmail, loginPassword);
            toast.success('Logged in successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } catch (error) {
            toast.error('Failed to login. Please check your credentials.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (signupPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            await signUp(signupEmail, signupPassword, signupName);
            toast.success('Account created successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } catch (error) {
            toast.error('Failed to create account. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div className="flex flex-wrap bg-[#f2ece9] p-8 md:p-36">
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-xl font-bold mb-4">LOGIN</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full p-2 border bg-white text-black"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full p-2 border bg-white text-black"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full font-bold bg-black text-white hover:text-black hover:bg-white hover:border-2 hover:border-black transition p-2 mt-4">
                        SIGN IN
                    </button>
                </form>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-xl font-bold mb-4">CREATE AN ACCOUNT</h2>
                {error && <p className="text-red-500">{error}</p>}
                <p className="mb-2">We never save credit card information.</p>
                <p className="mb-4">Registering makes checkout fast and easy and saves your order information in your account.</p>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full p-2 border bg-white text-black"
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full p-2 border bg-white text-black"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full p-2 border bg-white text-black"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Confirm Password</label>
                        <input
                            type="password"
                            required
                            className="w-full p-2 border bg-white text-black"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full font-bold bg-black text-white hover:text-black hover:bg-white hover:border-2 hover:border-black transition p-2 mt-4">
                        REGISTER
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginSignup
