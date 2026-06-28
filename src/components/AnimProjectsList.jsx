import styles from "./AnimProjectsList.module.css";

export default function AnimProjectsList() {
  const projects = [
    { id: 1, src: `/videos/squirrel_jump_anim.mp4` },
    { id: 2, src: `/videos/robot_arm_anim.mp4` },
    { id: 3, src: `/videos/wave-principle_anim.mp4` },
    { id: 4, src: `/videos/vanilla-walk_side_anim.mp4` },
    { id: 5, src: `/videos/personality-walk_anim.mp4` },
    { id: 6, src: `/videos/stewart_head-turn_anim.mp4` },
  ];
  return (
    <div>
      {projects.length === 0 && (
        <p>
          Animation projects will be displayed here. Please check back later.
        </p>
      )}

      {projects.length > 0 &&
        projects.map((project) => (
          <div key={project.id}>
            <video
              src={project.src}
              className={styles.video}
              controls
              autoPlay
              muted
              loop
            />
          </div>
        ))}
    </div>
  );
}
