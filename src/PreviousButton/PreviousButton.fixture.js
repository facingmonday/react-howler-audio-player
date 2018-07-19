import PreviousButton from './PreviousButton';

export default {
    component: PreviousButton,
    props: {
        onClick: function(){
            console.log('Clicked!')
        }
    }
};