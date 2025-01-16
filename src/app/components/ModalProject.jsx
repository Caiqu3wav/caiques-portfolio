import { useState } from "react"
import Image from "next/image";

export default function modalProject(isOpen, project) {
  if (!isOpen) return null;

  return (
    <div className={`fixed transition-opacity duration-500 opacity-0 ${isOpen ? 'opacity-100' : ''} inset-0 flex items-center 
    justify-center bg-black bg-opacity-50 z-50`}>
      <div className=" flex gap-2 items-center justify-between bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center w-fit px-3 py-3 justify-center gap-2">
          <Image src={project.img} alt={project.name} width={200} height={200} />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">{project.name}</h1>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
          <div className="flex flex-col items-center justify-around">

            <p>Link de acesso: <span>{project.link ? <a href={project.link}>{project.link}</a> : (
              <span className="text-red-500">Fora do ar por enquanto..</span>
            )}</span>
                </p>

                <p>Link do repositório: <span>{project.repo ? <a href={project.repo}>{project.repo}</a> : (
              <span className="text-red-500">Fora do ar por enquanto..</span>
            )}</span>
                </p>
          </div>
      </div>
    </div>
  )
}
