import noProjectImage from '../assets/no-projects.png';

export default function NoProjectSelected() {
    return (
        <div className="mt-24 text-center w-2/3">
            <img 
            src={noProjectImage} 
            alt="Image of an empty task list"
            className='w-16 h-16 object-contain' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <button>Create new project</button>
            </p>
        </div>
    )
}