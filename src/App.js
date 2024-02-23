import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';


const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    // Load playlist from local storage
    const savedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    setPlaylist(savedPlaylist);

    // Load last playing audio file
    const lastPlayedTrackIndex = parseInt(localStorage.getItem('currentTrackIndex')) || 0;
    setCurrentTrackIndex(lastPlayedTrackIndex);
  }, []);

  useEffect(() => {
    // Save playlist to local storage
    localStorage.setItem('playlist', JSON.stringify(playlist));
    // Save current track index to local storage
    localStorage.setItem('currentTrackIndex', currentTrackIndex.toString());
  }, [playlist, currentTrackIndex]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newPlaylist = [...playlist];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newPlaylist.push(URL.createObjectURL(file));
    }
    setPlaylist(newPlaylist);
  };

  const handleTrackEnded = () => {
    if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '150px auto', padding: '20px', backgroundColor:'#99ffff'}}>
      <h1 style={{ textAlign: 'center', color:'red' }}>Audio Player</h1>
      <div>
        <input type="file" accept="audio/mp3" multiple onChange={handleFileUpload} style={{ marginBottom: '10px', color:'green'  }} />
        <h2>Playlist</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {playlist.map((track, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>
              {index === currentTrackIndex ? <strong>{track}</strong> : track}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 style={{ textAlign: 'center' ,color:'red',}}>Now Playing</h2>
        <AudioPlayer src={playlist[currentTrackIndex]} onEnded={handleTrackEnded} />
        


      </div>
    </div>
  );
};

export default App
