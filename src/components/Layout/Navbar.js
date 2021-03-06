import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link className="text-2xl" to="/">
                    ERIDIUM
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    
                          <Fragment>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            
                             <Link to="/findjobs" className="text-blue-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">
                             Find Jobs
                             </Link>
                            
                            <Link to="" className="text-blue-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">
                              Find Projects
                            </Link>
                          </Fragment>
                      
                          <Link
                            
                            to=""
                            className="text-blue-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                          >
                            Post A Job
                          </Link>
                          <Link
                            
                            to="#"
                            className="text-blue-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                          >
                            Training
                          </Link>
                          <Link
                            
                            to="#"
                            className="text-blue-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                          >
                            Build Resume
                          </Link>
                          <Link
                            
                            to="/connectus"
                            className="text-blue-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                          >
                            Connect Us
                          </Link>
                        
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="max-w-xs rounded-full flex items-center text-sm ">
                              <span className="sr-only">Open user menu</span>
                             <p>Safayet Jamil</p>
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                            >
                              
                                <Menu.Item >
                                  {({ active }) => (
                                    <Link
                                      to="/user-dashboard"
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                     Dashboard
                                    </Link>
                                    
                                  )}
                                </Menu.Item>
                                <Menu.Item >
                                  {({ active }) => (
                                    <Link
                                      to=""
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                     Sign Out
                                    </Link>
                                    
                                  )}
                                </Menu.Item>
                              
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Fragment >
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <Link to="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        View
                      </Link>
                    </Fragment>
                  
                    <Link
                      
                      to="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Jobs
                      
                    </Link>
                  
                
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                    <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                  </div>
                  <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  
                    <Link
                      
                      to="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      All
                    </Link>
                  
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        {/* <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div> */}
      </header>
      <main>
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          {/* Replace with your content */}
          
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}