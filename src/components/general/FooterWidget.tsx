import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { PillsLogo } from '../icons';

export const FooterWidget = () => {
  return (
    <footer className="py-20 mt-20 lg:mt-40">
      <div className="container mx-auto px-4">
        <div className="-mx-4 mb-8 flex flex-wrap lg:mb-16">
          <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/3">
            {/* <a className="text-2xl leading-none text-gray-600" href="#">
              <PillsLogo className='size-6 fill-charistan' />

            </a> */}

            <Link href="/" className='flex items-center gap-x-0.5 lg:pr-10'>

              <PillsLogo className='size-6 fill-charistan' />
              <h2 className='lg:text-xl'>
                <span className='font-semibold'>
                  Pharmacy
                </span>
                <span className='text-charistan'>Paddi</span>

              </h2>
            </Link>
            <p className="mb-6 mt-5 max-w-xs text-sm leading-loose text-gray-500">
              Your smart pharmacy paddi...
            </p>
            <div>
              <a className="mr-8 inline-block h-6" href="#">
                <svg className='size-10 fill-charistan' viewBox="0 0 48 48">
                  <path d="M24,4C12.972,4,4,12.972,4,24c0,10.006,7.394,18.295,17,19.75V29h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4v-3.632C21,15.617,23.427,13,27.834,13c1.786,0,3.195,0.124,3.254,0.129C31.604,13.175,32,13.607,32,14.125V17.5c0,0.553-0.448,1-1,1h-2c-1.103,0-2,0.897-2,2V24h4c0.287,0,0.56,0.123,0.75,0.338c0.19,0.216,0.278,0.502,0.243,0.786l-0.375,3C31.555,28.624,31.129,29,30.625,29H27v14.75c9.606-1.455,17-9.744,17-19.75C44,12.972,35.028,4,24,4z" fill="#FFFFF5" />
                </svg>
              </a>

              <a className="mr-8 inline-block h-6" href="#">
                <svg className='size-10 fill-charistan' viewBox="0 0 48 48">
                  <path d="M16.5 5C10.159 5 5 10.159 5 16.5L5 31.5C5 37.841 10.159 43 16.5 43L31.5 43C37.841 43 43 37.841 43 31.5L43 16.5C43 10.159 37.841 5 31.5 5L16.5 5 z M 34 12C35.105 12 36 12.895 36 14C36 15.104 35.105 16 34 16C32.895 16 32 15.104 32 14C32 12.895 32.895 12 34 12 z M 24 14C29.514 14 34 18.486 34 24C34 29.514 29.514 34 24 34C18.486 34 14 29.514 14 24C14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z" fill="#FFFFF5" />
                </svg>
              </a>
              <a className="mr-8 inline-block h-6" href="#">
                <svg className='size-10 fill-charistan' viewBox="0 0 48 48">
                  <path d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z" fill="#FFFFF5" />
                </svg>
              </a>
              <a className="inline-block h-6" href="#">
                {/* <Image
                  className="mx-auto"
                  alt="Twitter Icon"
                  src="https://shuffle.dev/plain-assets/socials/twitter.svg"
                /> */}
              </a>
            </div>
          </div>
          <div className="w-full px-4 lg:w-2/3">
            <div className="flex flex-wrap justify-between">
              <div className="mb-8 w-1/2 lg:mb-0 lg:w-1/4">
                <h3 className="font-heading mb-6 text-lg font-bold">Company</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 w-1/2 lg:mb-0 lg:w-1/4">
                <h3 className="font-heading mb-6 text-lg font-bold">Pages</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Login
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Register
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Add list
                    </a>
                  </li>
                  <li>
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 w-1/2 lg:mb-0 lg:w-1/4">
                <h3 className="font-heading mb-6 text-lg font-bold">Legal</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Terms
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4">
                <h3 className="font-heading mb-6 text-lg font-bold">Resources</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Service
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Product
                    </a>
                  </li>
                  <li>
                    <a className="text-charistan hover:text-charistan-light" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <p className="text-sm text-gray-500 lg:text-center">
            All rights reserved. © Charistan Inc.
          </p>
        </div>
      </div>
    </footer>

  )

}


export default FooterWidget;