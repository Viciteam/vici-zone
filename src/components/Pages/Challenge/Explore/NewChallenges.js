import React from 'react';

class NewChallenges extends React.Component {
    render () {

        let newChallenges = [
            {   
                image: '/img/explore/newchallenge.png',
                date: 'daily',
                title: 'HEALTHY SPIRITS',
                desc: 'For me to discipline myself to drink water more often.',
                tags: ['Health'],
                tagcolor:'bg-tag_success',
                name: 'John S. White',
                joined: '20 Joined',
                avatar: '/img/explore/avatar.png'
            },
            {   
                image: '/img/explore/newchallenge2.png',
                date: '10/7/21-10/15/21',
                title: 'Chess Champion',
                desc: 'For me to discipline myself to drink water more often.',
                tags: ['Competition'],
                tagcolor:'bg-tag_competition',
                name: 'John S. White',
                joined: '20 Joined',
                avatar: '/img/explore/avatar.png'
            },
            {   
                image: '/img/explore/Rectangle.png',
                date: '10/7/21-10/15/21',
                title: 'Another Challenge',
                desc: 'For me to discipline myself to drink water more often.',
                tags: ['Competition', 'Progress'],
                tagcolor:'bg-tag_progress',
                name: 'John S. White',
                joined: '20 Joined',
                avatar: '/img/explore/avatar.png'
            },
            {   
                image: '/img/explore/Rectangle.png',
                date: '10/7/21-10/15/21',
                title: 'Another Challenge',
                desc: 'For me to discipline myself to drink water more often.',
                tags: ['Competition', 'Progress'],
                tagcolor:'bg-tag_maroon',
                name: 'John S. White',
                joined: '20 Joined',
                avatar: '/img/explore/avatar.png'
            }
        ]

        return (
            <div>
                <div className="flex justify-between">
                    <div>New Challenges</div>
                    <div className="flex">
                        <button className="px-3 py-2 bg-white_color mx-1 rounded-full text-sm shadow-xl flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            <span className="pl-2">Sort by Newest</span>
                        </button>
                        <button className="px-3 py-2 bg-white_color mx-1 rounded-full text-sm shadow-xl flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                <path d="M2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H6V2H20V16Z" fill="#333333"/>
                            </svg>
                            <span className="pl-2">Filter</span>
                        </button>
                        <button className="px-3 py-2 bg-white_color mx-1 rounded-full text-sm shadow-xl flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                            <span className="pl-2">List view</span>
                        </button>
                    </div>
                </div>
                <div className="my-12">
                    <div class="grid grid-rows-1 grid-flow-col gap-4 relative">
                        {
                          newChallenges.map((item, i) => (  
                            <div style={{width: '300px'}} className="bg-white_color shadow-xl rounded-b-xl relative">
                                <div>
                                    <img src={item.image} />
                                </div>
                                <div className="text-xs uppercase py-5 flex justify-center">
                                    { item.date }
                                </div>
                                <div className="text-xl flex justify-center">
                                    { item.title }
                                </div>
                                <div className="text-sm p-3 font-normal">
                                    { item.desc }
                                </div>
                                <div className="px-3">
                                    {
                                        item.tags.map((tag, i)=>(
                                            <span className={`mr-1 text-xs px-3 py-1 ${item.tagcolor} rounded-full text-white_color font-normal`}>{tag}</span>
                                        ))
                                    }
                                </div>
                                <div className="mt-6 px-3 flex justify-between">
                                    <div className="flex">
                                        <img src={item.avatar} />
                                        <div className="text-sm pl-3 pt-1"> {item.name} </div>
                                    </div>
                                    <div className="text-sm pt-1">{ item.joined }</div>
                                </div>
                                <div className="bg-bottom_gray p-6 text-sm font-normal absolute w-full bottom-10 h-40 opacity-0 hover:opacity-100 transition duration-500 ease-out">
                                    Do the completed set of actions daily
                                </div>
                                <div className="mt-6 text-xs uppercase flex justify-center bg-bottom_gray py-3 rounded-b-xl">
                                    Instructions
                                </div>
                            </div>
                          ))
                        }
                        <div className="absolute right-0 bottom-44">
                            <button className="p-3 rounded-full bg-white_color shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewChallenges