import React from 'react';

function BrandProfileInviteModal ({ closeInvite, isCreateBrand }) {

    return (
        <div className="bg-vici_black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-white_color relative h-full w-5/12 rounded-xl p-6">
                <div className="flex justify-between pb-3 border-b border-medium_gray">
                    <div className="font-bold text-xl">Create brand profile</div>
                    <div>
                        <button onClick={() => {closeInvite(false);}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7266 16.5L16.7266 20.5L10.7266 14.4983L4.72656 20.5L0.726562 16.5L6.72656 10.5L0.726562 4.5L4.72656 0.5L10.7266 6.5L16.7266 0.5L20.7266 4.5L14.7249 10.5L20.7266 16.5Z" fill="#EB5757"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mx-12 my-6 p-3">
                    <div className="font-bold pl-12 pb-6">
                        Invite people to manage your brand
                    </div>
                    <div className="flex justify-between py-3 border-b border-medium_gray">
                        <div className="flex">
                            <input type="checkbox" className="mt-4 mr-6" />
                            <img alt="" src="/img/dummy/2.png" className="w-30 rounded-full" />
                            <div className="pl-6">
                                <div className="text-sm text-vici_secondary_text">Angelo</div>
                                <div className="text-sm text-medium_gray">Angelo@company.com</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-6">
                                <select  className="w-full py-2 px-3 rounded-xl border border-bottom_gray" placeholder="Name">
                                    <option>Manage everything</option>
                                </select>
                            </div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-medium_gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between py-3 border-b border-medium_gray">
                        <div className="flex">
                            <input type="checkbox" className="mt-4 mr-6" />
                            <img alt="" src="/img/dummy/3.png" className="w-30 rounded-full" />
                            <div className="pl-6">
                                <div className="text-sm text-vici_secondary_text">Duke</div>
                                <div className="text-sm text-medium_gray">Duke@company.com</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-6">
                                <select  className="w-full py-2 px-3 rounded-xl border border-bottom_gray" placeholder="Name">
                                    <option>Manage challenges only</option>
                                </select>
                            </div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-medium_gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="my-3 flex p-3 rounded-2xl shadow-vici cursor-pointer">
                        <button className="p-1 border rounded-xl border-light_gray text-vici_secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                        <div className="font-bold text-vici_secondary pl-6 pt-1">
                            Invite
                        </div>
                    </div>
                </div>

                <div className="mb-3 absolute bottom-12 inset-x-0">
                    <div className="flex justify-center">
                        <button onClick={() => {closeInvite(false)}} className="py-2 px-3 border border-medium_gray rounded-lg">Back</button>
                        <button onClick={() => { isCreateBrand(true)}} className="py-2 px-5 border ml-3 bg-primary_color text-white_color rounded-lg">Create Brand Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BrandProfileInviteModal