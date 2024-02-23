                                      *Explanation about the App.js and AudioPlayer.jsx file*

1. The App component is the main component of the application. It manages the state for the playlist and the current track index using the useState hook.
2. Two 'useEffect' hooks are used:

                *The first one loads the playlist and current track index from local storage when the component mounts.
                *The second one saves the playlist and current track index to local storage whenever they change.
4. The 'handleFileUpload' function is triggered when the user uploads audio files. It creates object URLs for each file and adds them to the playlist.
5. The 'handleTrackEnded' function is triggered when a track ends. If the current track is not the last track in the playlist, it moves to the next track.
6. JSX elements are used to structure the UI:
 
                *A file input element allows users to upload audio files.
                *The playlist is rendered as an unordered list (ul) with each track represented as a list item (li).
                *The currently playing track is highlighted using the strong tag.
                *The AudioPlayer component renders an HTML audio player with controls, using the currently selected track as the audio source.
