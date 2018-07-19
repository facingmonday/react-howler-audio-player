import React, { Component } from 'react';
import PreviousIcon from './PreviousIcon';
import style from './PreviousButton.less';

class PreviousButton extends Component {
    render() {
        return (
            <div className={style.previous}>
                <a onClick={this.props.onClick}>
                    <PreviousIcon />
                </a>
            </div>
        );
    }
}

export default PreviousButton;