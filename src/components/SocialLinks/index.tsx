import StrokedPic from "../StrokedPicture";

interface SocialLinksProps {
  socialLinkItem: {
    image: string;
    title: string;
    link: string;
  }[];
  width?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  socialLinkItem,
  width
}) => {
  return <>{socialLinkItem.map((el, idx) => {
    const key = idx + (new Date().getMilliseconds() + new Date().getSeconds());
    return <a target="_blank" key={key} href={el.link} className="w-full inline-block flex items-center">
    <StrokedPic image={el.image} width={width ? width : "40px"} strokeWidth="2px" strokeDistance='3px'/>
    <p className="ml-[8px]">{el.title}</p>
  </a>
  })}</>
};

export default SocialLinks;

