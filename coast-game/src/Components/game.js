import React from 'react';
import { useState, useEffect} from 'react';
import Scenario from './scenario';
import GameEnd from './game-end'
import scenarios from '../app/scenarios.json';

export default function Game({ setPage }) {

    const [path, setPath] = useState('')
    const scenario = scenarios.layers[path.length]?.[path]

    return (
        <div className="flex flex-col items-center gap-6">
            {scenario ? 
                <Scenario scenario={scenario} path={path} setPath={setPath}/> :
                <GameEnd path={path} setPage={setPage}/>
            }
            <button
                className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
                onClick={() => setPage('start')}
            >
                Back to Start
            </button>
        </div>
    );
}