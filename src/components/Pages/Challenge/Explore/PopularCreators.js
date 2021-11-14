import React from 'react';

class PopularCreators extends React.Component {
    render () {

        let creators = [
            {
                image: '/img/explore/Input fields.png',
                name: 'Alexa Cunningham',
                created: '3 challenges created',
                participants: '20k Accumulated Participants',
                followers: '20k followers'
            },
            {
                image: '/img/explore/Input fields1.png',
                name: 'Daniel Jackson',
                created: '1 challenge created',
                participants: '14k Accumulated Participants',
                followers: '21k followers'
            },
            {
                image: '/img/explore/Input fields2.png',
                name: 'Elizabeth Oropoea',
                created: '5 challenges created',
                participants: '14k Accumulated Participants',
                followers: '6k followers'
            },
            {
                image: '/img/explore/Input fields3.png',
                name: 'Tyson Chandler',
                created: '4 challenges created',
                participants: '4k Accumulated Participants',
                followers: '1k followers'
            }
        ]

        return (
            <div>
                <div>Popular Creators</div>
                <div className="my-12">
                    <div class="grid grid-rows-1 grid-flow-col gap-4 bg-white_color rounded-t-xl shadow-xl p-3">
                        {
                            creators.map((item, i) => (
                                <div className="p-6 shadow-xl">
                                    <div className="flex justify-center">
                                        <img src={item.image} />
                                    </div>
                                    <div className="text-sm py-2 flex justify-center">
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-dark_gray font-normal flex justify-center uppercase">
                                        {item.created}
                                    </div>
                                    <div className="text-xs font-normal py-2 flex justify-center">
                                        {item.participants}
                                    </div>
                                    <div className="text-xs font-normal flex justify-center">
                                        {item.followers}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default PopularCreators