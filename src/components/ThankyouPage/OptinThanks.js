import React from 'react';

function OptinThanks () {

    function shareButton () {
        window.share_window(1288)
    }

    return (
        <div className="mt-12 container mx-auto relative bg-vici-wailist bg-no-repeat bg-contain bg-center">
            <div className="flex justify-center">
               <img src="/img/Vici Logo.png" width="90" />
            </div>
            <div className="text-center mt-6 text-28 sm:text-5xl font-bold text-primary_color">
              Thanks a bunch for joining our waitlist.
            </div>
            <div className="font-bold text-16 sm:text-2xl mt-6 text-center w-full sm:w-1/2 mx-auto text-vici_secondary_text">
                We can't wait to share with you our next milestone. Hang on tight, we'll let you know when to get started -- soon!
            </div>
            <div className="text-center mt-12 sm:mt-24 text-28 sm:text-3xl font-bold text-primary_color">
                Invite your friends, followers and be surprised by the reward that awaits you.
            </div>
            <div className="flex justify-center mt-12 pb-24">
                <div id="sm-social" style={{width: "146px"}}>
                    <img src="http://vici.sociamonials.com/images/share_button5.png" alt="Share" style={{cursor: "pointer"}} onClick={shareButton} className="sm-share-button-image" id="sm-share" data-counter="none" data-id="1288" />
                </div>
            </div>

        </div>
    )
}

export default OptinThanks