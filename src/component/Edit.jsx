import React from 'react'
import { ToastContainer, toast } from 'react-toastify';



const Edit = () => {


    const notify = () => toast.info("Editing id..");

    return (
        <>
            <button onClick={() => {

                notify()

            }

            } className='rounded-full cursor-pointer text-sm'><lord-icon
                src="https://cdn.lordicon.com/cbtlerlm.json"
                trigger="hover"
                colors="primary:#121331,secondary:#110a5c,tertiary:#110a5c,quaternary:#848484,quinary:#ffffff"
                style={{ height: '22px' }}
                className={"cursor-pointer"}
            >
                </lord-icon></button> </>
    )
}

export default Edit;