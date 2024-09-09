import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        otherClasses={false}
        src="https://avatars.githubusercontent.com/u/126399807?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Batista</strong>
              <time
                className={styles.time}
                dateTime="22/08/2024 16:29:30"
                title="28 de Agosto ás 16:29h"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
