import styles from "./Container.module.css";
const Container = ({ children }) => {
   const handleclickedbuttons=(event)=>{
     console.log(event.target.value)
  }
  return (
    <div className={styles.container}
    onChange={handleclickedbuttons}
    >{children}
  
    </div>
  )
}

export default Container
