import React from 'react';
import { useState, useEffect} from 'react';
import Scenario from './scenario';
import GameEnd from './game-end'
import scenarios from '../app/scenarios.json';

export default function Game({ setPage }) {

    const [path, setPath] = useState('')
    const scenario = scenarios.layers[path.length]?.[path]
    const [outcome, setOutcome] = useState('')

    return (
        <div className="stack sm:p-0 sm:m-0 md:p-6 md:m-2 m-black">
            {scenario ?
                <Scenario scenario={scenario} path={path} setPath={setPath} outcome={outcome} setOutcome={setOutcome}/> :
                <GameEnd path={path} setPage={setPage} outcome={outcome}/>
            }
            <button
                className="btn btn-secondary"
                onClick={() => setPage('start')}
            >
                Back to Start
            </button>
        </div>
    );
}