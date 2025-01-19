import { getTechnologyDetails } from '@/utils/index'

export default function ModalProject({isOpen, project, onClose}) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
    className={`fixed transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} inset-0 flex items-center 
  justify-center bg-black bg-opacity-50 z-50`}
    onClick={handleBackgroundClick}>
    <div className="flex gap-2 z-[1000] items-center overflow-y-scroll justify-between bg-gray-600 p-6 rounded-lg shadow-lg w-[85%] min-h-[500px] max-h-[500px]">
      <div className="flex flex-col items-center w-fit px-3 py-3 justify-center gap-2">
        <img src={project.img} alt={project.name} className="w-[100%] h-auto max-h-[400px] rounded-lg" />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{project.name}</h1>
          <p className="text-[11px] text-black">{project.description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around">
        <p>
          Link de acesso:{' '}
          <span>
            {project.link ? (
              <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            ) : (
              <span className="text-red-500">Fora do ar por enquanto..</span>
            )}
          </span>
        </p>
        <p>
          Link do repositório:{' '}
          <span>
            {project.repo ? (
              <a href={project.repo}  className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                {project.repo}
              </a>
            ) : (
              <span className="text-red-500">Fora do ar por enquanto..</span>
            )}
          </span>
        </p>

            <div>
              <p>Tecnologias: </p> 
              <div className="grid grid-cols-3 gap-2">
            {project.stacks.map((tech) => {
              const { name, icon } = getTechnologyDetails(tech);
              return (
                <div
                  key={tech}
                  className="flex flex-col items-center justify-center gap-2 text-center"
                >
                  <div className='gap-2 w-[42px]'>{icon}</div>
                  <p className="text-sm font-semibold">{name}</p>
                </div>
              );
            })}
          </div> 
            </div>
      </div>
    </div>
  </div>
  )
}
