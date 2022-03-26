import { Skills } from '../Cards';
import Image from "next/image"

import map from "../../assets/map-pin.svg"
import briefcase from "../../assets/briefcase.svg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import mail from "../../assets/mail.svg"

const SkillsCard = () => {
  return (
    <Skills
    skills={[
      {
        icon: <Image src={map} width={24} height={24} alt="Localização" />,
        information: "Brasil"
      },
      {
        icon: <Image src={briefcase} width={24} height={24} alt="Maleta" />,
        information: "Bluemarble"
      },
      {
        icon: <Image src={github} width={24} height={24} alt="Github" />,
        information: "gabrielmelogm",
        link: "https://github.com/gabrielmelogm"
      },
      {
        icon: <Image src={linkedin} width={24} height={24} alt="Linkedin" />,
        information: "gabrielmelogm",
        link: "https://www.linkedin.com/in/gabrielmelogm/"
      },
      {
        icon: <Image src={mail} width={24} height={24} alt="Email" />,
        information: "melogoncalvesbiel@gmail.com"
      }
    ]}
  />
  )
}

export { SkillsCard }
