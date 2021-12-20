import React from 'react';

function EditProfile ({ closeModal }) {

    return (
        <div className="bg-vici_black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-white_color w-1/2 rounded-lg h-screen overflow-auto">
                <div className="flex justify-between p-6 bg-primary_background rounded-lg">
                    <div className="text-lg font-bold">
                        Edit Profile
                    </div>
                    <div>
                        <div onClick={() => {closeModal()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7266 16.5L16.7266 20.5L10.7266 14.4983L4.72656 20.5L0.726562 16.5L6.72656 10.5L0.726562 4.5L4.72656 0.5L10.7266 6.5L16.7266 0.5L20.7266 4.5L14.7249 10.5L20.7266 16.5Z" fill="#EB5757"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-1/2 mx-auto my-3 rounded-2xl border border-medium_gray">
                        <div className="flex justify-center pt-3">
                            <img src="/img/avatarguest.png" width="100" />
                        </div>
                        <div className="flex justify-center my-3">
                            <button className="text-vici_secondary">Upload Profile</button>
                        </div>
                        <div className="mt-3 p-3">
                            <div className="flex">
                                <div className="">
                                    <div className="flex">
                                        <div className="text-sm text-vici_secondary_text font-bold">Profile BG Color</div>
                                        <button className="ml-2">
                                            <img src="/img/dummy/Vector.png" />
                                        </button>
                                    </div>
                                    <div className="flex mt-3">
                                        <input type="color" className="h-10 rounded" value="#FFCA28" />
                                        <div className="pl-3 pt-2">#FFCA28</div>
                                    </div>
                                </div>
                                <div className="pl-12 ">
                                    <div className="flex">
                                        <div className="text-sm text-vici_secondary_text font-bold">Text Color</div>
                                        <button className="ml-2">
                                            <img src="/img/dummy/Vector.png" />
                                        </button>
                                    </div>
                                    <div className="flex mt-3">
                                        <div className="px-3 py-2 rounded-lg bg-vici_secondary text-white_color">
                                            <label class="inline-flex items-center">
                                                <input type="radio" class="form-radio" name="textColor" value="1" />
                                                <span class="ml-2 text-sm">White</span>
                                            </label>
                                        </div>
                                        <div className="px-3 ml-3 py-2 rounded-lg hover:bg-vici_secondary hover:text-white_color border border-medium_gray">
                                            <label class="inline-flex items-center">
                                                <input type="radio" class="form-radio" name="textColor" value="2" />
                                                <span class="ml-2 text-sm">Black</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="text-sm text-vici_secondary_text font-bold">Preview</div>
                            <div className="w-full mt-3">
                                <button className="w-full py-2 rounded-lg text-white_color bg-vici_secondary">
                                    John Doe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mx-24 mt-6 pb-12 shadow-border_shadow">
                        <div className="flex p-3">
                            <div className="font-bold w-1/4 pt-2">
                                Username
                            </div>
                            <div className="w-3/4">
                                <input type="text" className="w-full py-2 px-3 rounded-xl border border-medium_gray" placeholder="Username" />
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold w-1/4 pt-2">
                                Name
                            </div>
                            <div className="w-3/4">
                                <input type="text" className="w-full py-2 px-3 rounded-xl border border-medium_gray" placeholder="Name" />
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold w-1/4 pt-2">
                                Preferred pronouns
                            </div>
                            <div className="w-3/4">
                                <select  className="w-full py-2 px-3 rounded-xl border border-medium_gray" placeholder="Name">
                                    <option>She/Her</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold w-1/4 pt-2">
                                Birthdate
                            </div>
                            <div className="w-3/4">
                                <input type="text" className="w-full py-2 px-3 rounded-xl border border-medium_gray" placeholder="DD/MM/YY" />
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold w-1/4 pt-2">
                                Bio
                            </div>
                            <div className="w-3/4">
                               <textarea className="w-full py-2 px-3 rounded-xl border border-medium_gray" placeholder="Tell us something about yourself"></textarea>
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold w-1/4 pt-2">
                                Mission
                            </div>
                            <div className="w-3/4">
                               <textarea className="w-full py-2 px-3 rounded-xl border border-medium_gray" placeholder="What is your mission in life?"></textarea>
                            </div>
                        </div>
                        <div className="flex p-3">
                            <div className="font-bold w-1/4 pt-2">
                                Country
                            </div>
                            <div className="w-3/4">
                                <select  className="w-full py-2 px-3 rounded-xl border border-medium_gray" placeholder="Name">
                                    <option>Philippines</option>
                                    <option>Vietnam</option>
                                    <option>Singapore</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="my-6">
                        <div className="flex justify-center">
                            <button onClick={() => {closeModal()}} className="py-2 px-3 border border-medium_gray rounded-lg">Cancel</button>
                            <button onClick={() => {closeModal()}} className="py-2 px-5 border ml-3 bg-primary_color text-white_color rounded-lg">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EditProfile