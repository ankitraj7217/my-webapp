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

const Home = () => {
  const socialMedia = [
    {
      name: "Github",
      link: "https://github.com/ankitraj7217",
      icon: "github",
    },
    {
      name: "LinkedIn",
      link: "https://in.linkedin.com/",
      icon: "linkedin",
    },
  ];

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quod
          itaque aut sunt reiciendis amet laboriosam eum incidunt recusandae
          aliquid culpa explicabo magni, corporis consequatur molestias quam
          impedit ipsam officiis?
        </HomePTag>
        <HomeDivSMTag>
          {socialMedia.map((item, idx) => {
            const SMIcon = item.icon;
            return (
              <HomeSMIcTag key={idx} color="#0ef" $index={idx}>
                <i className={`bx bxl-${SMIcon}`}></i>
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
