import React, { Component } from 'react';
import PlaylistItem from '../PlaylistItem';
import style from './Playlist.less';

class Playlist extends Component {
    renderPlaylistItem(track, index){
        return (
            <li className={style.listItem} key={index}>
                <span className={style.activeIcon}>{(track.active)? ">": ""}</span>
                <span className={style.trackInfo}>{track.title} - {track.artist}</span>
            </li>
        )
    }
    render() {
        return (
            <div>
                <ul className={style.list}>
                {this.props.playlist.map(this.renderPlaylistItem)}
                </ul>
            </div>
        );
    }
}

export default Playlist;