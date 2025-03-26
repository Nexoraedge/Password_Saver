import React from 'react'

import { ToastContainer, toast } from 'react-toastify';

const Copy = () => {

    const notify = () => toast.success("Copied to clipboard!! 🚀🚀");

    return (
        
       
        <button 
         className=' rounded-full cursor-pointer text-sm'><lord-icon
            src="https://cdn.lordicon.com/iykgtsbt.json"
            trigger="hover"
            state="hover-roll"
            style={{ height: '22px' }}
            className={"cursor-pointer"}
        >
            </lord-icon></button>
            
    )
}

export default Copy