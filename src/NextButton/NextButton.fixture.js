import NextButton from './NextButton';

export default {
    component: NextButton,
    props: {
        onClick: function(){
            console.log('Clicked!')
        }
    }
};