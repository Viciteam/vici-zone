import JoinWaitlist from './modals/JoinWaitlist'

const Content = () => {
    return (
        <div className="pt-24">
            <div className="grid grid-rows-1 grid-cols-1 xl:grid-cols-2 gap-4 container mx-auto">
                <div className="text-center xl:text-left above-fold-info">
                    <div className="sm:text-5xl text-2xl black-header-title">Challenge Accepted!</div>
                    <div className="font-bold sm:text-7xl text-4xl pt-12 text-primary_color yellow-header-title">Achieve Goals</div>
                    <div className="font-bold sm:text-7xl text-4xl pt-8 text-primary_color yellow-header-title">Motivate Others</div>
                    <div className="font-bold sm:text-7xl text-4xl pt-8 text-primary_color yellow-header-title">Win through Life!</div>
                    <div className="sm:text-3xl text-xl pt-12 xl:w-2/3 w-full black-sub-header-title">A social network focused on making people's life better.</div>
                    <div className="pt-16 flex justify-center xl:justify-start header-button-base">
                        <JoinWaitlist btnName="Uncover Vici"/>
                    </div>
                </div>
                <div className="hidden xl:block">
                    <img src="/img/vici-com.png" className="-mt-24 absolute right-0 xl:w-2/5 w-1/4" />
                </div>
            </div>
            <div className="bg-primary_color mt-52">
                <div className="container mx-auto grid grid-rows-1 sm:grid-cols-2 grid-cols-1 gap-4 p-20">
                    <div className="text-3xl font-bold xl:w-4/5 pt-28">
                        Achieving goals and motivating others don't need to be hard.
                    </div>
                    <div className="flex justify-end">
                        <img src="/img/Vici Logo.png" className="" width="300"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto grid grid-rows-1 sm:grid-cols-7 grid-cols-1 gap-4 p-20">
                    <div className="col-span-3">
                        <img src="/img/frame.png" className="" width="600"/>
                    </div>
                    <div className="col-span-4 pt-12">
                        <div className="text-3xl font-bold text-right">
                            Make it fun and entertaining enough through gamified <span className="text-primary_color">tasks, trials</span> or <span className="text-primary_color">contests</span> to keep you and your friends engaged, driven to accomplish a goal!
                        </div>
                        <div className="flex justify-end pt-12">
                            <JoinWaitlist btnName="Discover Vici"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-vici_bgcolor">
                <div className="text-center text-5xl font-bold pt-20">
                    We Promote
                </div>
                <div className="container mx-auto grid grid-rows-2 sm:grid-cols-2 grid-cols-1 gap-4 p-20">
                    <div>
                        <div className="flex justify-center">
                            <img src="/img/vector1.png" className="bg-white_color p-3 rounded-full shadow-lg" width="150"/>
                        </div>
                        <div className="text-center text-3xl pt-6 w-3/4 mx-auto">
                            Collective unity amongst individuals and the community
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src="/img/vector2.png" className="bg-white_color p-3 rounded-full shadow-lg" width="150"/>
                        </div>
                        <div className="text-center text-3xl pt-6 w-3/4 mx-auto">
                            Inspiring and encouraging others to triumph in life
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex justify-center">
                            <img src="/img/vector3.png" className="bg-white_color p-3 rounded-full shadow-lg" width="150"/>
                        </div>
                        <div className="text-center text-3xl pt-6 w-3/4 mx-auto">
                            Inserting the fun in the usual unexciting journey to achieving goals
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex justify-center">
                            <img src="/img/vector4.png" className="bg-white_color p-3 rounded-full shadow-lg" width="150"/>
                        </div>
                        <div className="text-center text-3xl pt-6 mx-auto">
                            Extending support to others by sharing or promoting your knowledge & expertise
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="text-5xl font-bold pt-20 text-center sm:text-left">
                   Benefits of joining Vici
                </div>
                <div className="grid grid-rows-5 grid-cols-1 lg:grid-cols-2 gap-8 py-20">
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center sm:py-5 py-2 font-bold">1</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Be part of a community who motivates and inspires you to reach your goals</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">2</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Create, discover & join new adventures and causes to participate in</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">3</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Easy-to-use tools to allow challenge creators to craft varieties of challenges, games, or contests.</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">4</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Easily join and discover games, challenges, contests that aim to uplift people’s lives.</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">5</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Conveniently reward participants of your contest</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">6</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Track and manage peresonal progress towards your goals</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">7</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Build and govern your community</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">8</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Gain knowledge from instructors to overcome challenges</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">9</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Promote your knowledge to your followers</div>
                    </div>
                    <div className="flex">
                        <div className="bg-vici_bgcolor flex items-center justify-center rounded-full">
                            <div className="w-20 h-20 rounded-full text-3xl text-center py-5 font-bold">10</div>
                        </div>
                        <div className="text-xl pl-6 pt-3">Earn tokens from rewards and contributing to the community. Learn more</div>
                    </div>
                </div>
                <div className="mt-16 flex justify-center">
                    <div className="text-6xl font-extrabold" style={{ textShadow: '0px 4px 3px #00000040' }}>Join Vici today!</div>
                </div>
                <div className="mt-16 flex justify-center">
                    <JoinWaitlist btnName="Join Vici"/>
                </div>
            </div>
        </div>
    )
}

export default Content