import styles from "./Avatar.module.css";

export function Avatar({ otherClasses = true, src, alt }) {
  return (
    <>
      <img
        className={otherClasses ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt={alt}
      />
    </>
  );
}
