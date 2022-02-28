import React from 'react';

class PopularChallenges extends React.Component {
    render () {
        return (
            <div className="flex justify-center mt-20">
                <div className="relative" style={{ backgroundImage: "url(/img/explore/Vector.png)", backgroundRepeat: 'no-repeat', width: 600, height: 550 }}>
                    <div className="w-full flex justify-center">
                        <div className="text-6xl font-bold">01</div>
                    </div>
                    <div className="w-full flex justify-center">
                        <img alt="" src="/img/explore/challenge1.png" width="300" className="transform -rotate-3" />
                    </div>
                    <div className="w-full flex justify-between pl-12 absolute bottom-20">
                        <button className="py-3 pl-2 pr-8 bg-white_color shadow-xl rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                        </button>
                        <button className="py-3 pr-2 mr-6 pl-8 bg-white_color shadow-xl rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex justify-center mt-12">
                        <button className="mx-1 text-xs bg-btn_dark text-white_color py-1 px-2 flex rounded-md">
                            <img alt="" src="/img/explore/goalicon.png" className="pr-1" />
                            Goal
                        </button>
                        <button className="mx-1 text-xs bg-btn_dark text-white_color py-1 px-2 rounded-md">
                            #Health
                        </button>
                        <button className="mx-1 text-xs bg-btn_dark text-white_color py-1 px-2 rounded-md">
                            10K+ Weekly Visits
                        </button>
                        <button className="mx-1 text-xs bg-btn_dark text-white_color py-1 px-2 rounded-md">
                            240 Achievers
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopularChallenges