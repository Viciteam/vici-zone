import React from 'react';
import BrandProfileInviteModal from './BrandProfileInviteModal';
import { useState, useEffect, useRef } from 'react';

function BrandProfileModal ({ closeModal, bannerUpdate, profileUpdate }) {

    const [openInvite, setInvite] = useState(false)
    const [isCreateBrand, setCreateBrand] = useState(false)
    const [preview, setPreview] = useState()
    const [profile, setProfilePreview] = useState('/img/avatarguest.png')
    const fileUploader = useRef(null)
    const profileUploader = useRef(null)

    useEffect(() => {
        if(isCreateBrand){
            closeModal()
        }
      });

    const uploadBanner = () => {
        fileUploader.current.click();
      };

    const uploadProfile = () => {
        profileUploader.current.click();
      };
    
    function setFile(event) {
        const objectUrl = URL.createObjectURL(event.target.files[0])
        bannerUpdate(objectUrl)
        setPreview(objectUrl)
    }

    function setProfile(event) {
        const objectUrl = URL.createObjectURL(event.target.files[0])
        profileUpdate(objectUrl)
        setProfilePreview(objectUrl)
    }

    return (
        <div className="bg-vici_black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-white_color w-5/12 rounded-xl p-6">
                <div className="flex justify-between pb-3 border-b border-medium_gray">
                    <div className="font-bold text-xl">Create brand profile</div>
                    <div>
                        <button onClick={() => {closeModal();}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7266 16.5L16.7266 20.5L10.7266 14.4983L4.72656 20.5L0.726562 16.5L6.72656 10.5L0.726562 4.5L4.72656 0.5L10.7266 6.5L16.7266 0.5L20.7266 4.5L14.7249 10.5L20.7266 16.5Z" fill="#EB5757"/>
                            </svg>
                        </button>
                    </div>
                </div>  
                <div className="mx-12 my-3 p-3 rounded-xl border border-bottom_gray">
                    <div className="h-28 flex relative justify-center bg-vici_gray rounded-xl">
                        <img src={preview} className="absolute w-full rounded-xl object-cover h-28" />
                        <button onClick={uploadBanner} className="text-vici_secondary cursor-pointer z-10">Upload Banner</button>
                        <input type="file" id="file" onChange={setFile.bind(this)}  ref={fileUploader} style={{display: "none"}}/>
                    </div>
                    <div className="w-2/3 mx-auto my-3 rounded-2xl">
                        <div className="flex justify-center pt-3">
                            <img src={profile} width="100" className="rounded-full" />
                        </div>
                        <div className="flex justify-center my-3">
                            <button onClick={uploadProfile} className="text-vici_secondary">Upload Profile</button>
                            <input type="file" id="file" onChange={setProfile.bind(this)}  ref={profileUploader} style={{display: "none"}}/>
                        </div>
                        <div className="mt-3 p-3">
                            <div className="flex justify-between">
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
                </div>
                <div className="mx-24 mt-6 pb-6 border-b">
                    <div className="flex p-3">
                        <div className="font-bold w-1/4 pt-2">
                            Brand Name
                        </div>
                        <div className="w-3/4">
                            <input type="text" className="w-full py-2 px-3 rounded-xl border border-bottom_gray" placeholder="Brand Name" />
                        </div>
                    </div>
                    <div className="flex p-3">
                        <div className="font-bold w-1/4 pt-2">
                            Brand Desc.
                        </div>
                        <div className="w-3/4">
                            <textarea className="w-full py-2 px-3 rounded-xl border border-bottom_gray" placeholder="Tell us something about your brand"></textarea>
                        </div>
                    </div>
                    <div className="flex p-3">
                        <div className="font-bold w-1/4 pt-2">
                            Country
                        </div>
                        <div className="w-3/4">
                            <select  className="w-full py-2 px-3 rounded-xl border border-bottom_gray" placeholder="Name">
                                <option>Philippines</option>
                                <option>Vietnam</option>
                                <option>Singapore</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-3 mt-6">
                    <div className="flex justify-center">
                        <button onClick={() => {closeModal()}} className="py-2 px-3 border border-medium_gray rounded-lg">Cancel</button>
                        <button onClick={() => { setInvite(true)}} className="py-2 px-5 border ml-3 bg-primary_color text-white_color rounded-lg">Next</button>
                    </div>
                </div>
            </div>
            {openInvite && <BrandProfileInviteModal closeInvite={setInvite} isCreateBrand={setCreateBrand} />}
        </div>
    )
}

export default BrandProfileModal