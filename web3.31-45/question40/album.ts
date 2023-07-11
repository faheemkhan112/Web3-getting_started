function make_album(artist: string, title: string, tracks?: number): object {
    let album: object = {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album["tracks"] = tracks;
    }
  
    return album;
  }
  
  // Creating dictionaries representing different albums
  let album1 = make_album("Artist 1", "Album 1");
  let album2 = make_album("Artist 2", "Album 2", 10);
  let album3 = make_album("Artist 3", "Album 3", 15);
  
  // Printing the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  