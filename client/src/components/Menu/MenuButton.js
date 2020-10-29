import React, { Component } from 'react';
import HamburgerMenu from '../../HamburgerMenu';
class menuButton extends Component {

    constructor() {
        super();
        this.state = {
            open: [false, true, false, true]
        };
    }
    handleClick(id) {
        let { open } = this.state;
        this.setState({
            open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
        });
    }

    render() {
        return (
            <div>
                <HamburgerMenu
                    isOpen={this.state.open[0]}
                    menuClicked={this.handleClick.bind(this, 0)}
                    width={18}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color='#fff'
                    borderRadius={5}
                    animationDuration={0.3}
                />
            </div>
        )
    }
}

export default menuButton
