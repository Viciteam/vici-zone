import React from 'react';

class Newsfeed extends React.Component {
    render () {
        return (
            <div>
                <div className="mt-16 bg-white_color py-6 shadow-lg rounded-md mr-8">
                    <div className="flex pb-5 px-5 justify-between">
                        <div className="flex">
                            <div>
                                <img src="/img/user_main.jpg" className="w-20 h-20 rounded-md"/>
                            </div>
                            <div className="pl-3">
                                <div><span className="font-bold">Daphne Winter</span> <span className="font-bold text-primary_color">Completed</span> a challenge!</div>
                                <div className="text-sm text-medium_gray">5m ago</div>
                                <div className="flex pt-1">
                                    <div className="bg-primary_color text-white_color px-2 rounded-full">Health</div>
                                    <div className="bg-primary_color text-white_color px-2 rounded-full ml-3">Productivity</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="/img/dummy/Frame2.png" className="w-full"/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="bg-white_color p-3 shadow-lg rounded-full w-1/5 -mt-6 flex">
                        <div className="pl-2 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            <span className="pl-3">0</span>
                        </div>
                        <div className="px-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                            </svg>
                            <span className="pl-3">0</span>
                        </div>
                    </div>
                    <div className="bg-white_color p-3 shadow-lg rounded-full w-1/12 -mt-6 mr-8 flex">
                        <div className="flex justify-center pl-2 pt-1">
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
        )
    }
}

export default Newsfeed