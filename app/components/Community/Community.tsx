'use client';

import React, { useState, useRef } from 'react';
import HoverCard from '../About/HoverCard';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

type Props = {}

const Community = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [hovered1, setHovered1] = useState<boolean>(false);
    const [hovered2, setHovered2] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false); // State to track submission
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1y7bdrc', 'template_ebd9xp7', form.current!, 'uF-zXByFQ4Ej1Iqeb')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    setSubmitted(true); // Set submitted state to true
                    if (form.current) {
                        form.current.reset(); // Clear form fields
                    }
                },
                (error) => {
                    console.error('FAILED...', error);
                }
            );
    };

    return (
        <div className='max-w-[1280px] mx-auto'>
            <motion.div className='flex md:pl-7 space-x-3 md:space-x-10'>
                <div className='flex flex-col items-center'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className='relative'>
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-lock text-white">
                        </svg>
                        <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
                    </motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ delay: 0.8 }} className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#fffc60] via-[#dbd826] to-transparent"></motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: 'tween' }} className='md:w-10/12 mb-24'>
                    <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-[#d3d3d3] js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
                        <p className="text-[#fff45b]">Get in Touch</p>
                        Connect with like-minded individuals and build a network of fellow traders.
                    </h3>
                </motion.div>
            </motion.div>

            <div className='flex flex-col md:flex-row gap-10'>
                <HoverCard backgroundColor='#eff16f' direction='flex-col' left='-400px'>
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                        <p className="text-xl md:text-2xl mb-6 font-medium text-[#dadada]">success is not just about the strategies you follow but the community that supports you. Connect with us and become part of a network that empowers, educates, and elevates each other.</p>
                    </div>
                </HoverCard>
                <HoverCard backgroundColor='#ff6c6c' direction='flex-col' left='-400px'>
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                        <p className="text-xl md:text-2xl mb-6 font-medium text-[#dadada]">Every great trader knows the value of collaboration. Join our community, where knowledge meets support, and together we turn challenges into opportunities for growth.</p>
                    </div>
                </HoverCard>
            </div>

            <div className='relative z-[1]'>
                <HoverCard backgroundColor='#939aff' direction='' left='0'>
                    <div className='overflow-auto md:flex flex-col md:space-y-20 flex-1 py-20 md:p-10 p-5 my-6 justify-between md:min-w-[400px]'>
                        <p className="text-xl md:text-2xl mb-6 font-medium shiny-dark">We`d love to hear from you! Whether you have questions about forex trading, want to learn more about our community, or need assistance, We`re here to help.</p>
                    </div>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ type: 'tween' }} className='rounded-r-md overflow-hidden flex items-center'>
                    </motion.div>

                    {/* Contact Us Form */}
                    {!submitted ? (
                        <form ref={form} onSubmit={sendEmail} className='p-4 rounded-lg'>
                            <label className='block text-sm font-medium text-white'>Name</label>
                            <input type="text" name="user_name" className='w-full p-2 border rounded-md mb-4' required />
                            <label className='block text-sm font-medium text-white'>Email</label>
                            <input type="email" name="user_email" className='w-full p-2 border rounded-md mb-4' required />
                            <label className='block text-sm font-medium text-white'>Message</label>
                            <textarea name="message" className='w-full p-2 border rounded-md mb-4' required />
                            <input type="submit" value="Send" className='flex items-center max-lg:w-full text-white font-semibold justify-center space-x-2 text-base border-[1px] border-neutral-500 px-3 py-3 rounded-md' />
                        </form>
                    ) : (
                        <div className='text-xl md:text-2xl mb-6 font-medium text-green-500'>
                            Thank you for your message! We will get back to you soon.
                        </div>
                    )}
                </HoverCard>
            </div>
        </div>
    );
}

export default Community;
