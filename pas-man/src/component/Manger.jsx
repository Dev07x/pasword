import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Manger = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })


    const [passwordArrays, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("password");



        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }


    }, [])

    const copyText = (text) => {
        alert("copied to clipboard");
        navigator.clipboard.writeText(text);
    };



    const showPassword = () => {

        alert("show the password");
    }
    const savePassword = () => {
     
       if(form.site.length>3&&form.username.length>3&&form.password.length>3){
        setpasswordArray([...passwordArrays, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArrays, { ...form, id: uuidv4() }]))
        console.log(passwordArrays)
        setform({site:"",username:"",password:""})
        }
else{
    alert("error please insert more than 3 latter")
}
}


    const deletePassword = (id) => {
        console.log("Deleting password with id", id)
        setpasswordArray(passwordArrays.filter(item => item.id !== id))
        localStorage.setItem('password', JSON.stringify(passwordArrays.filter(item => item.id !== id)))
    }

    const editPassword = (id) => {
        console.log("edit password with id", id)
        setform(passwordArrays.filter(i=>i.id===id)[0])
        setpasswordArray(passwordArrays.filter(item => item.id !== id))

    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (

        <div className='flex justify-center items-center w-full bg-green-50'>
            <div className="px-2 md:px-0 md:mycontainer rounded-2xl   w-fit">
                <h1 className='text-4xl text font-bold text-center'><span className='text-green-700'>&lt;</span>Pass<span className='text-green-700'>op/&gt;</span></h1>
                <p className='text-green-900 text-lg text-center'>Your Own Password Manager</p>


                <div className=' flex flex-col p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' type="text" name='site' className='border border-green-500 w-full text-black py-1 p-4' />

                    <div className='flex   w-full p-2 gap-8' >
                        <input value={form.username} onChange={handleChange} placeholder='User Name' type="text" name='username' className='border border-green-500 w-full text-black py-1 p-4' />


                        <div className="relative ">

                            <input value={form.password} onChange={handleChange} placeholder='Password' type="password" name='password' className='border border-green-500 w-full text-black py-1 p-4 ' id='' />
                            <span className='absolute right-0 py-0 p-4 px-1 cursor-pointer  ' onClick={showPassword}><script src="https://cdn.lordicon.com/lordicon.js"></script>
                                <lord-icon
                                    src="https://cdn.lordicon.com/vfczflna.json"
                                    trigger="hover"
                                >
                                </lord-icon></span>

                        </div></div>

                    <button onClick={savePassword} className='flex justify-center items-center bg-green-300 hover:bg-green-400 rounded-md px-2 py-2 w-fit gap-2 border-2 border-green-900'> <lord-icon
                        src="https://cdn.lordicon.com/zrkkrrpl.json"
                        trigger="hover">
                    </lord-icon>Save</button>


                </div>
                <div>
                    <h2 className='font-bold text-xl py-4'>Your Password</h2>
                    {passwordArrays.lenght === 0 && <div>no password to show </div>}

                    {passwordArrays.lenght != 0 && <table className="table-auto w-full rounded-sm overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>UserName</th>
                                <th className='py-2'>Pasworrd</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100 '>
                            {passwordArrays.map((item, index) => {
                                return <tr className='' key={index}>

                                    <td className=' py-2 border border-white text-center '>
                                        <div className='flex justify-center item-center'>
                                            <a href={item.site} target="_blank">

                                                {item.site}</a>

                                            <div className='svgcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>

                                                <svg viewBox="0 0 448 512" id="IconChangeColor" height="18" width="20"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" id="mainIconPathAttribute"></path></svg></div></div>

                                    </td>



                                    <td className=' py-2 border border-white text-center '>
                                        <div className='flex justify-center item-center'>
                                            {item.username}
                                            <div className=' svgcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>

                                                <svg viewBox="0 0 448 512" id="IconChangeColor" height="18" width="20"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" id="mainIconPathAttribute"></path></svg></div></div>
                                    </td>


                                    <td className=' py-2 border border-white text-center '>
                                        <div className='flex justify-center item-center'>
                                            {item.password}
                                            <div className='svgcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>

                                                <svg viewBox="0 0 448 512" id="IconChangeColor" height="18" width="20"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" id="mainIconPathAttribute"></path></svg></div></div>
                                    </td>
                                    <td className=' py-2 border border-white text-center  '>
                                        <span className='m-2 cursor-pointer ' onClick={() => { deletePassword(item.id) }}><lord-icon
                                            src="https://cdn.lordicon.com/drxwpfop.json"
                                            trigger="hover">
                                        </lord-icon></span>
                                        <span className='cursor-pointer ' onClick={() => { editPassword(item.id) }}><lord-icon
                                            src="https://cdn.lordicon.com/wuvorxbv.json"
                                            trigger="hover"
                                        >
                                        </lord-icon></span>
                                    </td>

                                </tr>
                            })}

                        </tbody>
                    </table>}</div>

               
            </div>


        </div>

    )
}

export default Manger