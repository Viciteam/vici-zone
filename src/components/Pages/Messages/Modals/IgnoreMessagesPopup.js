import React from 'react';

function IgnoreMessagesPopup ({ closeModal }) {
    return (
        <div className="bg-vici_black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-white_color w-1/4 rounded-lg">
                <div className="flex justify-between p-6 bg-primary_background rounded-lg">
                    <div className="text-lg font-bold">
                        Ignore messages
                    </div>
                    <div>
                        <div onClick={() => {closeModal()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7266 16.5L16.7266 20.5L10.7266 14.4983L4.72656 20.5L0.726562 16.5L6.72656 10.5L0.726562 4.5L4.72656 0.5L10.7266 6.5L16.7266 0.5L20.7266 4.5L14.7249 10.5L20.7266 16.5Z" fill="#EB5757"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <p>
                        You won’t be able to receive any notifications/messages from this user, Philippe won’t be notified if you ignore his messages.
                    </p>
                </div>
                <div className="p-5 flex justify-end bg-primary_background rounded-lg">
                    <button onClick={() => {closeModal()}} className="py-2 px-3 text-sm rounded-lg border border-medium_gray uppercase text-medium_gray">
                        Cancel
                    </button>
                    <button className="py-2 px-3 ml-3 bg-primary_color text-white_color rounded-lg">
                        Ignore Messages
                    </button>
                </div>
            </div>
        </div>
    ) 
}

export default IgnoreMessagesPopup