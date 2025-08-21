'use client';
import Start from '@/Components/start';
import Game from '../Components/game';
import Leaderboard from '../Components/leaderboard';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('start');
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      {page === 'start' && 
        <Start setPage={setPage} />
      }
      {page === 'game' && (
        <Game setPage={setPage} />
      )}
      {page === 'leaderboard' && (
        <Leaderboard setPage={setPage} />
      )}
    </div>
  );
}
