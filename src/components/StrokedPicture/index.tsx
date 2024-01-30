import cn from "classnames";

interface StrokedPicProps {
  strokeWidth?: string;
  strokeDistance?: string;
  width?: string;
  image: string;
}

const StrokedPic: React.FC<StrokedPicProps> = ({
  strokeWidth,
  strokeDistance,
  width,
  image
}) => {
  // rounded-full ${strokeDistance ? `p-[${strokeDistance}]` : "p-2"} ${strokeWidth ? `border-[${strokeWidth}]` : "border-2"} border-[#000] ${width ? `max-w-[${width}]` : "max-w-[200px]"
  return <div style={{
    width: width ? width : "200px",
    borderWidth: strokeWidth ? strokeWidth : "2px",
    padding: strokeDistance ? strokeDistance : "6px"
  }} className = "border-[#000] rounded-full">
    <div className="flex justify-center w-full overflow-hidden rounded-full">
      {/* <img className={`${ width ? `max-w-[${width}]]` : "max-w-[200px]" } w - full`} src={image} alt="avatar" /> */}
      <img src={image} className="w-full" alt="avatar" />
    </div>
  </div>
}

export default StrokedPic;
