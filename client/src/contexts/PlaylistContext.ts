import { createContext } from 'react';

interface PlayList {
  tracks: any[]
}

const PlaylistContext = createContext<PlayList>({
  tracks: null,
});

export default PlaylistContext;
