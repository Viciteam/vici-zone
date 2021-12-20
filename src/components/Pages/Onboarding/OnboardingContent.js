import React from 'react';
import { DefaultLoadingManager } from 'three';

class OnboardingContent extends React.Component {
    render () {

        let participants = [
            {
                avatar: '/img/dummy/1.png',
                name: 'Lorem Ipsum',
                progress: '6/6'
            },
            {
                avatar: '/img/dummy/2.png',
                name: 'Lia Samantha',
                progress: '5/6'
            },
            {
                avatar: '/img/dummy/3.png',
                name: 'Angela Dominique',
                progress: 'failed'
            },
            {
                avatar: '/img/dummy/4.png',
                name: 'Lorem Ipsum',
                progress: '2/6'
            },
            {
                avatar: '/img/dummy/5.png',
                name: 'Lorem Ipsum',
                progress: '2/6'
            }
        ]

        return (
            <div>
                <div className="bg-white_color rounded-2xl shadow-vici">
                    <div className="px-10 py-3 text-xl font-bold bg-primary_color text-white_color rounded-t-2xl">Actions</div>
                    <div className="p-6 flex justify-between hover:bg-primary_background">
                        <div>
                            <input type="radio" name="actions" />
                            <span className="pl-6">Edit your profile</span>
                        </div>
                        <div>
                            <button>Do action</button>
                        </div>
                    </div>
                    <div className="p-6 flex justify-between hover:bg-primary_background rounded-b-2xl">
                        <div>
                            <input type="radio" name="actions"/>
                            <span className="pl-6">Create a brand account (optional)</span>
                        </div>
                        <div>
                            <button>Do action</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white_color rounded-2xl shadow-vici p-4 flex w-full mt-5">
                    <div className="w-1/5 p-6 border-r pl-12 border-medium_gray">
                        <img src="/img/usericon.png" />
                    </div>
                    <div className="relative pl-6 pt-3 flex">
                        <div className="w-24 h-24 border-8 rounded-full border-medium_gray text-center pt-4">
                            <div>0</div>
                            <div className="text-xs text-medium_gray">Actions</div>
                        </div>
                        <div className="pl-6 w-3/4">
                            <div className="font-bold text-xl">Your Progress</div>
                            <p className="pt-3">You aren’t doing any actions yet, click on “Do action” to start your progress.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white_color rounded-2xl shadow-vici mt-5">
                    <div className="px-10 py-3 bg-primary_color text-white_color flex justify-between rounded-t-2xl">
                        <div className="text-xl font-bold">Participants’ Progress</div>
                        <div className="">
                            <button className="text-sm flex pt-1">
                                <span className="pr-1">View all</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex w-full p-3 border-b border-medium_gray mb-3">
                            <div className="w-1/3 text-vici_secondary_text">
                                Participant
                            </div>
                            <div className="w-1/3 text-vici_secondary_text">
                                Clan
                            </div>
                            <div className="w-1/3 text-vici_secondary_text">
                                Progress
                            </div>
                        </div>
                        {
                            participants.map((user, i) => (
                                <div className="w-full flex px-3 py-2">
                                    <div className="w-1/3 flex">
                                       <img src={ user.avatar} width="30" className="rounded-full"/>
                                       <div className="pl-3 text-sm pt-1">{user.name}</div>
                                    </div>
                                    <div className="w-1/3">
                                        -
                                    </div>
                                    <div className="w-1/3">
                                        <div className="flex w-full">
                                            {
                                                user.progress == 'failed' ?
                                                <div className="w-5/6 h-3 bg-failed_secondary rounded-full mt-1">
                                                    <div className="w-1/6 h-3 bg-red rounded-full">
                                                    </div>
                                                </div>
                                                :
                                                <div className="w-5/6 h-3 bg-vici_bgcolor rounded-full mt-1">
                                                    <div className={`w-${user.progress} h-3 bg-primary_color rounded-full`}>
                                                    </div>
                                                </div>
                                            }
                                            <div className="pl-3">
                                                {
                                                    user.progress == '6/6' ?
                                                        <div className="w-5 h-5 bg-primary_color rounded-full text-white_color">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    :
                                                    <div className={`${user.progress == 'failed' ? 'uppercase text-xs text-red' : '' }`}>
                                                        { user.progress }
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="p-6 flex justify-between">
                    <div className="font-bold text-xl">
                        Updates & Comments 
                    </div>
                    <div>
                        <button className="text-sm flex pt-1">
                            <span className="pr-1">All posts</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="px-6">
                    <div className="bg-white_color rounded shadow-vici px-3 pt-6 pb-3">
                        <div className="flex w-full">
                            <div className="w-1/12 pl-3">
                                <img src="/img/usericon.png" width="30" />
                            </div>
                            <div className="w-11/12">
                                <textarea className="w-full p-1" rows="1" placeholder="Write something..."></textarea>
                            </div>
                        </div>
                        <div className="flex justify-between mt-3">
                            <div className="flex">
                                <button className="p-3 rounded-full hover:bg-light_gray text-dark_gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </button>
                                <button className="p-3 rounded-full hover:bg-light_gray text-dark_gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button className="p-3 rounded-full hover:bg-light_gray text-primary_color ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex border-b border-medium_gray">
                        <div>
                            <img src="/img/user_main.jpg" width="50" className="rounded" height="50" />
                        </div>
                        <div className="pl-3">
                            <div>Daphne Winter - Joined the challenge</div>
                            <div className="text-sm text-medium_gray">5m ago</div>
                        </div>
                    </div>
                    <div className="p-6 flex border-b border-medium_gray mb-6">
                        <div>
                            <img src="/img/prof_icon.png" width="50" className="rounded" height="50" />
                        </div>
                        <div className="pl-3">
                            <div>Lorem Ipsum - Failed the challenge</div>
                            <div className="text-sm text-medium_gray">10m ago</div>
                        </div>
                    </div>

                    <div className="bg-white_color rounded shadow-vici px-3 pt-6 pb-3">
                        <div className="flex justify-between w-full pl-3">
                            <div className="flex">
                                <div>
                                    <img src="/img/user_main.jpg" width="50" className="rounded" height="50" />
                                </div>
                                <div className="pl-3">
                                    <div>Daphne Winter</div>
                                    <div className="text-sm text-medium_gray">5m ago</div>
                                </div>
                            </div>
                            <div>
                                <button className="p-3 rounded-full hover:bg-light_gray text-dark_gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="pl-6 py-2">
                        Morning Routine let’s go!
                        </div>
                        <div className="flex justify-between mt-3">
                            <div className="flex">
                                <div className="pl-2 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-dark_gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    <span className="pl-3">0</span>
                                </div>
                                <div className="px-3 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-dark_gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                    </svg>
                                    <span className="pl-3">0</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-center pr-3 pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16 0H4C1.791 0 0 1.592 0 3.556V6V8V12.444C0 14.408 1.791 16 4 16H6L10 20L14 16H16C18.209 16 20 14.408 20 12.444V8V6V3.556C20 1.592 18.209 0 16 0ZM18 12.444C18 13.287 17.084 14 16 14H14H13.172L12.586 14.586L10 17.172L7.414 14.586L6.829 14H6H4C2.916 14 2 13.287 2 12.444V8H18V12.444ZM2 6V3.556C2 2.712 2.916 2 4 2H16C17.084 2 18 2.712 18 3.556V6H2Z" fill="#596366"/>
                                        <path d="M6 3H4V5H6V3Z" fill="#596366"/>
                                        <path d="M12 3H10V5H12V3Z" fill="#596366"/>
                                        <path d="M9 3H7V5H9V3Z" fill="#596366"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnboardingContent