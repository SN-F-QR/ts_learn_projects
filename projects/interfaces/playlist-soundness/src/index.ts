// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

export interface Song {
	artist: string | Array<string>;
	length: number;
	name: string;
	type: "song";
}

export interface Album {
	type: "album";
	songs: Array<Song>;
}

export interface PlayList {
	type: "playlist";
	resolve(): Array<Song>;
}

export type Disc = Song | Album | PlayList;

export interface ArtistSong {
	[i: string]: Array<string>;
}

export interface GroupPlayList {
	artists: ArtistSong;
	songs: Array<string>;
	time: number;
}

export function unrollPlaylist(items: Disc[]): GroupPlayList {
	let groupPlaylist: GroupPlayList = {
		artists: {},
		songs: [],
		time: 0,
	};

	const extractSong = function (song: Song) {
		let artist: string[];
		if (typeof song.artist === "string") {
			artist = [song.artist];
		} else {
			artist = song.artist;
		}
		// handle artists
		for (const artistName of artist) {
			if (artistName in groupPlaylist.artists) {
				groupPlaylist.artists[artistName].push(song.name);
			} else {
				groupPlaylist.artists[artistName] = [song.name];
			}
		}

		groupPlaylist.songs.push(song.name);
		groupPlaylist.time += song.length;
	};

	for (const item of items) {
		switch (item.type) {
			case "song":
				extractSong(item);
				break;
			case "album":
				item.songs.forEach(extractSong);
				break;
			case "playlist":
				item.resolve().forEach(extractSong);
				break;
		}
	}

	return groupPlaylist;
}
