import React, { Component } from 'react';
import style from './ProgressBar.less';

class ProgressBar extends Component {
    render() {
        return (
            <div>
                <div className={style.slideContainer}>
                    <input  className={style.sliderInput} type="range" min="1" max="100" value={this.props.value || 0} />
                </div>
            </div>
        );
    }
}

export default ProgressBar;