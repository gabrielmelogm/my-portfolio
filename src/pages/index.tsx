import styles from "./App.module.scss"
import Head from 'next/head'

import { Perfil } from "../components/Perfil"
import { SkillsCard } from "../components/SkillsCard"
import { Technologies } from "../components/Cards"
import { GitHubCard } from "../components/GitHubCard"

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>Portifólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sideContent}>
        <Perfil
          urlImageProps={{
            urlImage: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}.png`,
            altImage: "Imagem de perfil"
          }}
          nameUser="Gabriel Melo Gonçalves"
          office="Full Stack Developer"
        />
        <SkillsCard />
        <Technologies 
          technologies={{
            name: ["JavaScript", "ReactJs", "NodeJs","MySQL", "GitHub", "Docker", "HTML", "CSS"]
          }} 
        />
      </div>
      <div className={styles.gitContent}>
        <GitHubCard user={`${process.env.NEXT_PUBLIC_GITHUB_USER}`} />
      </div>
    </div>
  )
}
