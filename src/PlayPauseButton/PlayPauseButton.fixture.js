import PlayPauseButton from './PlayPauseButton';

export default {
    component: PlayPauseButton,
    props: {
        playing: false,
        onClick: function(){
            console.log('Clicked!')
        }
    }
};