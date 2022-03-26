import { ReactElement } from "react"
import styles from "./styles.module.scss"

type SkillsCardProps = {
  skills: {
    icon?: ReactElement
    information: string
    link?: string
  }[]
}

const Skills = (props: SkillsCardProps) => {
  const { skills } = props

  return (
    <div className={styles.SkillsContent}>
      <ul className={styles.ListSkills}>
        {
          skills.map((item, index) => {
            return (
              <li className={styles.ItemSkills} key={index}>
                <span className={styles.Icon}>{item.icon}</span>
                <a 
                  href={(item.link) ? item.link : ``}
                  rel="noreferrer"
                  target={(item.link) ? "_blank" : "_self"}
                >
                <span className={styles.Information}>{item.information}</span></a>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

type TechnologiesCardProps = {
  technologies: {
    name: string[]
  }
}

const Technologies = (props: TechnologiesCardProps) => {
  const { technologies } = props
  
  return (
    <div className={styles.contentTechnologies}>
      <p className={styles.Title}>Tecnologias</p>
      <div className={styles.contentList}>
        <ul className={styles.List}>
          {
            technologies.name.map((techname, index) => {
              return (
                <div className={styles.contentCard} key={index}>
                  <li className={styles.techText}>
                    {techname}
                  </li>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export { Skills, Technologies }
