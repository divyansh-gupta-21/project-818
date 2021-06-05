import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, CubeTransparentIcon } from '@heroicons/react/outline'
import ProfileMenu from './profileMenu';

function Navbar(props){
    const [theme_color, set_theme_color] = useState(localStorage.getItem("theme_color"))
    const [openMenu, setOpenMenu] = useState("none");
    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function handleOpen(e) {
        if(openMenu == "none"){
            setOpenMenu("block");
        }else{
            setOpenMenu("none");
        }
    }

    return(
        <Disclosure as="nav" className="bg-white dark:bg-black fixed w-full z-10 shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  />
                </div>
                <div className="hidden sm:block sm:ml-2">
                  <div className="flex space-x-4">
                    <input placeholder={"Search Lives"} style={{"display": props.search}} type="text" className={"appearance-none py-2 px-3 bg-gray-100 border-gray-100 dark:bg-gray-900 rounded-full focus:outline-none focus:ring-"+theme_color+"-500 focus:border-"+theme_color+"-500 dark:focus:ring-"+theme_color+"-500 dark:focus:border-"+theme_color+"-500"} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="p-1 rounded-full dark:text-gray-400 text-black dark:hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 dark:focus:ring-white focus:ring-gray-900">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <button className={"mx-2 rounded-md py-1 px-3 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-200 flex focus:outline-none focus:bg-gray-300"}><CubeTransparentIcon className="h-6 w-6 mr-2"/>Get Drops</button>

                {/* Profile dropdown */}
                <button className="h-10 w-10 rounded-full focus:outline-none mr-6" onClick={handleOpen}>
                    <img className="rounded-full" src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}/>
                </button>
                <ProfileMenu show={openMenu}/>

              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
    )
}

export default Navbar;