import React from 'react';

function Header() {
    return (
        <header className='flex mx-10 mt-5 justify-between'>
            <div className="logo">
                <h2 className='text-3xl font-semibold tracking-wide text-yellow-400'>zipd</h2>
            </div>
            <div className="auth-buttons flex gap-5">
                <button className="btn font-medium text-lg ">Log In</button>
                <button className="btn font-medium text-lg ">Sign Up</button>
            </div>
        </header>
    );
}

export default Header;