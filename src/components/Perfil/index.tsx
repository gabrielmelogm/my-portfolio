import styles from "./styles.module.scss"

type Props = {
  urlImageProps: {
    urlImage: string
    altImage: string
  }
  nameUser: string
  office: string
}

const Perfil = ({urlImageProps, nameUser, office}: Props) => {
  
  return (
    <div className={styles.content}>
      <img className={styles.Perfil} src={urlImageProps.urlImage} alt={urlImageProps.altImage} />
      <div className={styles.contentText}>
        <p className={styles.UserName}>{nameUser}</p>
        <p className={styles.Office}>{office}</p>
      </div>
    </div>
  )
}

export { Perfil }
