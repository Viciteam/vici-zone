import React from 'react';

class Friends extends React.Component {
    render () {
        const friends = [
            {
                img: '/img/dummy/1.png',
                name: 'Jessica Alba',
            },
            {
                img: '/img/dummy/2.png',
                name: 'Lorem Zones',
            },
            {
                img: '/img/dummy/3.png',
                name: 'Arnold Zaragoza',
            },
            {
                img: '/img/dummy/4.png',
                name: 'Jackie Jeminiz',
            },
            {
                img: '/img/dummy/5.png',
                name: 'Jet Gautay',
            },
        ]
        return (
            <div className="px-6 py-3 rounded-xl mt-6">
                <div className="flex justify-between mb-5">
                    <div className="flex">
                        <div className="font-bold">Friends</div>
                        <div className="pl-1">(56 online)</div>
                    </div>  
                    <div>
                        <button className="text-sm text-vici_secondary_text">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button className="text-sm ml-3 text-vici_secondary_text">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {
                    friends.map((item, i) => (
                        <div className="flex my-3">
                            <div className="relative">
                                <img src={ item.img } className="rounded-full"></img>
                                <div className="h-3 w-3 bg-tag_success rounded-full absolute right-0 -mt-3 border border-white_color"></div>
                            </div>
                            <div className="pl-5 pt-3">
                                <div className="font-bold">{ item.name }</div>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}

export default Friends