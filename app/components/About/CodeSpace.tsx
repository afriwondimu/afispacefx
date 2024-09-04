'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type Props = {};

const CodeSpace = (props: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null); // Create a ref to reference the video element

    const lineVariant = {
        hidden: { height: 0 },
        show: { height: '100%' }
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        // Intersection Observer callback function
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoElement.play(); // Play the video when it's visible
                } else {
                    videoElement.pause(); // Pause the video when it's not visible
                }
            });
        };

        // Set up the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // Use the viewport as the container
            threshold: 0.1 // Trigger callback when 10% of the video is visible
        });

        observer.observe(videoElement); // Start observing the video element

        // Cleanup function to disconnect the observer
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex relative md:pl-10">
            <div className="flex items-center flex-row relative"></div>
            <div className="lg:pl-24 md:pl-16 pl-6">
                <div className="flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row">
                    <div className="py-4 mb-2 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="md:pr-6"
                        >
                            <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 font-semibold lg:w-full w-full text-[#e4e4e4]">
                                <span className="font-semibold text-[#f87a7a]">
                                The community
                                </span>{' '}
                                 where  come together to share knowledge, strategies, and insights. We are dedicated to empowering individuals with the tools and confidence needed to navigate the complexities of forex trading.
                            </h2>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="py-4 px-6 w-full"
                    >
                        <div className="relative">
                            <div className="relative">
                                <div className="md:absolute z-[1] top-[-100px] lg:top-[-200px] right-0 shadow-2xl">
                                    {/* Video element with ref to control playback */}
                                    <video
                                        ref={videoRef} // Attach ref to the video element
                                        width="1190"
                                        height="1004"
                                        className="w-full h-auto d-block rounded-lg"
                                        src="https://raw.githubusercontent.com/afriwondimu/assets/main/assets/introv.mp4"
                                        autoPlay
                                        loop
                                        controls // Enable video controls for play/pause/volume
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CodeSpace;
