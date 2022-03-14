import React from 'react';
import { useState, useEffect, useRef } from 'react';


function Waitlist () {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');

    function submitButton() {
        const data = {
            name,
            email,
        }
        window.getCustomerData(data)
        setName('')
        setEmail('')
        window.location="/optin-thanks"
    }

    return (
        <div className="mt-12 container mx-auto relative bg-vici-wailist bg-no-repeat bg-center">
           <div className="flex justify-center">
               <img src="/img/Vici Logo.png" width="90" />
           </div>
           <div className="text-center mt-6 text-3xl xl:text-40 font-bold text-vici_secondary_text">
                Engage with your audience on a new level with a 
           </div>
           <div className="flex justify-center">
               <img src="/img/new content type.png" width="650" />
           </div>
           <div className="w-8/12 mx-auto">
               <div className="font-bold md:text-28 text-xl text-center text-vici_secondary_text">
                that boosts your brand awareness, conversion, customer retention, referrals and ultimately revenue
                </div>
                <div className="mt-3 w-full xl:w-1/4 lg:w-1/2 mx-auto">
                    <input type="text" value={name} onChange={event => setName(name = event.target.value)} placeholder="Enter your name" className="w-full px-3 py-2 border text-center border-bottom_gray" />
                    <input type="email" value={email} onChange={event => setEmail(email = event.target.value)} placeholder="Enter your email" className="w-full px-3 mt-3 py-2 border text-center border-bottom_gray" />
                    <button onClick={submitButton}  className="w-full px-3 mt-3 py-2 bg-primary_color flex justify-center text-white_color rounded-sm">
                        <div className="flex">
                            <span>Get Your Invitation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>

                </div>
                <div className="mt-12 flex justify-center">
                    <img src="/img/waitlist-image.png" />
                </div>
           </div>
        </div>
    )
}

export default Waitlist