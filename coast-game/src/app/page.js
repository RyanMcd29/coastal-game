'use client';

import Game from '../Components/game';
import Leaderboard from '../Components/leaderboard';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('start');
  return (    
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      {page === 'start' && (
        <div>
          <h1>Coast Game</h1>
          <button onClick={() => setPage('game')}>Start Game</button>
          <button onClick={() => setPage('leaderboard')}>Leaderboard</button>
        </div>
      )}
      {page === 'game' && (
        <Game setPage={setPage} />
      )}
      {page === 'leaderboard' && (
          <Leaderboard setPage={setPage} />
      )}
    </div>
  );
}
