import cameraIcon from "../assets/Iconos/camera.svg";
interface Props {
  main: boolean;
  image: string;
}

export const ProfileIcon = ({ main, image }: Props) => {
  return (
    <div className="flex justify-center mt-5">
      <div className="relative">
        <img className="w-36 h-36 -z-1" src={image}></img>
        {main ? (
          <div className="bg-white rounded-full border-4 border-primary absolute bottom-1 p-2 right-3 z-5">
            <img src={cameraIcon} alt="Icono de cámara" className="w-3 h-3" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
