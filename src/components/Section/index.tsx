interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  titleIcon: any;
  border?: boolean
}

const Section: React.FC<SectionProps> = ({
  titleIcon,
  title,
  children,
  border = true
}) => {


  return <>
    <div className="flex mb-[30px] justify-start items-center">
      <div className="translate-x-[-45%] mr-[15px]">
        <img className="w-[23px]" src={titleIcon} alt="sectionIcon" />
      </div>
      <div className="font-bold text-[18px]">
        {title}
      </div>
    </div>
    <div className={`min-h-[100px] ${border ? "border-l-[2px] border-gray" : ""} text-[12px] mb-10`}>
      {children}
    </div>
  </>;
}

export default Section;
