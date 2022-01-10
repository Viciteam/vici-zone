import React from 'react';

class WhoToFollow extends React.Component {
    render () {
        const whoToFollow = [
            {
                img: '/img/dummy/1.png',
                name: 'Jessica Alba',
                follower: '2K followers',
            },
            {
                img: '/img/dummy/2.png',
                name: 'Roberto Dolores',
                follower: '4K followers',
            },
            {
                img: '/img/dummy/3.png',
                name: 'Marciano Gomez',
                follower: '2.4K followers',
            },
            {
                img: '/img/dummy/4.png',
                name: 'Patrick Myer',
                follower: '24K followers',
            },
        ]
        return (
            <div className="bg-white_color px-6 py-3 rounded-xl shadow-vici mt-6">
                <div className="flex justify-between mb-5">
                    <div className="font-bold">Who to follow</div>
                    <div><button className="text-sm">View all</button></div>
                </div>
                {
                    whoToFollow.map((item, i) => (
                        <div className="flex justify-between my-3" key={i}>
                            <div className="flex">
                                <div>
                                    <img src={item.img} className="rounded-full"></img>
                                </div>
                                <div className="pt-1 pl-3">
                                    <div className="font-bold">{ item.name }</div>
                                    <div className="text-10 uppercase tracking-widest">{item.follower}</div>
                                </div>
                            </div>
                            <div>
                                <button className="px-5 py-2 text-sm bg-primary_color rounded-full text-white_color">Follow</button>
                            </div>
                        </div>
                    ))
                }           
            </div>
        )
    }
}

export default WhoToFollow