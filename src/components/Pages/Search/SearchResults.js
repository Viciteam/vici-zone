import React from 'react';

class SearchResults extends React.Component {
    render () {
        return (
            <div className="container mx-auto mt-6">
                <div className="flex">
                    <div className="w-1/4 text-lg font-bold shadow-border_shadow_right px-3">Search Results</div>
                    <div className="w-1/2 px-6">
                        <div className="w-full border border-medium_gray flex rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-medium_gray mt-1 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="search" className="w-full focus:outline-none px-3 py-1 rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/4 shadow-border_shadow_right">
                        <div className="text-xs py-2 bg-white_color px-3">Filters</div>
                        <div className="flex cursor-pointer border-t border-medium_gray bg-vici_light_gray py-2 px-3">
                            <img alt="" src="/img/dummy/Group 1260.png"></img>
                            <div className="pl-3 pt-3">
                                All
                            </div>
                        </div>
                        <div className="flex cursor-pointer hover:bg-vici_light_gray py-2 px-3">
                            <img alt="" src="/img/dummy/Group 1260 (1).png"></img>
                            <div className="pl-3 pt-3">
                                People
                            </div>
                        </div>
                        <div className="flex cursor-pointer hover:bg-vici_light_gray py-2 px-3">
                            <img alt="" src="/img/dummy/Group 1260 (2).png"></img>
                            <div className="pl-3 pt-3">
                                Clan
                            </div>
                        </div>
                        <div className="flex cursor-pointer hover:bg-vici_light_gray py-2 px-3">
                            <img alt="" src="/img/dummy/Group 1260 (3).png"></img>
                            <div className="pl-3 pt-3">
                                Challenges
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 px-6">
                        <div className="bg-white_color my-6 py-6 px-6 rounded-2xl shadow-vici">
                            <div className="font-bold mb-6">People</div>
                            <div className="flex justify-between my-3">
                                <div className="flex">
                                    <div className="relative">
                                        <img alt="" src="/img/dummy/1.png" className="rounded-full"></img>
                                        <div className="h-3 w-3 bg-tag_success rounded-full absolute right-0 -mt-3 border border-white_color"></div>
                                    </div>
                                    <div className="pl-6">
                                        <div className="font-bold">Jessica Dale</div>
                                        <div className="text-xs">23k Followers</div>
                                    </div>
                                </div>
                                <div className="mx-6">
                                    <button className="px-6 py-2 bg-primary_color text-white_color rounded-full">Follow</button>
                                </div>
                            </div>
                            <div className="flex justify-between my-6">
                                <div className="flex">
                                    <div className="relative">
                                        <img alt="" src="/img/dummy/3.png" className="rounded-full"></img>
                                        <div className="h-3 w-3 bg-tag_success rounded-full absolute right-0 -mt-3 border border-white_color"></div>
                                    </div>
                                    <div className="pl-6">
                                        <div className="font-bold">John</div>
                                        <div className="text-xs">Friend</div>
                                    </div>
                                </div>
                                <div className="mx-6">
                                    <img alt="" src="/img/dummy/Path.png" className=""></img>
                                </div>
                            </div>
                            <div className="flex justify-between my-6">
                                <div className="flex">
                                    <div className="relative">
                                        <img alt="" src="/img/dummy/2.png" className="rounded-full"></img>
                                        <div className="h-3 w-3 bg-tag_success rounded-full absolute right-0 -mt-3 border border-white_color"></div>
                                    </div>
                                    <div className="pl-6">
                                        <div className="font-bold">Joshoua</div>
                                        <div className="text-xs">Friend</div>
                                    </div>
                                </div>
                                <div className="mx-6">
                                    <img alt="" src="/img/dummy/Path.png" className=""></img>
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                <button className="font-bold text-vici_secondary">See all</button>
                            </div>
                        </div>
                        <div className="bg-white_color my-6 py-6 px-6 rounded-2xl shadow-vici">
                            <div className="font-bold mb-3">Related searches</div>
                            <div className="flex my-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <div className="pl-3 font-bold">Japan Challenge</div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <div className="pl-3 font-bold">Just Dance Challenge</div>
                            </div>
                        </div>

                        <div className="bg-white_color my-6 py-6 px-6 rounded-2xl shadow-vici">
                            <div className="font-bold mb-3">Post</div>
                            <div className="flex justify-between my-3">
                                <div className="flex">
                                    <div>
                                        <img alt="" src="/img/user_main.jpg" width="60" className="rounded" />
                                    </div>
                                    <div className="pl-6">
                                        <div>Daphne Winter</div>
                                        <div className="text-sm text-medium_gray">5m ago</div>
                                    </div>
                                </div>
                                <div>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p>
                            Think I wanna do the bookworm challenge soon, haven’t read a book since! Who wants to join?
                            </p>
                        </div>
                        <div className="bg-white_color my-6 py-6 px-6 rounded-2xl shadow-vici">
                            <div className="flex justify-between my-3">
                                <div className="flex">
                                    <div>
                                        <img alt="" src="/img/user_main.jpg" width="60" className="rounded" />
                                    </div>
                                    <div className="pl-6">
                                        <div>Daphne Winter</div>
                                        <div className="text-sm text-medium_gray">5m ago</div>
                                    </div>
                                </div>
                                <div>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <p>
                                Saperet euripidis an cum. Pro ea quas epicurei, ad eam iriure albucius constituam. Eum cu cetero ornatus, cum no nobis interpretaris concludaturque, an bonorum eruditi electram usu. Eos mazim tritani imperdiet no, percipit gloriatur ne his. 
                            </p>
                            <div className="flex py-3">
                                <img alt="" src="/img/dummy/Rectangle 12.png"></img>
                                <img alt="" src="/img/dummy/Rectangle 11.png" className="pl-3"></img>
                            </div>
                        </div>
                    </div>


                </div>
               
            </div>
        )
    }
}

export default SearchResults