import React from 'react';

class SideContent extends React.Component {

    render () {
        return (
            <div className="bg-white_color rounded-xl shadow-xl">
                <div className="flex justify-between w-full px-6 pt-6">
                    <div className="w-1/2">
                        <div className="font-bold text-xl">
                            Lvl 0
                        </div>
                        <div className="flex cursor-pointer">
                            <div className="text-sm text-primary_color">
                                Create a Clan 
                            </div>
                            <div className="pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img alt="" src="/img/challenge_question.png" width="46"/>
                        </div>
                        <div className="text-xs text-primary_color">Challenge</div>
                    </div>
                </div>
                <div className="bg-primary_color w-full h-80 mt-3 p-3">
                    <div>
                        <button className="bg-btn_ltransparent p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white_color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center mt-6">
                        <img alt="" src="/img/avatarguest.png" width="180" />
                    </div>
                </div>
                <div className="p-6">
                    <div className="font-bold text-2xl">
                        Guest User
                    </div>
                    <div className="py-3 flex">
                        <img alt="" src="/img/medal.png" width="20" />
                        <div className="pl-3">0</div>
                        <div className="ml-6">
                            <button className="text-primary_color font-bold">Visit Store</button>
                        </div>
                    </div>
                    <div className="flex w-full mt-2">
                        <div className="w-1/2">
                            <div><span className="font-bold">0</span> Followers</div>
                            <div className="mt-2"><span className="font-bold">0</span> Friends</div>
                        </div>
                        <div className="w-1/2">
                            <div><span className="font-bold">0</span> Following</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideContent