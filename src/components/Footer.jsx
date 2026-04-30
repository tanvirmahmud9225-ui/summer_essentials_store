import Image from 'next/image';
import React from 'react';
import PaymentImg from '../../public/paymentmethod.png'
import Logo from '../../public/logo.png'
import { ImLocation2 } from 'react-icons/im';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail, TfiFacebook } from 'react-icons/tfi';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-7xl mx-auto  rounded-lg'>
            <div className='py-20'>
                <div className='grid grid-cols-4 gap-10'>
                    <div className='space-y-4'>
                        <div>
                            <Image className='w-50' src={Logo} width={500} height={50} alt='' />
                        </div>
                        <p className='text-gray-500'>
                            SunCart – Your Ultimate Summer Essentials Marketplace. Shop Smart, Stay Cool.
                        </p>
                        <div className='flex flex-col gap-1 text-gray-500'>
                            <div className='flex items-center gap-4 text-gray-500'>
                                <ImLocation2 />
                                <span>Rampura, Dhaka, Bangladesh</span>
                            </div>
                            <div className='flex items-center gap-4 text-gray-500'>
                                <FiPhone />
                                <span>09642922922</span>
                            </div>
                            <div className='flex items-center gap-4 text-gray-500'>
                                <TfiEmail />
                                <span>contact@suncart.com</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center'>
                                <TfiFacebook className='size-6 opacity-80' />
                            </div>
                            <div className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaTwitter className='size-6 opacity-80' />
                            </div>
                            <div className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaInstagram className='size-6 opacity-80' />
                            </div>
                        </div>

                    </div>
                    <div >
                        <h1 className='font-bold text-2xl text-gray-800 mb-3'>Information</h1>
                        <ul className='text-gray-500 space-y-1'>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Company Information</li>
                            <li>Ghorer Bazar Stories</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl text-gray-800 mb-3'>Support</h1>
                        <ul className='text-gray-500 space-y-1'>
                            <li>Support Center</li>
                            <li>How to Order</li>
                            <li>Order Tracking</li>
                            <li>Payment</li>
                            <li>Shipping</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div >
                        <h1 className='font-bold text-2xl text-gray-800 mb-3'>Consumer Policy</h1>
                        <ul className='text-gray-500 space-y-1'>
                            <li>Support Center</li>
                            <li>How to Order</li>
                            <li>Order Tracking</li>
                            <li>Payment</li>
                            <li>Shipping</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center border-t py-2'>
                <h1 className='text-gray-500'>Copyright © 2026 SunCart</h1>
                <div>
                    <Image className='w-170' src={PaymentImg} width={900} height={300} alt='payment' />
                </div>
            </div>
        </div>
    );
};

export default Footer;