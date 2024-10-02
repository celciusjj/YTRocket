import { useState } from "react";
import { ICollaborators } from "../models/profile";

interface Props {
  item: ICollaborators;
}

export const Collaborator = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="gap-2 flex flex-col items-center relative"
    >
      <img className="w-[70px] h-[70px] -z-1" src={item.image}></img>
      <span className="font-main text-sm">{item.name}</span>

      {isHovered && (
        <div className="w-[580px] absolute left-full bottom-5 ml-2 bg-white border rounded shadow-md z-10 flex items-center p-5">
          <div className="flex flex-col items-center mr-10">
            <img
              className="w-[150px] h-[150px] rounded"
              src={item.image}
              alt={item.name}
            />
            <span className="font-main text-sm font-semibold">{item.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-main font-normal mb-2">
              Algunas de sus pistas más notables:
            </span>
            {item.songs?.map((song, index) => (
              <div key={index} className="flex flex-col mb-2">
                <p className="font-semibold">{song.title}</p>
                <p className="text-sm">{song.authors}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
