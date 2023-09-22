import React from 'react'

const Header = () => {
    return (
        <div className='bg-blue-400 w-5/6 fixed top-0 left-[16.7%] flex justify-between items-center px-6 h-[70px]'>
            <span className='text-white'>Header</span>
            <button
                type="button"
                className="bg-white text-blue-400 px-5 py-2 rounded-lg hover:bg-blue-400 hover:text-white hover:shadow-lg"
            >
                Login
            </button>

        </div>

    )
}

export default Header;