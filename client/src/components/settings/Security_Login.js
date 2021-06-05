import {useState} from 'react'
import { PaperClipIcon } from '@heroicons/react/outline'

function Security_Login(){
    const [themeColor, setTheme] = useState(window.localStorage.getItem("theme_color"))
    return(
        <div className="mx-auto p-4" style={{height:"100%"}}>
            <div className="dp my-4">
                <h2 className="text-lg font-semibold">Contact</h2>
                <span className="text-sm text-gray-400">Where we send important messages about your account</span>
                <br />
                <div className="border border-gray-200 w-1/2 p-2 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-800 flex my-3">
                    <div className="">
                        <dl>
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b dark:border-gray-700">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    <input className="dark:bg-gray-800 p-2 w-full rounded bg-gray-200 focus:outline-none text-xl mb-2" type="email" value="divyanshg809@gmail.com"/>
                                    <span className="text-gray-500 font-semibold"><b className="text-black dark:text-white">Verified.</b> Thank you for verifying your email.</span>
                                    <br/>
                                    <span className="text-xs text-gray-500">This email is linked to your account.</span>
                                </dd>
                            </div>
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Enable additional <br/> account creation</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    
                                    <span className="text-gray-500">Additional Strixx accounts can be created using this email address</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="dp my-4">
                <h2 className="text-lg font-semibold">Security</h2>
                <span className="text-sm text-gray-400">Keep your account safe and sound</span>
                <br />
                <div className="border border-gray-200 w-1/2 p-2 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-800 flex my-3">
                    <div className="">
                        <dl>
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b dark:border-gray-700">
                                <dt className="text-sm font-medium text-gray-500">Password</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    <span className="text-gray-500"><b className="text-black dark:text-white"><a>Change password.</a></b> Imporve your security with a strong password.</span>
                                </dd>
                            </div>
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Two-Factor <br/> Authentication</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    <button className={"mr-10 text-white dark:text-white font-medium text-sm rounded "+themeColor+" dark:bg-gray-800 py-1 px-3 text-center cursor-pointer dark:hover:bg-gray-700 mb-2"}>Set Up Two-Factor Authentication</button>
                                    <br />
                                    <span className="text-gray-500">Add an extra layer of security to your Strixx account by using your password and a code on your mobile phone to log in.</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Security_Login;