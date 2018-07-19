import React, { Component } from 'react';
import PreviousButton from '../PreviousButton';
import PlayPauseButton from '../PlayPauseButton';
import NextButton from '../NextButton';
import ProgressBar from '../ProgressBar';
import Playlist from '../Playlist';
import {Howl, Howler} from 'howler';

import '../../styles/index.less';
import style from './MediaPlayer.less';


class MediaPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTrackNumber: 0,
            playlist: this.props.config.playlist,
            playing: false
        }
        this.playTrack = this.playTrack.bind(this);
        this.pauseTrack = this.pauseTrack.bind(this);
    }

    componentDidUpdate(){
        if(this.state.playing){
            this.playTrack();
        } 
        else if(!this.state.playing && this.sound){
            this.pauseTrack();
        }
    }

    playTrack() {
        console.log('play', JSON.stringify(this.state));
        if(this.sound){
            this.sound.stop();
            delete this.sound;
        }
        this.sound = new Howl({
            src: this.state.playlist[this.state.currentTrackNumber].src
        });
        this.sound.play();
    }

    pauseTrack(){
        this.sound.pause();
    }

    onClickPlay(evt){
        evt.preventDefault();
        if(!this.state.playing){
            this.setState({playing: true});
        } else {
            this.setState({playing: false});
        }
    }
    onClickNext(evt){
        this.setState({
            currentTrackNumber: (this.state.currentTrackNumber < this.state.playlist.length - 1)
                ? this.state.currentTrackNumber + 1
                : 0
        });
    }

    onClickPrevious(evt){
        this.setState({
            currentTrackNumber: (this.state.currentTrackNumber > 0)
                ? this.state.currentTrackNumber - 1
                : this.state.playlist.length - 1
        });
    }

    render() {
        console.log('render', this.state);
        return (
            <div className={style.container}>
                <div className={style.buttonContainer}>
                    <PreviousButton onClick={this.onClickPrevious.bind(this)}/>
                    <PlayPauseButton onClick={this.onClickPlay.bind(this)} playing={this.state.playing} />
                    <NextButton onClick={this.onClickNext.bind(this)}/>
                </div>
                <div className={style.trackInfoContainer}>
                    <h4 className={style.title}>{this.state.playlist[this.state.currentTrackNumber].title}</h4>
                    <p className={style.artist}>{this.state.playlist[this.state.currentTrackNumber].artist}</p>
                </div>
                {/* <div className={style.progressBar}>
                    <ProgressBar />
                </div>
                <div className={style.className}>
                    <Playlist playlist={this.state.playlist} />
                </div> */}
            </div>
        );
    }
}

export default MediaPlayer;