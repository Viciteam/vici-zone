import React from 'react';
import CalculatingModal from './CalculatingModal';
import { useState } from 'react';


function JoinClanModal ({ closeModal }) {

    const [openCalculating, setCalculating] = useState(false)
    const [passRequirement, setPassRequirement] = useState(null)

    return (
        <div className="bg-vici_black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-white_color w-1/4 rounded-xl p-6">
                <div className="flex justify-between pb-3 border-b border-medium_gray">
                    <div className="font-bold text-xl">Join Clan</div>
                    <div>
                        <button onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7266 16.5L16.7266 20.5L10.7266 14.4983L4.72656 20.5L0.726562 16.5L6.72656 10.5L0.726562 4.5L4.72656 0.5L10.7266 6.5L16.7266 0.5L20.7266 4.5L14.7249 10.5L20.7266 16.5Z" fill="#EB5757"/>
                            </svg>
                        </button>
                    </div>
                </div>      
                <div className="mt-6 pb-8 border-b border-medium_gray">
                    {
                        passRequirement ?
                        <div className="px-10">
                            <div className="font-bold text-xl text-center">Congratulations!</div>
                            <div className="font-bold mt-3 text-center">2000/2000 Steps Achieved.</div>
                            <div className="font-bold mt-4 text-sm text-center">You have joined the <span className="text-vici_button_txt">Running Club</span> clan! Check out their challenges to get started.</div>
                        </div>
                        : 
                        <div className="px-10">
                            <div className="font-bold text-xl text-center">Clan Requirements</div>
                            <div className="pt-4 text-sm">The clan leader has set some requirements in order for new members to join.</div>
                            <div className="pt-4 text-sm font-bold">New members must achieve 2000 Steps before joining. App integration: Google Health (required)</div>
                            <div className="pt-5 font-bold">Integrate App</div>
                            <select className="w-full px-3 py-3 border border-medium_gray rounded-md mt-3 form-select">
                                <option className="py-2">Google Health</option>
                            </select>
                        </div>
                    }
                </div> 
                {
                    passRequirement ?
                    <div className="flex justify-end mt-3">
                        <button onClick={closeModal} className="px-6 py-2 text-medium_gray bg-white_color border rounded-md uppercase text-sm mr-3">Close</button>
                    </div>
                    :
                    <div className="flex justify-end mt-3">
                        <button onClick={closeModal} className="px-6 py-2 text-medium_gray bg-white_color border rounded-md uppercase text-sm mr-3">Cancel</button>
                        <button onClick={() => { setCalculating(true)}} className="px-6 py-2 text-white_color bg-primary_color rounded-md uppercase text-sm">SUBMIT REQUIREMENTS</button>
                    </div>
                }
                {openCalculating && <CalculatingModal closeCalculating={setCalculating} isPassRequirement={setPassRequirement} />}
            </div>
        </div>
    )
}
export default JoinClanModal