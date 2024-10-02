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
      <span className="font-main text-sm text-deep">{item.name}</span>

      {isHovered && (
        <div className="w-[580px] absolute left-full bottom-1 ml-2 bg-[#EFF4FF] border rounded shadow-md z-10 flex items-center p-5">
          <div className="flex flex-col items-center mr-10">
            <img
              className="w-[150px] h-[150px] rounded"
              src={item.image}
              alt={item.name}
            />
            <span className="text-deep-dark font-main text-lg font-semibold mt-2">
              {item.name}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-main font-normal mb-2">
              Algunas de sus pistas más notables:
            </span>
            {item.songs?.map((song, index) => (
              <div key={index} className="flex flex-col mb-2">
                <p className="font-[400] text-deep-dark">{song.title}</p>
                <p className="text-sm font-[300]">{song.authors}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
