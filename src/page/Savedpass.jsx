import React, { useState } from 'react'
import Navber from '../component/Navber'
import Footer from '../component/Footer';
import { ToastContainer, toast } from 'react-toastify';
import Copy from '../component/Copy';
import Edit from '../component/Edit';
import Delete from '../component/Delete';
import Saviour from '../component/Saviour';

const Savedpass = () => {
    const PasswordUser = localStorage.getItem("passwords");
    const [Password, setPassword] = useState(JSON.parse(PasswordUser));
    const [editForm, setEditForm] = useState({
        site: "",
        username: "",
        passwords: "",
        id: null
    });
    const [isEditing, setIsEditing] = useState(false);

    console.log(Password);

    const [Aname, setAname] = useState('IDLE')

    const handleDelete = (id) => {
        console.log("Deleting the password of  this id : ", id);
        const ans = confirm("Are you sure you want to delete this password?");
        if (ans) {
            const updated = Password.filter((item) => item.id !== id);
            setPassword(updated);
            localStorage.setItem("passwords", JSON.stringify(updated));
            toast.success("Password deleted successfully!");
        }

    }

    const handleEdit = (id) => {
        const passwordToEdit = Password.find((item) => item.id === id);
        setEditForm({
            site: passwordToEdit.site,
            username: passwordToEdit.username,
            passwords: passwordToEdit.passwords,
            id: id
        });
        setIsEditing(true);
    }

    const handleSaveEdit = () => {
        const updatedPasswords = Password.map((item) =>
            item.id === editForm.id ? editForm : item
        );
        setPassword(updatedPasswords);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
        setEditForm({
            site: "",
            username: "",
            passwords: "",
            id: null
        });
        setIsEditing(false);
        toast.success("Password updated successfully!");
    }

    const handleCancelEdit = () => {
        setEditForm({
            site: "",
            username: "",
            passwords: "",
            id: null
        });
        setIsEditing(false);
    }

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Password copied to clipboard!");
    }

    return (
        <>
            <ToastContainer
                draggable
                pauseOnHover
                theme='dark'
            />

            <Navber />
            <div className="absolute text-sky-200 inset-0 -z-20 h-full w-full items-center px-4 md:px-10 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            </div>
                <div className="container mx-auto  relative p-5 flex flex-col justify-center items-center z-10 gap-5">
                    <h1 className="sm:text-4xl my-5 text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-sky-600">Saved Passwords</h1>

                    {Password === null || Password.length === 0  && <div className="text-white font-bold text-2xl">NO PASSWORDS TO SHOW!!</div>}
                    {Password !== null && Password.length !== 0 && (
                        <div className="w-full overflow-x-auto">
                            <div className="table-responsive min-w-full overflow-y-auto max-h-[50vh]">
                                <table className="table-auto rounded-xl z-5    overflow-hidden w-full">
                                    <thead className='bg-[#3D1E8F] border-neutral-500/70 text-'>
                                        <tr>
                                            <th className='text-center text-sm sm:text-xl p-2 sm:p-4 border-neutral-400/50'>Site</th>
                                            <th className='text-center text-sm sm:text-xl p-2 sm:p-4 border-neutral-400/50'>Username</th>
                                            <th className='text-center text-sm sm:text-xl p-2 sm:p-4 border-neutral-400/50'>Password</th>
                                            <th className='text-center text-sm sm:text-xl p-2 sm:p-4 border-neutral-400/50'>Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody className='text-[#100336] bg-[#50b7d7] max-h-[600px] overflow-y-auto'>
                                        {Password.map(({ site, username, passwords, id }) => (
                                            <tr key={id}>
                                                <td className='text-center font-medium p-2 sm:p-4 border border-neutral-400/50'>
                                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                                                        {isEditing && editForm.id === id ? (
                                                            <input
                                                                type="text"
                                                                value={editForm.site}
                                                                onChange={(e) => setEditForm({ ...editForm, site: e.target.value })}
                                                                className="text-sm sm:text-lg bg-transparent border-b-2 border-sky-300 focus:outline-none"
                                                            />
                                                        ) : (
                                                            <a
                                                                className='truncate max-w-full sm:max-w-xs text-sm sm:text-lg break-all'
                                                                href={site}
                                                                target='_blank'
                                                                title={site}
                                                            >
                                                                {site}
                                                            </a>
                                                        )}
                                                        <div className="flex justify-center gap-2 mt-1 sm:mt-0">
                                                            {isEditing && editForm.id === id ? (
                                                                <button onClick={handleSaveEdit} className=" cursor-pointer">
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/opqmrqco.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331,secondary:#ffc738,tertiary:#104891"
                                                                        style={{ height: '28px' }}>
                                                                    </lord-icon>
                                                                </button>
                                                            ) : (
                                                                <div onClick={() => { handleCopy(site) }} ><Copy /></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-center font-medium p-2 sm:p-4 border border-neutral-400/50'>
                                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                                                        {isEditing && editForm.id === id ? (
                                                            <input
                                                                type="text"
                                                                value={editForm.username}
                                                                onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                                                                className="text-sm sm:text-lg bg-transparent border-b-2 border-sky-300 focus:outline-none"
                                                            />
                                                        ) : (
                                                            <span className='truncate max-w-full sm:max-w-xs text-sm sm:text-lg break-all'>
                                                                {username}
                                                            </span>
                                                        )}
                                                        <div className="flex justify-center gap-2 mt-1 sm:mt-0">
                                                            {isEditing && editForm.id === id ? (
                                                                <button onClick={handleSaveEdit} className="cursor-pointer">
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/opqmrqco.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331,secondary:#ffc738,tertiary:#104891"
                                                                        style={{ height: '28px' }}>
                                                                    </lord-icon>
                                                                </button>
                                                            ) : (
                                                                <div onClick={() => { handleCopy(username) }} ><Copy /></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-center font-medium p-2 sm:p-4 border border-neutral-400/50'>
                                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                                                        {isEditing && editForm.id === id ? (
                                                            <input
                                                                type="text"
                                                                value={editForm.passwords}
                                                                onChange={(e) => setEditForm({ ...editForm, passwords: e.target.value })}
                                                                className="text-sm sm:text-lg bg-transparent border-b-2 border-sky-300 focus:outline-none"
                                                            />
                                                        ) : (
                                                            <span className='truncate max-w-full sm:max-w-xs text-sm sm:text-lg break-all'>
                                                                {passwords}
                                                            </span>
                                                        )}
                                                        <div className="flex justify-center gap-2 mt-1 sm:mt-0">
                                                            {isEditing && editForm.id === id ? (
                                                                <button onClick={handleSaveEdit} className="cursor-pointer">
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/opqmrqco.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331,secondary:#ffc738,tertiary:#104891"
                                                                        style={{ height: '28px' }}>
                                                                    </lord-icon>
                                                                </button>
                                                            ) : (
                                                                <div onClick={() => { handleCopy(passwords) }} ><Copy /></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-center font-medium p-2 sm:p-4 border border-neutral-400/50'>
                                                    <div className="flex justify-center gap-2">
                                                        {isEditing && editForm.id === id ? (
                                                            <>
                                                                <button onClick={handleSaveEdit} className="cursor-pointer hover:text-green-200">
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/opqmrqco.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331,secondary:#ffc738,tertiary:#104891"
                                                                        style={{ height: '28px' }}>
                                                                    </lord-icon>
                                                                </button>
                                                                <button onClick={handleCancelEdit} className="text-red-400 hover:text-red-200">
                                                                    <div className="svg cursor-pointer">
                                                                        <lord-icon
                                                                            src="https://cdn.lordicon.com/nqtddedc.json"
                                                                            trigger="hover"
                                                                            state="hover-cross-2"
                                                                            colors="primary:#1b1091"
                                                                            style={{ height: '28px' }}>
                                                                        </lord-icon>
                                                                    </div>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div onClick={() => { handleEdit(id) }}><Edit /></div>

                                                                <div onClick={() => { handleDelete(id) }}><Delete /></div>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            
            <Saviour Aname={Aname}  />
            <Footer />
        </>
    )
}

export default Savedpass