import ERoutes from "../RouterConfig";
import { Project } from "../../../models/Project";
import ActionButton from "./ActionButton";
import { colors } from "../../../datas/ColorTheme";
import styles from "./CardProject.module.css";

export default function CardProject({
  project,
  displayedInHomePage,
}: {
  project: Project;
  displayedInHomePage?: boolean;
}) {
  return (
    <div className={styles["card"]}>
      <div className={styles["foreground-style"]}>
        <div className={styles["top-section"]}>
          <div className={styles["title"]}>
            <div className={styles["folder-effect"]} />
            <h2>{project.name} </h2>
          </div>

          <div className={styles["technologies"]}>
            {project.technologies.map((tech, index) => (
              <img src={"./Logos/" + tech} alt={tech} key={index} />
            ))}
          </div>
        </div>

        <div className={styles["presentation_and_image"]}>
          <div className={styles["presentation"]}>
            {project.description}
            <div>
              &#128073; Lien vers le dépôt GitHub :{" "}
              {project.github ? (
                <a href={project.github} target="_blank">
                  {project.github}
                </a>
              ) : (
                <b>Aucun lien...</b>
              )}
              <div className={styles["buttons"]}>
                {project.website && (
                  <ActionButton
                    text="Voir en ligne"
                    color={colors.secondary}
                    textColor={colors.textColor}
                    btnWidth="35%"
                    targetLink={project.website}
                  />
                )}
                {displayedInHomePage && (
                  <ActionButton
                    text="Voir mes projets"
                    color={colors.primary}
                    textColor={colors.background2D}
                    btnWidth="35%"
                    targetTab={ERoutes.PROJECTS}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles["image-container"]}>
            <a href={"./Projects_images/" + project.image} target="_blank">
              <img
                src={"./Projects_images/" + project.image}
                alt={project.name}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
