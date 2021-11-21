import React from 'react';

function MuteChatPopup ({ closeModal }) {

    const mutechat_time = [
        {
            text: 'For 15 minutes',
            value: '15m',
        },
        {
            text: 'For 30 minutes',
            value: '30m',
        },{
            text: 'For 1 hour',
            value: '1hr',
        },
        {
            text: 'For 8 hours',
            value: '8hrs',
        },
        {
            text: 'For 12 hours',
            value: '12hrs',
        },
        {
            text: 'For a day',
            value: '24hr',
        },
        {
            text: 'Until I turn it back on',
            value: 'on',
        }
    ]

    return (
        <div className="bg-vici_black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-white_color w-1/4 rounded-lg">
                <div className="flex justify-between p-6 bg-primary_background rounded-lg">
                    <div className="text-lg font-bold">
                        Mute chat
                    </div>
                    <div>
                        <div onClick={() => {closeModal()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7266 16.5L16.7266 20.5L10.7266 14.4983L4.72656 20.5L0.726562 16.5L6.72656 10.5L0.726562 4.5L4.72656 0.5L10.7266 6.5L16.7266 0.5L20.7266 4.5L14.7249 10.5L20.7266 16.5Z" fill="#EB5757"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-6">
                    <div>
                        Mute chat for how long?
                    </div>
                    <div>
                        {
                            mutechat_time.map((item, i) => (
                                <div className="mt-2">
                                    <label class="inline-flex items-center">
                                        <input type="radio" class="form-radio" name="accountType" value={item.value} />
                                        <span class="ml-2 text-sm">{ item.text }</span>
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="p-5 flex justify-end bg-primary_background rounded-lg">
                    <button onClick={() => {closeModal()}} className="py-2 px-3 text-sm rounded-lg border border-medium_gray uppercase text-medium_gray">
                        Cancel
                    </button>
                    <button className="py-2 px-3 ml-3 bg-primary_color text-white_color rounded-lg">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MuteChatPopup