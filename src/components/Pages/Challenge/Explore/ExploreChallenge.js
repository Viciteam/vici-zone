import React from 'react';
import PopularChallenges from './PopularChallenges';
import NewChallenges from './NewChallenges';
import JoinedByFriends from './JoinedByFriends';
import PopularCreators from './PopularCreators';

class ExploreChallenge extends React.Component {
    render () {
        let active = 'challenges'
        return (
            <div className="container mx-auto mt-12">
                <div className="flex">
                    <div className="flex w-1/8">
                        <button className="p-3 bg-white_color rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </button>
                        <div className="pl-3 pt-3 cursor-pointer">Go back Home</div>
                    </div>
                    <div className="flex w-3/4 justify-center">
                        <ul className="flex uppercase">
                            <li className={active == 'all' ? 'bg-primary_color px-4 pt-3 cursor-pointer rounded-full shadow-xl' : 'px-4 pt-3 cursor-pointer hover:bg-primary_color rounded-full hover:shadow-xl'}>All</li>
                            <li className={active == 'challenges' ? 'bg-primary_color px-4 pt-3 cursor-pointer rounded-full shadow-xl ' : 'px-4 pt-3 cursor-pointer hover:bg-primary_color rounded-full hover:shadow-xl'} >Challenges</li>
                            <li className={active == 'people' ? 'bg-primary_color px-4 pt-3 cursor-pointer rounded-full shadow-xl' : 'px-4 pt-3 cursor-pointer hover:bg-primary_color rounded-full hover:shadow-xl'}>People</li>
                            <li className={active == 'surprise' ? 'bg-primary_color px-4 pt-3 cursor-pointer rounded-full shadow-xl' : 'px-4 pt-3 cursor-pointer hover:bg-primary_color rounded-full hover:shadow-xl'}>Surprise Me!</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 text-2xl font-bold">
                    <div>Popular Challenges</div>
                    <PopularChallenges />
                </div>
                <div className="mt-20 text-2xl font-bold">
                    <NewChallenges />
                </div>
                <div className="mt-20 text-2xl font-bold">
                    <JoinedByFriends />
                </div>
                <div className="mt-20 text-2xl font-bold">
                    <PopularCreators />
                </div>
            </div>
        )
    }
}

export default ExploreChallenge