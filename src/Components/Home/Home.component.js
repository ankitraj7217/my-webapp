import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ANkImg from "../../Assets/Images/ank-img.jpg";
import {
  HomeDivSMTag,
  HomeH1Tag,
  HomeH3Tag,
  HomeLeftTag,
  HomePTag,
  HomeRightTag,
  HomeSMIcTag,
  HomeSectionComp,
} from "./Home.styles";
import useScrollEnd from "../../Utils/useScrollEnd";
import { useScrollContext } from "../../Context/ScrollContext/Scroll.provider";

const Home = () => {
  const { scrollEnd, setScrollEnd } = useScrollContext();
  const socialMedia = [
    {
      name: "Github",
      link: "https://github.com/ankitraj7217",
      icon: "github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ankit-r-02b83a168/",
      icon: "linkedin",
    },
    {
      name: "stackoverflow",
      link: "https://stackoverflow.com/users/9774684/kenpachi-zaraki",
      icon: "stack-overflow",
    },
  ];

  useScrollEnd(() => {
    setScrollEnd({ ...scrollEnd, isHome: true });
  });

  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <HomeSectionComp>
      <HomeLeftTag>
        <HomeH3Tag>Hello, This is</HomeH3Tag>
        <HomeH1Tag>Ankit Raj</HomeH1Tag>
        <HomeH3Tag>
          I'm a{" "}
          <span>
            <Typewriter
              words={[
                "Software Engineer",
                "Otaku",
                "IR Enthusiast",
                "Traveller",
              ]}
              cursor
              cursorStyle="|"
              loop={false}
              deleteSpeed={80}
            />
          </span>
        </HomeH3Tag>
        <HomePTag>
          I am a full-stack developer with over 3.5 years of professional
          experience. Throughout my career, I have spearheaded numerous
          projects, serving as the primary liaison for successful project
          deliveries. My expertise spans a wide array of technologies, enabling
          me to adapt swiftly to evolving project requirements. Moreover, I have
          had the privilege of mentoring junior developers, assisting them in
          their journey to master React and other essential skills. Feel free to
          explore my profile below or connect with me on LinkedIn for further
          insights.
        </HomePTag>
        <HomeDivSMTag>
          {socialMedia.map((item, idx) => {
            const SMIcon = item.icon;
            return (
              <HomeSMIcTag key={idx} color="#0ef" $index={idx}>
                <i
                  className={`bx bxl-${SMIcon}`}
                  onClick={() => handleRedirect(item.link)}
                ></i>
              </HomeSMIcTag>
            );
          })}
        </HomeDivSMTag>
      </HomeLeftTag>
      <HomeRightTag>
        <img src={ANkImg} alt="img" />
      </HomeRightTag>
    </HomeSectionComp>
  );
};

export default Home;
