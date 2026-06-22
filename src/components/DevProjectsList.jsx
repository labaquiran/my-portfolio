import placeholderImg from "../assets/placeholder-img.jpg";
import coverClinic from "../assets/cover/cover-clinic.jpg";
import coverArt from "../assets/cover/cover-artstore.jpg";
import coverConstruction from "../assets/cover/cover-construction.jpg";
import coverMovie from "../assets/cover/cover-movie.jpg";
import styles from "./DevProjectsList.module.css";

export default function DevProjectsList() {
  const projects = [
    {
      key: "swift-soap",
      title: "Swift SOAP",
      coverImg: coverClinic,
      link: "https://www.swiftme.jp/",
      tags: ["Next.js", "Typescript", "Supabase"],
    },
    {
      key: "artbili-ecommerce",
      title: "Artbili",
      coverImg: coverArt,
      link: "https://www.artbili.com/",
      tags: ["Next.js", "Stripe"],
    },
    {
      key: "panay-architect-builders",
      title: "Panay Architect Builders",
      coverImg: coverConstruction,
      link: "https://panayarchitectsbuilders.com/",
      tags: ["Wordpress", "Elementor"],
    },
    {
      key: "Movie App",
      title: "Movie App",
      coverImg: coverMovie,
      link: "https://movie-app-kappa-taupe-62.vercel.app/",
      tags: ["Next.js"],
    },
  ];

  return (
    <div className={styles.projectList}>
      {projects.length > 0 ? (
        projects.map((proj) => (
          <div key={proj.title} className={styles.projectCard}>
            <img src={proj.coverImg} alt={proj.title} />
            <div className={styles.cardDetails}>
              <div>
                <p>{proj.title}</p>
                <div className={styles.tags}>
                  {proj.tags.map((tag) => (
                    <span className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a href={proj.link} target="_blank">
                Visit Website
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>Developments project ongoing.</p>
      )}
    </div>
  );
}
