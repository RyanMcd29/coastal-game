export default function Credits({ setPage }) {
    return (
        <div className="stack sm:p-0 sm:m-0 md:p-6 md:m-2 w-full m-black">
            <div className="bg-white border-black border-4 text-black w-3/5 max-sm:w-full text-center p-6 rounded-sm">
                <h3 className="text-4xl font-bold mb-4">Credits</h3>
                <p className="mb-4">
                    This educational interactive game was developed by NAME as part of Assignment 2 for OCEN1001 (Global Oceans Challenges) at the University of Western Australia.
                </p>
                <p className="mb-4">
                    The game aims to help Year 12 high school students understand the global oceans challenges of coastal protection and ecosystem conservation. Teacher instructions are provided separately. 
                </p>
                <p>Images generated using SoraAi by OpenAi</p>
            </div>
            <button
                className="btn btn-secondary"
                onClick={() => setPage('start')}
            >
                Back to Start
            </button>
        </div>
    );
}