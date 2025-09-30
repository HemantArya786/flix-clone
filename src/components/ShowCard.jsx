import HoverCard from "./HoverCard";
import { ShowProvider } from "../contexts/ShowContext";
import { useShow } from "../hooks/useShow";

const ShowCardContent = ({customImageHeight, isNumeric}) => {
  const {
    data,
    isHovered,
    cardRef,
    handleMouseEnter,
    handleMouseLeave
  } = useShow();


console.log(customImageHeight, "custom")

  return (
    <div className={`${isNumeric ? 'w-[180px]' : 'w-[320px]'} h-[200px] relative`}>
      {/* Main Image */}
      <div
        ref={cardRef}
        className="relative overflow-visible rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={data?.image}
          alt={data?.title}
          className={`w-full ${customImageHeight ? '' : 'h-48'} object-cover rounded-lg`}
          style={customImageHeight ? { height: `${customImageHeight}px` } : {}}
        />

        {data?.isNew && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Recently added
          </div>
        )}

        {/* Hover Overlay Card */}
        {isHovered && <HoverCard />}
      </div>
    </div>
  );
};

const ShowCard = ({data, customImageHeight, isNumeric }) => {
    console.log(data,customImageHeight, "cih")
  return (
    <ShowProvider data={data}>
      <ShowCardContent customImageHeight={customImageHeight} isNumeric={isNumeric} />
    </ShowProvider>
  );
};

export default ShowCard;