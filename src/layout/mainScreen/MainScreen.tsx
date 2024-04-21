
import { Bell, CircleHelp } from "lucide-react";
import styles from "./styles.module.css";
import { DropDownMenu } from "./components/dropDownMenu";


export function MainScreen() {
  return (
    <div className={styles.contentElement}>

      <header className={styles.headerElement}>
        
        <div>
          <a href="#">
            <img src="/logo.webp" alt="Nome da empresa" className={styles.imgElement}/>
          </a>
        </div>

        <div>
          <div className={styles.optionsElement}>
            <Bell />
            <CircleHelp />
            <DropDownMenu />
          </div>
        </div>

      </header>

        
        <nav></nav>
        <main></main>
    </div>
  )
}