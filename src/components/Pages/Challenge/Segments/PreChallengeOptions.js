import './../../../styles/challenge.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

class PreChallengeOptions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOptionNumber: this.props.optionum,
            isactive: this.props.isactive,
            selectedOption: 'Select a option',
            showOptions: false,
            showPremadeOpts: false,
            showText: true,
            showTextArea: false,
            multipleNumber: 0,
            optionList: [],
        }

        this.setSelected = this.setSelected.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.togglePremadeOptions = this.togglePremadeOptions.bind(this);
        this.showTextArea = this.showTextArea.bind(this);
        this.showText = this.showText.bind(this);
        this.addMultipleOption = this.addMultipleOption.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    setSelected(selected){
        this.setState({selectedOption: selected});
        this.setState({showOptions: false});
    }
    
    toggleOptions(){
        this.setState({showOptions: !this.state.showOptions});
    }

    togglePremadeOptions(){
        this.setState({showPremadeOpts: !this.state.showPremadeOpts});
    }

    showTextArea(){
        return (
            <div className="dtextArea">
                <textarea name="" placeholder="Answer"></textarea>
            </div>
        );
    }

    showText(){
        return (
            <div className="dtext">
                <input type="text" placeholder="Answer" />
            </div>
        );
    }

    addMultipleOption(){
        let multipleOptions = this.state.optionList;
        multipleOptions.push('')
        // multipleOptions[this.state.multipleNumber] = '';

        this.setState({optionList: multipleOptions});
        this.setState({multipleNumber: this.state.multipleNumber + 1});
        console.log('dnumber -> ', this.state.multipleNumber);
        console.log('values -> ', this.state.optionList);


    }

    showMultipleChoice(typeTitle){
        return (
            <div className="dMultiple">
                <div className="optionList">
                    {
                        this.state.optionList.map((xvalue, index) => 
                            <div className="doptitem" key={index}>
                                <div className="dtopcheck">
                                    <input type="checkbox" />
                                </div>
                                <div className="doptname">
                                    <input type="text" placeholder={"Option " + (index + 1)} name={"opt"+index} />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="addMultiupleOption" onClick={() => this.addMultipleOption()}>
                    <span className="dmicon">+</span>
                    <span className="dmtext">Add {typeTitle} Option</span>
                </div>
            </div>
        );
    }

    showConnectToSocial(){
        return (
            <div className="dconnectsocial">
                <div className="ditembase">
                    <div className="dradiobase">
                        <input type="radio" name="socialpart" />
                    </div>
                    <div className="dvaluebase">
                        <div className="dvicon fbicon">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="dvtext">Facebook</div>
                    </div>
                </div>
                <div className="ditembase">
                    <div className="dradiobase">
                        <input type="radio" name="socialpart" />
                    </div>
                    <div className="dvaluebase">
                        <div className="dvicon insicon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className="dvtext">Instagram</div>
                    </div>
                </div>
                <div className="ditembase">
                    <div className="dradiobase">
                        <input type="radio" name="socialpart" />
                    </div>
                    <div className="dvaluebase">
                        <div className="dvicon lnicon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <div className="dvtext">LinkedIn</div>
                    </div>
                </div>
                <div className="ditembase">
                    <div className="dradiobase">
                        <input type="radio" name="socialpart" />
                    </div>
                    <div className="dvaluebase">
                        <div className="dvicon twicon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="dvtext">Twitter</div>
                    </div>
                </div>
                <div className="ditembase">
                    <div className="dradiobase">
                        <input type="radio" name="socialpart" />
                    </div>
                    <div className="dvaluebase">
                        <div className="dvicon tpicon">
                            <FontAwesomeIcon icon={faTelegramPlane} />
                        </div>
                        <div className="dvtext">Telegram</div>
                    </div>
                </div>
            </div>
        );
    }

    updateName(event){
        console.log('updated textr ->', event.target.value);
        let questioninfo = [];
        questioninfo['question_text'] = event.target.value;
        questioninfo['question_index'] = this.state.isOptionNumber;
        this.props.parentCallBack(questioninfo);
    }

    render () {

        const selectedOpts = this.state.selectedOption;
        let renderElement;
        if(selectedOpts === 'Paragraph'){
            renderElement = this.showTextArea();
        } else if(selectedOpts === 'Multiple Choice' || selectedOpts === 'Checkbox' || selectedOpts === 'Dropdown'){
            renderElement = this.showMultipleChoice(selectedOpts);
        } else if(selectedOpts === 'Connect to social account'){
            renderElement = this.showConnectToSocial();
        } else {
            renderElement = this.showText();
        }

        
        
        return (
            <div className="dformpart">
                <div className="dlabelpart">
                    <input type="text" placeholder={"Question " + this.state.isOptionNumber} onKeyUp={this.updateName}/>
                </div>
                <div className="doptionpart">
                    <div className="selectedItem" onClick={() => this.toggleOptions()}>{this.state.selectedOption}</div>
                    <div className={'doptionitems '+ (this.state.showOptions ? 'show_options' : 'hide_options')}>
                        <div className="doptionitem" onClick={() => this.togglePremadeOptions()}>
                            <div className="dopt_premade">Premade Fields</div>
                            <div className={'dopt_list '+ (this.state.showPremadeOpts ? 'show_premade_options' : 'hide_premade_options')}>
                                <div className="dopt_list_item"  onClick={() => this.setSelected('First Name')}>First Name</div>
                                <div className="dopt_list_item"  onClick={() => this.setSelected('Last Name')}>Last Name</div>
                                <div className="dopt_list_item"  onClick={() => this.setSelected('Email Address')}>Email Address</div>
                                <div className="dopt_list_item"  onClick={() => this.setSelected('Phone Number')}>Phone Number</div>
                                <div className="dopt_list_item"  onClick={() => this.setSelected('Country')}>Country</div>
                                <div className="dopt_list_item"  onClick={() => this.setSelected('Connect to social account')}>Connect to social account</div>
                            </div>
                        </div>
                        <div className="doptionitem" onClick={() => this.setSelected('Short Answer')}>Short Answer</div>
                        <div className="doptionitem" onClick={() => this.setSelected('Paragraph')}>Paragraph</div>
                        <div className="doptionitem" onClick={() => this.setSelected('Multiple Choice')}>Multiple Choice</div>
                        <div className="doptionitem" onClick={() => this.setSelected('Checkbox')}>Checkbox</div>
                        <div className="doptionitem" onClick={() => this.setSelected('Dropdown')}>Dropdown</div>
                    </div>
                </div>
                <div className="danswerpart">
                    {renderElement}
                </div>
            </div>
        )
    }
}

export default PreChallengeOptions