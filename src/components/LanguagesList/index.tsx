import './language-list.css';

interface LanguageListProps {
  languageList: {
    title: string;
    level: number;
  }[];
}
// сделать так чтобы при наведении показывало возле курсора окошко с тем какой это уровень языка

const LanguagesList: React.FC<LanguageListProps> = ({
  languageList
}) => {
  return <div>
    {languageList.map((el, idx) => {
      const key = idx + (new Date().getMilliseconds() + new Date().getSeconds());


      return <div
        key={key}
        className="flex relative items-center gap-x-6 cursor-pointer language-level-container">
        {(() => {
          let levelName;
          switch (true) {
            case el.level <= 15:
              levelName = "Beginner";
              break;
            case el.level <= 30:
              levelName = "Pre-intermediate";
              break;
            case el.level <= 60:
              levelName = "Intermediate";
              break;
            case el.level <= 75:
              levelName = "Upper-Intermediate";
              break;
            case el.level <= 85:
              levelName = "Advanced";
              break;
            default:
              levelName = "Native";
          }

          return <div
            className={`absolute dropdown-lang-list text-white-main bg-black`}>{levelName}</div>
        })()}
        <div className="w-[50%] font-bold text-[14px]">{el.title}</div>
        <div className="w-full h-[10px] w-full rounded-[10px] border-[2px] relative">
          <div style={{
            width: `${el.level}%`
          }} className="absolute bg-black h-full" />
        </div>
      </div>
    })}
  </div>
}

export default LanguagesList;

