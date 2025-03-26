import React, { useState, useRef, useEffect } from 'react'
import { FaEyeSlash } from "react-icons/fa6";
import { SiKlm } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Saviour from './Saviour';

const Manager = () => {
  const passwordref = useRef()

  const [form, setForm] = useState({
    site: "",
    username: "",
    passwords: "",
  });

  const [passwordArray, setpasswordArray] = useState([])
  useEffect(() => {
    let req = fetch("http:localhost:3000/")
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })


  }
  const savePassword = () => {


    if (!form.site || !form.username || !form.passwords) {
      toast.error("Please fill all the fields");
      return;
    }
    const notify = () => toast.success("Added Succesfully!! 🚀🚀");
    notify();



    const updated = [...passwordArray, { ...form, id: uuidv4() }];
    setpasswordArray(updated);


    localStorage.setItem("passwords", JSON.stringify(updated));


    setForm({
      site: "",
      username: "",
      passwords: "",
    });


    console.log(updated);
  }



  const [showPassword, setShowPassword] = useState(false)
  const ref = useRef(null)
  const ShowPassword = () => {
    passwordref.current.type = "text"
    console.log(ref.current.src);

    if (ref.current.src.includes('https://cdn.lordicon.com/knitbwfa.json')) {
      ref.current.src = "https://cdn.lordicon.com/wdbwxkvh.json"
      passwordref.current.type = "text"
    } else {
      ref.current.src = "https://cdn.lordicon.com/knitbwfa.json";
      passwordref.current.type = "password"
    }
  }

  return (
    <>
      <ToastContainer
        draggable
        pauseOnHover
        theme="dark"

      />
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      </div>

        <div className="container mx-auto  p-5 flex flex-col gap-4 text-white">
          <div className="flex flex-col items-center my-5">
            <img src="/passsv.png" alt="LOGO" className="w-50" />
          </div>

          <div className="flex flex-col gap-4 xl:w-1/2 w-full mx-auto">
            <input
              value={form.site}
              onChange={handleChange}
              type="text"
              name='site'
              className="border border-[#3D1E8F] placeholder:text-sky-400 placeholder:font-medium placeholder:text-lg p-4 rounded-2xl"
              placeholder="Enter your website"
              aria-label="Website"
            />
            <input
              value={form.username}
              onChange={handleChange}
              type="text"
              name='username'
              className="border border-[#3D1E8F] placeholder:text-sky-400 placeholder:font-medium placeholder:text-lg p-4 rounded-2xl"
              placeholder="Enter Username"
              aria-label="Username"
            />
            <div className="flex gap-2  items-center">
              <input
                type="password"
                name='passwords'
                ref={passwordref}
                className="border border-[#3D1E8F] placeholder:text-sky-400 placeholder:font-medium placeholder:text-lg p-4 rounded-2xl w-full"
                placeholder="Enter Password"
                aria-label="Password"
                value={form.passwords}
                onChange={handleChange}
              />
              <span onClick={ShowPassword}>
                <lord-icon
                  ref={ref}
                  src="https://cdn.lordicon.com/knitbwfa.json"
                  trigger="in"
                  colors="primary:#121331,secondary:#ebe6ef,tertiary:#3d1e8f"
                  style={{ width: '40px', height: '40px' }}
                  className="cursor-pointer ">
                </lord-icon>
              </span>
            </div >
            <button
              onClick={savePassword}
              className="border border-[#3D1E8F] text-sky-200 self-center w-fit  px-4 py-2 rounded-2xl  text-sm font-normal cursor-pointer flex items-center transition-all duration-800 ease-in-out ">
              <lord-icon

                src="https://cdn.lordicon.com/edkuxwya.json"
                trigger='hover'
                colors="primary:#3d1e8f,secondary:#30c9e8 , tertiary:#3d1e8f,quaternary:#3d1e8f"
                style={{ height: '35px' }}
              >
              </lord-icon>
              Add Password
            </button>
          </div>
        </div>
        <div className="next mt-10 w-full justify-center flex  items-center ">
          <button className='w-fit border-[2px] text-center  border-sky-400 rounded-xl text-white px-4 py-2 cursor-pointer hover:text-lg hover:bg-cyan-600/70 hover:font-bold transition-all duration-200 ease-in-out
          animate-[bg-color_2s_ease-in-out infinite from-0% to-100% bottom-0% top-0%]' >
            <Link className='flex justify-center gap-1 items-center' to="/savedpass">

              Your passwords
              <lord-icon
                src="https://cdn.lordicon.com/mgfbscsd.json"
                trigger="hover"
                state="hover-roll"
                style={{ width: '40px' }}
                colors="primary:#121331,secondary:#ebe6ef,tertiary:#30c9e8"
              >
              </lord-icon>

            </Link>
          </button>
        </div>
      
    </>
  )
}

export default Manager