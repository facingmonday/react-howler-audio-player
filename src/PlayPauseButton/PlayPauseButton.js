import React, { Component } from 'react';
import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon';
import style from './PlayPauseButton.less';

class PlayPauseButton extends Component {
    render() {
        console.log('this.props', this.props);
        return (
            <div className={style.container}>
                <a onClick={this.props.onClick}>
                    {(!this.props.playing)? <PlayIcon />:<PauseIcon />}
                </a>
            </div>
        );
    }
}
export default PlayPauseButton;