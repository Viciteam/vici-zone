import React from 'react';

class PopularClans extends React.Component {
    render () {
        const popularClans = [
            {
                img: '/img/dummy/clans/Group 7521.png',
                title: 'Running Club',
                subtitle: '200 Members'
            },
            {
                img: '/img/dummy/clans/Group 7521.png',
                title: 'Running Club',
                subtitle: '200 Members'
            },
            {
                img: '/img/dummy/clans/Group 7521.png',
                title: 'Running Club',
                subtitle: '200 Members'
            },
        ]
        return (
            <div className="bg-white_color px-6 py-3 rounded-xl shadow-vici">
                <div className="flex justify-between">
                    <div className="font-bold">Popular Clans</div>
                    <div><button className="text-sm">View all</button></div>
                </div>
                {
                    popularClans.map((item, i) => (
                        <div className="flex my-2">
                            <div>
                                <img src={item.img}></img>
                            </div>
                            <div className="pt-3">
                                <div>{ item.title }</div>
                                <div className="text-10 uppercase tracking-widest">{item.subtitle}</div>
                            </div>
                        </div>
                    ))
                }           
            </div>
        )
    }
}

export default PopularClans