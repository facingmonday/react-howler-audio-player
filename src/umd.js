import React from 'react';
import ReactDOM from 'react-dom';

import MediaPlayer from './MediaPlayer';

export const init = (selector, config)=>{
    ReactDOM.render(<MediaPlayer config={config} />, document.getElementById(selector));
}