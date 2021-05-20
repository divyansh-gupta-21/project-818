import React, {useState, useEffect} from 'react';
import {login_, verifyToken} from '../@_services/authentication';
//import bcrypt from 'bcrypt';

function Login(){
    const [theme_color, set_theme_color] = useState(localStorage.getItem("theme_color"))
    
    const [username, setUsername] = useState("")
    const [password, setPass] = useState("")

    const [loginState, setLoginState] = useState(true)

    useEffect(() => {
        setLoginState(verifyToken())
    }, [])

    // async function hashIt(string){
    //     const salt = await bcrypt.genSalt(6);
    //     const hashed = await bcrypt.hash(string, salt);
    //     return hashed;
    // }

    const handlePasswordChange = async (e) => {
        const password = e.target.value;
        // const hashed = await hashIt(password);

        await setPass(password)
    }

    const handleSubmit = (e) => {
        login_({username, password})
        return false
    }

    if(!loginState){

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-black">
            <div className="max-w-md w-full space-y-8">
                <div>
                <img
                    className="mx-auto h-12 w-auto"
                    src={"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"}
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" action="#login" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="off"
                        className={"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-"+theme_color+"-500 focus:border-"+theme_color+"-500 focus:z-10 sm:text-sm dark:bg-black dark:border-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-"+theme_color+"-500 dark:focus:border-"+theme_color+"-500"}
                        placeholder="Email address"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="off"
                        className={"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-"+theme_color+"-500 focus:border-"+theme_color+"-500 focus:z-10 sm:text-sm dark:bg-black dark:border-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-"+theme_color+"-500 dark:focus:border-"+theme_color+"-500"}
                        placeholder="Password" onChange={handlePasswordChange}
                    />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className={"h-4 w-4 text-"+theme_color+"-600 focus:ring-"+theme_color+"-500 border-gray-300 rounded"}
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 dark:text-white">
                        Remember me
                    </label>
                    </div>

                    <div className="text-sm">
                    <a href="#" className={"font-medium text-"+theme_color+"-600 hover:text-"+theme_color+"-500"}>
                        Forgot your password?
                    </a>
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className={"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-"+theme_color+"-600 hover:bg-"+theme_color+"-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-"+theme_color+"-500"}
                    >
                    Sign in
                    </button>
                </div>
                </form>
                <button
                    className={"group relative w-full flex justify-center py-2 -mt-4 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-"+theme_color+"-500"}
                >
                    Create an account
                </button>
            </div>
    </div>
    );
    }else{
        return (
            <></>
        )
    }
}

export default Login;