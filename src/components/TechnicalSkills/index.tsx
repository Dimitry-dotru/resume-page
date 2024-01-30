import Section from "../Section";
import TechskillsIcon from '../../assets/icons/tech-skills-icon.svg';


interface TechnicalSkillsProps {
  skills: {
    title: string;
    level: number
  }[]
}

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({
  skills
}) => {
  return <Section
    title="Technical Skills"
    border={false}
    titleIcon={TechskillsIcon}>
    {skills.map((el, idx) => {
      const key = idx + (new Date().getMilliseconds() + new Date().getSeconds());
      return <div key={key} className="flex items-center">
        <p className="flex-auto text-[16px] font-bold">{el.title}</p>
        <div className="w-auto flex w-full justify-between mb-3 min-w-[215px] max-w-[250px]">
          {(() => {
            const temp = [];
            for (let i = 1; i <= 10; i++) {
              const key = i + (new Date().getMilliseconds() + new Date().getSeconds());
              temp.push(<p key={key} className={`w-4 h-4 ${i <= el.level ? "bg-red-primary" : "bg-black"} rounded-full`}></p>)
            }
            return temp;
          })()}
        </div>
      </div>
    })}
  </Section>
}

export default TechnicalSkills;