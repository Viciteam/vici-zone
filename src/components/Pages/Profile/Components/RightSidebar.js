import React from 'react';

class RightSidebar extends React.Component {
    render () {
        const clans = [
            {
                img: '/img/dummy/clans/Group 7521.png',
                title: 'Running Club',
                subtitle: '200 MEMBERS',
            },
            {
                img: '/img/dummy/clans/Group 752.png',
                title: 'Fitness Guru',
                subtitle: '250k MEMBERS',
            },
        ]
        return (
            <div className="bg-vici_light_gray rounded-2xl p-2">
                <div className="py-3 px-6 font-bold">Clans Joined (2)</div>
                <div className="bg-white_color p-3 rounded-lg">
                    {
                        clans.map((item, i) => (
                            <div className="flex my-2">
                                <div>
                                    <img src={ item.img } />
                                </div>
                                <div className="pl-3 pt-3">
                                    <div className="text-xl">{ item.title }</div>
                                    <div className="text-10 uppercase tracking-widest text-vici_secondary_text">{ item.subtitle }</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="pt-6 pb-3 px-6 font-bold">Integrated Apps</div>
                <div className="bg-white_color p-3 rounded-lg h-60">
                    <div className="flex shadow-border_shadow py-3">
                        <div className="pl-3">
                            <img src="/img/dummy/clans/Rectangle 17.png" />
                        </div>
                        <div className="pl-6">
                            <div className="font-bold">Google Fit</div>
                            <div className="text-sm">Last updated: 09/07/21</div>
                        </div>
                    </div>
                    <div className="flex justify-center py-3">
                        <button className="flex text-vici_secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add Device
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightSidebar