import './App.css';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon,GlobeAltIcon } from '@heroicons/react/outline'
import {updateSelectedPlan } from './storeSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const navigation = [
  { name: 'The Game', href: '#', current: false, link: "/", function: updateSelectedPlan("Page2")},
  { name: 'How to Play', href: '#', current: false, link: "/instructions", function: updateSelectedPlan("Page1")},
  
  
]

function classNames(...classes) {
    
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const dispatch = useDispatch()

  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <GlobeAltIcon className="inline-block -ml-1 mr-2 h-8 w-8 text-green-500" aria-hidden="true" />,
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4" >
                    {navigation.map((item) => (
                      <Link
                        to={item.link}
                        key={item.name}
                        href={item.href}
                        onClick={()=>dispatch(item.function)}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              
              </div>
         
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Navbar;