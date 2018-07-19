import React, { Component } from 'react';
import NextIcon from './NextIcon';
import style from './NextButton.less';

class NextButton extends Component {
    render() {
        return (
            <div className={style.next}>
                <a onClick={this.props.onClick}>
                    <NextIcon />
                </a>
            </div>
        );
    }
}

export default NextButton;