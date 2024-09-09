import { PencilLine } from "phosphor-react";

import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1672957581550-6b37dcdbf6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Image GitHub"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/126399807?v=4" />

        <strong>João Batista</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
