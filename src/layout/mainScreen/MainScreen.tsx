import { Bell, CircleHelp, ContactRound, ListOrdered, MessagesSquare, PieChart, Settings, Workflow } from "lucide-react";
import styles from "./styles.module.css";
import { DropDownMenu } from "./components/dropDownMenu";
import MoreItensMenu from "./components/MoreItensMenu";

export function MainScreen() {
  return (
    <div className={styles.contentElement}>

      <header className={styles.headerElement}>
        <div>
          <a href="#">
            <img
              src="/logo.webp"
              alt="Nome da empresa"
              className={styles.imgElement}
            />
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

      <aside className={styles.asideMenu}>
        <nav>
          <ul className={styles.list}>
            <li>
              <a href="">
                <PieChart />
                Dashboard
              </a>
            </li>

            <li>
              <a href="">
                <MessagesSquare />
                Conversas
              </a>
            </li>

            <li>
              <a href="">
                <ContactRound />
                Contatos
              </a>
            </li>
            <MoreItensMenu  title="Administração">
              <li>
                <a href="">
                  <Settings />
                  Conexões
                </a>
              </li>

              <li>
                <a href="">
                  <ListOrdered />
                  Filas
                </a>
              </li>

              <li>
                <a href="">
                  <Workflow />
                  Integrações
                </a>
              </li>
            </MoreItensMenu>
          
          </ul>
        </nav>
      </aside>

      <main className={styles.mainContentElement}>
      </main>
    </div>
  );
}
