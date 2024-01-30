import React from "react";
import Section from "../Section";

interface UserDatesInfoProps {
  title: string;
  titleIcon: any;
  points: {
    period: string,
    title: string,
    description: string
  }[]
}

const UserDatesInfo: React.FC<UserDatesInfoProps> = ({
  points,
  titleIcon,
  title
}) => {

  return <Section title={title} titleIcon={titleIcon} >
    {points.map((el, idx) => {
      const key = idx + (new Date().getMilliseconds() * new Date().getSeconds());
      return <div key={key} className="pl-[20px] py-[10px] font-bold flex justify-between relative">
        <div className="absolute bg-white-main border-red-primary border-[2px] w-[7px] h-[7px] translate-x-[-60%] translate-y-[6px] left-0"></div>
        <div className="text-red-primary">
          {el.period}
        </div>
        <div className="ml-[50px] max-w-[250px] w-full">
          <p className="text-red-primary">{el.title}</p>
          <p className="font-semibold">{el.description}</p>
        </div>
      </div>
    })}
  </Section>
};

export default UserDatesInfo;