interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details:Details;

}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    }
}

const {song,details} = audioPlayer;
const { author } = details;

/* console.log(song,author) */


const [p1,p2, trunks]: string[] = ["Goku","Vegeta","Trunks"];

console.log(p1, trunks)

export {}