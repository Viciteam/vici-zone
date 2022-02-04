import React from 'react';
import ChangeNicknamePopup from '../Modals/ChangeNicknamePopup';
import MuteChatPopup from '../Modals/MuteChatPopup';
import IgnoreMessagesPopup from '../Modals/IgnoreMessagesPopup';
import BlockUserPopup from '../Modals/BlockUserPopup';

class MessagesRightSidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openChangeNicknameModal: false,
            openMuteChatModal: false,
            openIgnoreMessagesModal: false,
            openBlockUserModal: false,
        }
        this.handleOpenChangeNicknameModal = this.handleOpenChangeNicknameModal.bind(this);
        this.handleCloseChangeNicknameModal = this.handleCloseChangeNicknameModal.bind(this);
        this.handleOpenMuteChatModal = this.handleOpenMuteChatModal.bind(this);
        this.handleCloseMuteChatModal = this.handleCloseMuteChatModal.bind(this);
        this.handleOpenIgnoreMessagesModal = this.handleOpenIgnoreMessagesModal.bind(this);
        this.handleCloseIgnoreMessagesModal = this.handleCloseIgnoreMessagesModal.bind(this);

        this.handleOpenBlockUserModal = this.handleOpenBlockUserModal.bind(this);
        this.handleCloseBlockUserModal = this.handleCloseBlockUserModal.bind(this);
    }
    handleOpenBlockUserModal () {
        this.setState({ openBlockUserModal: true });
    }

    handleCloseBlockUserModal () {
        this.setState({ openBlockUserModal: false });
    }

    handleOpenIgnoreMessagesModal () {
        this.setState({ openIgnoreMessagesModal: true });
    }

    handleCloseIgnoreMessagesModal () {
        this.setState({ openIgnoreMessagesModal: false });
    }

    handleOpenMuteChatModal () {
        this.setState({ openMuteChatModal: true });
    }

    handleCloseMuteChatModal () {
        this.setState({ openMuteChatModal: false });
    }

    handleOpenChangeNicknameModal () {
        this.setState({ openChangeNicknameModal: true });
    }

    handleCloseChangeNicknameModal () {
        this.setState({ openChangeNicknameModal: false });
    }

     render () {
         const color = '#FCAF38'
         return (
            <div> 
                <div className="flex justify-center">
                    <div className="py-5 bg-vici_light_gray w-full">
                        <div className="flex justify-center">
                            <img alt="" src="/img/dummy/Frame 2483.png" width="120" />
                        </div>
                        <div className="text-center font-bold pt-1">
                            Phillipe
                        </div>
                        <div className="flex justify-center pt-1">
                            <img alt="" src="/img/dummy/fitness.png" className="pr-3" />
                            Fitness Clan
                        </div>
                    </div> 
                </div>
                <div className="p-5 font-bold text-vici_secondary_text shadow-border_shadow">
                    Customize Chat
                </div>
                <div className="p-5">
                    <button onClick={this.handleOpenChangeNicknameModal} className="text-vici_secondary">
                        Change nickname
                    </button>
                    {this.state.openChangeNicknameModal && <ChangeNicknamePopup closeModal={this.handleCloseChangeNicknameModal } />}
                </div>
                <div className="px-5 flex justify-between">
                    <div className="flex">
                        <div className="pt-1">
                            <img alt="" src="/img/dummy/Vector1.png" width="20" height="15"/>
                        </div>
                        <div className="pl-2">Change color</div>
                    </div>
                    <div className="flex bg-vici_light_gray">
                        <input type="color" className="w-8" value={ color } />
                        <div className="pl-2 text-sm pt-1">{ color }</div>
                    </div>
                </div>
                <div className="px-5 pt-8 pb-5 shadow-border_shadow font-bold text-vici_secondary_text">
                    Settings
                </div>
                <div className="px-5 pb-3 pt-5 flex justify-between">
                    <div>
                        <button onClick={this.handleOpenMuteChatModal} className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                <path d="M16 16.695L3.84 4.15L1.275 1.505L0 2.775L2.8 5.575L2.805 5.58C2.28 6.57 2 7.74 2 9V14L0 16V17H13.73L15.73 19L17 17.725L16 16.695ZM8 20C9.105 20 10 19.105 10 18H6C6 19.105 6.895 20 8 20ZM14 12.68V9C14 5.925 12.365 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C6.355 2.715 6.215 2.755 6.075 2.8C5.97 2.835 5.87 2.87 5.77 2.91C5.77 2.91 5.765 2.91 5.765 2.915C5.76 2.915 5.755 2.92 5.75 2.92C5.52 3.01 5.295 3.115 5.075 3.23C5.07 3.23 5.065 3.235 5.06 3.235L14 12.68Z" fill="#596366"/>
                            </svg>
                            <div className="pl-3">Mute chat</div>
                        </button>
                        {this.state.openMuteChatModal && <MuteChatPopup closeModal={this.handleCloseMuteChatModal } />}
                    </div>
                    <div>
                        <div class="flex items-center justify-center w-full">
                            <label for="toggleB" class="flex items-center cursor-pointer">
                                <div class="relative mute-chat">
                                    <input type="checkbox" id="toggleB" class="sr-only" />
                                    <div class="block bg-primary_color w-12 h-7 rounded-full"></div>
                                    <div class="dot absolute left-1 top-1 bg-vici_gray w-5 h-5 rounded-full transition"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-3">
                    <button onClick={this.handleOpenIgnoreMessagesModal} className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="pl-3">Ignore messages</div>
                    </button>
                    {this.state.openIgnoreMessagesModal && <IgnoreMessagesPopup closeModal={this.handleCloseIgnoreMessagesModal } />}
                </div>
                <div className="px-5 py-3">
                    <button onClick={this.handleOpenBlockUserModal} className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        <div className="pl-3">Block user</div>
                    </button>
                    {this.state.openBlockUserModal && <BlockUserPopup closeModal={this.handleCloseBlockUserModal } />}
                </div>
                <div className="p-5 flex justify-between">
                    <div className="font-bold text-vici_secondary_text">
                        Shared files
                    </div>
                    <div>
                        <button className="text-vici_secondary_text">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
         )
     }
}

export default MessagesRightSidebar