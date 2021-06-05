import {useState} from 'react'
import { PaperClipIcon } from '@heroicons/react/outline'
function Profile(){
    const [themeColor, setTheme] = useState(window.localStorage.getItem("theme_color"))
    return(
        <div className="mx-auto p-4" style={{height:"100%"}}>
            <div className="dp my-4">
                <h2 className="text-lg font-semibold">Profile Picture</h2>
                <br />
                <div className="border border-gray-200 w-1/2 p-2 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-800 flex">
                    <img className={"h-20 w-20 "+themeColor+" rounded-full"} />
                    <div className="mx-3">
                        <button className="bg-gray-200 dark:bg-gray-700 rounded px-3 py-1 text-md my-4 hover:bg-gray-300 dark:hover:bg-gray-600">Add Profile Picture</button>
                    </div>
                </div>
            </div>
            <div className="pb my-4">
                <h2 className="text-lg font-semibold">Profile Banner</h2>
                <br />
                <div className="border border-gray-200 w-1/2 p-2 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-800 flex">
                    <img className={"h-28 w-1/3 "+themeColor+" rounded"} />
                    <div className="mx-3">
                        <button className="bg-gray-200 dark:bg-gray-700 rounded px-3 py-1 text-md my-4 hover:bg-gray-300 dark:hover:bg-gray-600">Update</button>
                    </div>
                </div>
            </div>
            <br/>
            <div className="ps mb-3">
                <h2 className="text-lg font-semibold">Profile Settings</h2>
                <span className="text-sm text-gray-400">Change identifying details for your account</span>
                <br />
                <div className="border border-gray-200 w-1/2 p-2 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-800 flex my-3">
                    <div className="">
                        <dl>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Username</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                <input className="dark:bg-gray-800 p-2 w-full rounded bg-gray-200 focus:outline-none" value="divyanshg21"/>
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Display Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                <input className="dark:bg-gray-800 p-2 w-full rounded bg-gray-200 focus:outline-none" value="TbOne"/>
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Bio</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                            </dd>
                        </div>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex">
                            <div className="w-full"></div>
                            <div className="w-full"></div>
                            <button className="mr-10 text-black dark:text-white font-medium rounded-lg bg-gray-200 dark:bg-gray-800 py-3 text-center cursor-pointer dark:hover:bg-gray-700">Save changes</button>
                        </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;