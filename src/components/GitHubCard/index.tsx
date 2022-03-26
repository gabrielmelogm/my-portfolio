import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { FiFolder } from "react-icons/fi"
import { AiOutlineStar } from "react-icons/ai"
import { BiGitRepoForked } from "react-icons/bi"
import { SiJavascript, SiTypescript, SiPython, SiCss3, SiHtml5, SiLinux } from "react-icons/si"

type DataProps = {
  name: string
  description: string
  stargazers_count: number
  forks: number
  language: string
  html_url: string
}

type CardProps = {
  user: string
}

const GitHubCard = (props: CardProps) => {
  const { user } = props
  const [ dataRepositories, setDataRepositories ] = useState<DataProps[]>([])

  let icon = <></>

  
  let DataFilter = []
  let newData = {}

  async function getRepositories() {
    const url = `https://api.github.com/users/${user}/repos`
    const { data } = await axios.get(url)
    data.forEach((repos: DataProps) => {
      newData = {
        name: repos.name,
        description: repos.description,
        stargazers_count: repos.stargazers_count,
        forks: repos.forks,
        language: repos.language,
        html_url: repos.html_url
      }
      DataFilter.push(newData)
      return DataFilter
    })
    setDataRepositories(DataFilter)
  }

  useEffect(() => {
    getRepositories()
  },[])

  return (
    <ul className={styles.List}>
      {
        dataRepositories.map((item, index) => {

          switch (item.language) {
            case 'TypeScript':
              icon = <SiTypescript />
              break
            case 'JavaScript':
              icon = <SiJavascript />
              break
            case 'Shell':
              icon = <SiLinux />
              break
            case 'HTML':
              icon = <SiHtml5 />
              break
            case 'Python':
              icon = <SiPython />
              break
            case 'CSS':
              icon = <SiCss3 />
              break
            default: 
              icon = <></>
              break
          }

          return (
            <a href={`${item.html_url}`} target="_blank" rel="noreferrer" key={index} className={styles.ListItem}>
              <li>
                <div className={styles.titleRepositories}>
                  <FiFolder size={20} />
                  <span className={styles.nameRepositorie}>{item.name}</span>
                </div>
                <p className={styles.Description}>{item.description}</p>
                
                <div className={styles.ContentInfo}>

                  <div className={styles.ContentInfoFirst}>
                    <div className={styles.ContentItems}>
                      <span><AiOutlineStar size={20} /></span>
                      <span>{item.stargazers_count}</span>
                    </div>
                    <div className={styles.ContentItems}>
                      <span><BiGitRepoForked size={20} /></span>
                      <span>{item.forks}</span>
                    </div>
                  </div>

                  <div className={styles.ContentLanguage}>
                    {(item.language) ? icon : <></>}
                    <span>{item.language}</span>
                  </div>
                </div>

              </li>
            </a>
          )
        })
      }
    </ul>
  )
}

export { GitHubCard }
