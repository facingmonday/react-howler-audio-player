import MediaPlayer from './MediaPlayer';

export default {
    component: MediaPlayer,
    props: {
        config: {
            playlist: [
                {
                    title: "If There's a Bar up in Heaven",
                    artist: "Mark Leach",
                    src: "audio/barinheaven.m4a"
                },
                {
                    "title": "If Youre Down",
                    "artist": "Mark Leach",
                    "src": "audio/ifyouredown.m4a"
                }
            ]
        }
    }
};