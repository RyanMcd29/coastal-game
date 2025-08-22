import React from 'react';
import { useState } from 'react';
import Scenario from './scenario';
import scenarios from '../app/scenarios.json';

export default function Game({ setPage }) {
    const [path, setPath] = useState('');
    return (
        <div className="flex flex-col items-center gap-6">
            <Scenario
                scenarios={scenarios}
                path={path}
                setPath={setPath}
            />
            <button
                className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
                onClick={() => setPage('start')}
            >
                Back to Start
            </button>
        </div>
    );
}