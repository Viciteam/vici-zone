import React from 'react';

class Presell extends React.Component {

    render () {
        return (
            <div className="bg-primary_background font-inter">
                <div className="bg-white_color h-20 flex justify-center p-3">
                    <img src="/img/Vici Logo.png" width="63" />
                </div>                
                <div className="container mx-auto z-10">
                    <div className="px-6 py-3 mt-12 rounded-3xl text-2xl text-center bg-vici_bg_opacity">
                        <div>Engage with your audience on a new level with a <span className="font-bold">new content type</span></div>
                        <div>that boosts your brand awareness, conversion, customer retention, word-of-mouth, and ultimately <span className="font-bold">revenue</span></div>
                    </div>
                </div>
                <div className="bg-no-repeat bg-left-bottom bg-none xl:bg-presell-circle">
                    <div className="container mx-auto">
                        <div className="mt-24 block xl:flex">
                            <div className="w-full xl:w-1/2">
                                <div className="text-60 whitespace-normal leading-tight text-center xl:text-left xl:whitespace-pre">
                                    Quickly create <br/>
                                    and run viral <span className="font-bold">Challenges</span>
                                </div>
                                <div className="text-4xl leading-tight mt-6 text-center xl:text-left">
                                    That your audiences will love to participate and invite their friends
                                </div>
                                <div className="text-xl font-bold mt-6 text-vici_secondary text-center xl:text-left">
                                    (without hiring an entire marketing department!)   
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <div className="flex justify-center xl:justify-end">
                                    <img src="/img/zone/presell/Group 1632.png" className="mt-6 xl:-mt-12" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center text-xl">
                            <div className="">
                                <button className="px-6 py-2 mr-2 rounded-lg bg-primary_color shadow-border_shadow_button hover:text-white_color">Get Early Access</button>
                                <button className="px-12 py-2 ml-2 rounded-lg border hover:text-primary_color">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>   
                {/* <img src="/img/zone/presell/Oval Copy 5.png" className="absolute top-9 z-0 mt-60" />     */}         
            </div>
        )
    }
}

export default Presell