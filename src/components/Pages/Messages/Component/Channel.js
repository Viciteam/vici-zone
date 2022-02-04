import React from 'react';
export class Channel extends React.Component {
    click = () => {
        this.props.onClick(this.props.id);
    }

    render() {

        return (
            <div className="channel-item py-3" onClick={this.click}>
                <div className="font-bold cursor-pointer">{this.props.name}</div>
                <span className="text-sm">No. of participants: {this.props.participants}</span>
            </div>
        )
    }
}