import React from 'react';

class ProfileContent extends React.Component {
    render () {
        const badges = [
            {
                img: '/img/dummy/achievement/Group 842.png'
            },
            {
                img: '/img/dummy/achievement/Group 841.png'
            },
            {
                img: '/img/dummy/achievement/Group 799.png'
            },
        ]

        const progress = [
            {
                progress: '4',
                progress_desc: 'Glasses',
                day: '20',
                title: 'Healthy Spirits!',
                desc: 'For me to discipline myself to drink water more often.',
                action: '2 Actions remaining',
                btn_text: 'Submit Action',
                progress_color: 'text-primary_color',
            },
            {
                progress: '30',
                progress_desc: 'KM',
                day: '1 of 30',
                title: 'Challenge Name',
                desc: 'The instruction of the challenge here something like this.',
                action: '50 KM remaining',
                btn_text: 'View Details',
                progress_color: 'text-purple',
            },
            {
                progress: '4',
                progress_desc: 'Glasses',
                day: '3',
                title: 'Challenge Name',
                desc: 'For me to discipline myself to drink water more often.',
                action: '3 Actions remaining',
                btn_text: 'Submit Action',
                progress_color: 'text-primary_color',
            },
            {
                progress: '4',
                progress_desc: 'Glasses',
                day: '20',
                title: 'Healthy Spirits!',
                desc: 'For me to discipline myself to drink water more often.',
                action: '2 Actions remaining',
                btn_text: 'Submit Action',
                progress_color: 'text-primary_color',
            },
            {
                progress: '30',
                progress_desc: 'KM',
                day: '1 of 30',
                title: 'Challenge Name',
                desc: 'The instruction of the challenge here something like this.',
                action: '50 KM remaining',
                btn_text: 'View Details',
                progress_color: 'text-purple',
            },
            {
                progress: '4',
                progress_desc: 'Glasses',
                day: '3',
                title: 'Challenge Name',
                desc: 'For me to discipline myself to drink water more often.',
                action: '3 Actions remaining',
                btn_text: 'Submit Action',
                progress_color: 'text-primary_color',
            },
        ]

        return (
            <div className="bg-vici_light_gray rounded-2xl p-2 mb-12 mx-3">
                <div className="flex justify-between">
                    <div className="py-3 px-6 font-bold">Highlighted Achievements</div>
                    <div className="py-3 px-6">
                        <button className="flex">
                            See all
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bg-white_color rounded">
                    <div className="flex p-6">
                        {
                            badges.map((badge, i) => (
                                <img src={ badge.img } className="mx-2" />
                            ))
                        }
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <div className="py-3 px-6">
                        <div className="font-bold">Today’s Progress</div>
                        <div className="text-xs">Tue, 7 Sept 2021</div>
                    </div>
                    <div className="py-3 px-6">
                        <button className="flex">
                            See all
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                   
                </div>
                <div className="bg-white_color rounded p-3 h-96 overflow-auto">
                    {
                        progress.map((item, i) => (
                            <div className="flex justify-between shadow-border_shadow py-5">
                                <div className="flex">
                                    <div className="relative">
                                        <div
                                            x-data="scrollProgress"
                                            class="items-center justify-center overflow-hidden rounded-full"
                                        >
                                            <svg width="100" height="100" viewBox="0 0 100 100">
                                                <circle
                                                    class="text-medium_gray"
                                                    stroke-width="10"
                                                    stroke="currentColor"
                                                    fill="transparent"
                                                    r="40"
                                                    cx="50"
                                                    cy="50"
                                                />
                                                <circle class={ item.progress_color } 
                                                    stroke-linecap=""  
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    stroke="currentColor"
                                                    stroke-width="10"
                                                    fill="none"
                                                    stroke-dasharray="315" 
                                                    stroke-dashoffset="125" 
                                                    stroke-mitterlimit="0"
                                                    transform="rotate(-90 ) translate(-100 0)"
                                                />
                                            </svg>
                                            <div class="absolute top-6 w-full">
                                                <div className="font-bold text-center">{ item.progress }</div>
                                                <div className="text-center text-xs">{ item.progress_desc }</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-3 w-3/4">
                                        <div className="text-sm font-bold text-vici_secondary_text">
                                            Day { item.day }
                                        </div>
                                        <div className="font-bold pt-2">
                                            { item.title }
                                        </div>
                                        <div className="text-sm text-vici_secondary_text pt-2">
                                            { item.desc }
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 w-1/4">
                                    <div className="text-sm text-vici_secondary_text pt-2 font-bold">
                                        { item.action }
                                    </div>
                                    <div className="pt-6">
                                        <button className="p-2 w-full bg-primary_color text-white_color rounded-lg">
                                            { item.btn_text }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-between mt-6">
                    <div className="py-3 px-6">
                        <div className="font-bold">Recent Rewards</div>
                    </div>
                    <div className="py-3 px-6">
                        <button className="flex">
                            See all
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bg-white_color rounded">
                    <div className="flex p-6">
                        <div className="flex p-5 shadow-card_border rounded-lg border border-bottom_gray">
                            <div>
                                <img src="/img/Vici Token.png" />
                            </div>
                            <div className="pl-3 pr-6">
                                <div className="text-sm">Clan Reward</div>
                                <div className="text-10 uppercase tracking-widest pt-2">10 Vici Tokens</div>
                            </div>
                        </div>
                        <div className="flex p-5 shadow-card_border rounded-lg ml-3 border border-bottom_gray">
                            <div>
                                <img src="/img/Vector (1).png" />
                            </div>
                            <div className="pl-3 pr-6">
                                <div className="text-sm">Challenge Reward</div>
                                <div className="text-10 uppercase tracking-widest pt-2">received manually</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileContent