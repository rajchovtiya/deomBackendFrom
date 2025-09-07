"use client"
import React, { useState } from 'react'

function Singup() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/singup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await (res).json();
        setMessage(data.message);
    }
    return (
        <div>
            <div className='flex items-center justify-center h-screen flex-col'>
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required className='border border-black mt-4 w-[450px] px-4 py-1' /><br />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required className='border border-black mt-4 w-[450px] px-4 py-1' /><br />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required className='border border-black mt-4 w-[450px] px-4 py-1' /><br />
                    <button type="submit" className='mt-10 bg-black text-white px-6 py-1 cursor-pointer'>Signup</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default Singup
