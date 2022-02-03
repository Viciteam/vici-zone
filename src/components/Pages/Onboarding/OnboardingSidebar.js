import React from 'react';

class OnboardingSidebar extends React.Component {
    render () {
        return (
            <div>
                <div className="bg-white_color p-6 rounded-xl shadow-vici">
                    <div className="flex justify-center font-bold text-28 text-primary_color relative">
                        Onboarding
                        <div className="absolute text-vici_secondary right-0">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center my-3">
                        <div className="uppercase text-10">Vici Action</div>
                    </div>
                    <div>
                        <img alt="" className="rounded-xl w-full" src="/img/dummy/Rectangle182.png" />
                    </div>
                    <div className="text-center my-3 border-b pb-3">
                        Set up your account to make yourself more discoverable!
                    </div>
                    <div className="grid grid-rows-3 grid-cols-3 auto-cols-auto">
                        <div className="uppercase text-sm text-vici_secondary_text">
                            Created by:
                        </div>
                        <div className="col-span-2 flex">
                            <div>
                                <img alt="" src="/img/Vici Logo.png" width="24" />
                            </div>
                            <div className="text-xs font-bold pl-3 pt-1">Vici</div>
                        </div>
                        <div className="uppercase text-sm text-vici_secondary_text">
                            People Joined:
                        </div>
                        <div className="col-span-2">
                            <img alt="" src="/img/dummy/Group.png" />
                        </div>
                        <div className="uppercase text-sm text-vici_secondary_text">
                            Instructions
                        </div>
                        <div className="col-span-2">Set up your account by clicking “Do action”</div>
                    </div>
                    <div className="my-3">
                        <button className="w-full flex justify-center py-3 bg-primary_color rounded-lg text-white_color">
                            Invite Friends
                        </button>
                    </div>
                    <div className="mb-2 mt-6 flex w-full">
                        <button className="flex p-3 w-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                            </svg>
                            <span className="text-sm font-bold pl-2">Report Challenge</span>
                        </button>
                        <button className="p-3 w-1/2 border rounded-lg border-bottom_gray">
                            <span className="text-sm font-bold text-red">Abandon Challenge</span>
                        </button>
                    </div>
                </div>
                <div className="bg-white_color p-6 rounded-xl shadow-vici mt-5">
                    <div className="font-bold">Rewards</div>
                    <div className="flex justify-between border-b px-3 my-3 pb-3">
                        <div className="flex">
                            <img alt="" src="/img/medal.png" width="21" />
                            <div className="pt-2 pl-3">10 VIP Tokens</div>
                        </div>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-vici_secondary_text" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between px-3 my-3 pb-3">
                        <div className="flex">
                            <img alt="" className="" src="/img/achievebadge.png" width="24" height="24" />
                            <div className="pt-2 pl-3">Achievement Badge</div>
                        </div>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-vici_secondary_text" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white_color rounded-xl shadow-vici mt-5">
                    <div className="text-sm p-6">Invite link</div>
                    <div className="p-3 flex">
                        <div className="pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input type="text" className="ml-3 w-full" placeholder="https://invitelink" />
                        <div className="p-3 cursor-pointer bg-primary_color text-white_color">
                            Copy
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnboardingSidebar