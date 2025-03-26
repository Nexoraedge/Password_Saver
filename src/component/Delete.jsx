import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';



const Delete = () => {






    const notify = () => toast.success("Deleted Succesfully!! 🚀🚀");

    return (
        <>
            <button onClick={() => {
                
        }

            } className='  rounded-full cursor-pointer text-sm'><lord-icon
                src="https://cdn.lordicon.com/nhqwlgwt.json"
                trigger="hover"
                colors="primary:#121331,secondary:#110a5c,tertiary:#646e78,quaternary:#110a5c"
                style={{ height: '22px' }}
                className={"cursor-pointer"}

            >
                </lord-icon></button> </>
    )
}

export default Delete