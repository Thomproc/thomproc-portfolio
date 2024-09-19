import styles from "./HeroSection.module.css";
import Introduction from "./Introduction";
import Space from "./Space";

export default function HeroSection({ in3DWorld }: { in3DWorld: boolean }) {
  return (
    <div
      className={styles["container"]}
      style={
        {
          "--minHeight": in3DWorld ? "180px" : "600px",
          "--minHeightMobile": in3DWorld ? "none" : "350px",
          "--paddingTop": in3DWorld ? "0px" : "8em",
        } as any
      }
      onMouseMove={(e) => {
        const satellites = document.getElementById("satellites")!;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = (e.clientX - width / 2) / width;
        const y = (e.clientY - height / 2) / height;
        satellites.style.transform = `rotateX(${y * -50}deg) rotateZ(${
          x * 40
        }deg)`;
      }}
    >
      <div className={styles["hero-section"]}>
        <div>
          <Introduction />
          <Space />
        </div>
      </div>
    </div>
  );
}