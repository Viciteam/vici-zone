import React from 'react';

class NewThankyouPage extends React.Component {
    render () {
        return (
            <div className="">
                <div className="container mx-auto mt-20">
                    <div className="text-center text-28 font-bold">Thanks a bunch for joining our waitlist.</div>
                    <div className="text-center font-bold text-primary_color text-64">Become VIP waitlist member for just $1</div>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="ml-6 md:ml-48">
                            <div>Join Vici’s VIP waitlist member to: </div>
                            <div className="flex mt-6">
                                <div className="w-4">
                                    <div className="h-3 w-3 bg-primary_color rounded-full mt-1"></div>
                                </div>
                                <div className="text-xs pl-3 tracking-widest">Receive VIP waitlist badge on your profile when we launch</div>
                            </div>
                            <div className="flex mt-6">
                                <div className="w-4">
                                    <div className="h-3 w-3 bg-primary_color rounded-full mt-1"></div>
                                </div>
                                <div className="text-xs pl-3 tracking-widest">Secure your place in line to receive our crowdfunding offer including special badges, premium business features, limited username selection and much more</div>
                            </div>
                            <div className="flex mt-6">
                                <div className="w-4">
                                    <div className="h-3 w-3 bg-primary_color rounded-full mt-1"></div>
                                </div>
                                <div className="text-xs pl-3 tracking-widest">Influence what we will build with your ideas</div>
                            </div>
                            <div className="mt-6">To take advantage of this offer, simply make a $1 deposit.</div>
                            <div className="mt-12">
                                <button className="bg-primary_color px-12 shadow-border_shadow_button rounded-3xl text-28 xl:text-60 font-bold text-vici_secondary_text">
                                    <a href="https://go.vici.zone/vici-reservation/?ref=prelaunch-waitlist-page">Reserve now for only $1</a>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center sm:justify-end mr-0 sm:mr-48">
                                <img src="/img/thankyou_image.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewThankyouPage