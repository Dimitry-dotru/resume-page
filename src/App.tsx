import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import UserDatesInfo from './components/UserDatesInfo';
import TechnicalSkills from './components/TechnicalSkills';
import StrokedPic from './components/StrokedPicture';
import SocialLinks from './components/SocialLinks';
import LanguagesList from './components/LanguagesList';
import AvatarIMG from './assets/images/avatar.jpg'
import TgIcon from './assets/icons/telegram-icon.svg';
import GithubIcon from './assets/icons/github-ico.svg';
import LinkedInIcon from './assets/icons/linkedin-ico.svg';
import GraduationCapIcon from './assets/icons/graduation-cap-duotone-svgrepo-com.svg';
import Workexpicon from './assets/icons/work-exp-icon.svg';
import PhoneIcon from './assets/icons/phone-icon.svg';
import MailIcon from './assets/icons/mail-icon.svg';

function App() {

  return (
    <div className="w-screen bg-[#383838] absolute">
      <div className="w-full flex min-w-[500px] max-w-[1000px] relative mx-auto min-h-[300px] bg-white-main mt-[0px]">
        <div className="w-[40%] py-[60px] px-[30px] flex flex-col bg-red-primary gap-y-10">
          <div className="flex justify-center flex-col items-center">
            <StrokedPic image={AvatarIMG} />
            <p className="mt-4 text-[28px] font-medium uppercase text-center">Dmytro <span className="font-semibold">Shumskyi</span></p>
            <p className="text-white-main uppercase text-[20px] font-light">Frontend developer</p>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-5 min-w-[250px] max-[700px]:grid-cols-1">
            {/* socials */}
            <SocialLinks
              width="30px"
              socialLinkItem={[
                {
                  image: TgIcon,
                  title: "Telegram",
                  link: "https://t.me/dmitro_fewd"
                },
                {
                  image: LinkedInIcon,
                  title: "LinkedIn",
                  link: "https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%88%D1%83%D0%BC%D1%81%D0%BA%D0%B8%D0%B9-52ba821b5/"
                },
                {
                  image: GithubIcon,
                  title: "GitHub",
                  link: "https://github.com/Dimitry-dotru"
                }
              ]}
            />
          </div>
          <div className="flex flex-col gap-y-3 font-bold">
            {/* phone number */}
            <a href="tel:+380683331767" className="flex gap-x-3 items-center">
              <div className="w-[20px] h-[20px]">
                <img src={PhoneIcon} alt="phone" />
              </div>
              +380683331767
            </a>
            <a href="mailto:ejedima260@gmail.com" className="flex gap-x-3 items-center">
              <div className="w-[20px] h-[20px]">
                <img src={MailIcon} alt="phone" />
              </div>
              ejedima260@gmail.com
            </a>
          </div>
          <div className="h-[2px] w-[92%] bg-black mx-auto" />
          <div className="gap-y-3">
            <p className="text-white-main uppercase text-[16px] font-semibold mb-2">Languages</p>
            <LanguagesList
              languageList={[
                {
                  title: "English",
                  level: 70
                },
                {
                  title: "Russian",
                  level: 100
                },
                {
                  title: "Ukrainian",
                  level: 100
                }
              ]}
            />
          </div>
        </div>
        <div className="w-[60%] py-[60px] px-[30px]">
          <UserDatesInfo
            title="Education"
            titleIcon={GraduationCapIcon}
            points={[
              {
                period: "2020-2025",
                title: "Kharkiv Politechnical Institute",
                description: "specialization of Computer Science"
              },
              {
                period: "2021-2022",
                title: "Lemon School, Kharkiv",
                description: "Course of Front-end"
              },
              {
                period: "2022-2023",
                title: "Hillel IT School",
                description: "Course of JS and React.js"
              }
            ]}
          />
          <UserDatesInfo
            title="Work experience"
            titleIcon={Workexpicon}
            points={[
              {
                period: "2021-now",
                title: "Lemon School",
                description: "Front-end course menthor"
              },
              {
                period: "2022-now",
                title: "Freelance",
                description: ""
              },
              {
                period: "1 June 2022-30 August 2022",
                title: "'Team.me'",
                description: "Worked for 3 month in foreign company as a front-end freelancer"
              },
            ]}
          />
          <TechnicalSkills
            skills={[
              {
                title: "Html5",
                level: 9
              },
              {
                title: "CSS3",
                level: 8
              },
              {
                title: "JavaScript",
                level: 9
              },
              {
                title: "Jquery",
                level: 9
              },
              {
                title: "React.js and other",
                level: 8
              },
              {
                title: "Gulp",
                level: 6
              },
              {
                title: "Git",
                level: 7
              },
              {
                title: "Node.js",
                level: 8
              },
              {
                title: "Tailwind",
                level: 8
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
