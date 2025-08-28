import Image from "next/image";

export default function Start({ setPage }) {
    return (
        <div 
        className="w-full inline">
             <Image 
                width = {1024}
                height = {1024}
                alt = {'start image'}
                src = "start.png"
                className="w-72 mx-auto"
            />
            <div className="stack flex flex-wrap bg-white p-8 mx-auto border-4 border-black w-3/5 max-sm:w-full">
           
           <h1 className="text-4xl font-bold text-center">Coast Guard</h1>
           <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full">
               <button
                   className="btn btn-primary w-full sm:w-auto bg-blue-500"
                   onClick={() => setPage('game')}
               >
                   Start Game
               </button>
               <button
                   className="btn btn-secondary w-full sm:w-auto bg-cyan-500"
                   onClick={() => setPage('leaderboard')}
               >
                   Leaderboard
               </button>
               <button
                   className="btn btn-primary w-full sm:w-auto bg-pink-500"
                   onClick={() => setPage('credits')}
               >
                   Credits
               </button>
           </div>
        </div>
        
        </div>
    );
}
