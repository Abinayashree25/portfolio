import Abi from "./Project.module.css";
import picture1 from "../assets/e-commerce.jpeg";
import picture2 from "../assets/native.jpeg";
import picture3 from "../assets/portolioweb.jpeg";

const Project = () => {

const projectData = [
  {
    id: 1,
    image: picture1,
    category: "Web Development",
    title: "E-Commerce Website",
    description:
      "Developed a responsive e-commerce website using HTML and CSS.",
    live: "https://e-commercewebsite01.netlify.app/",
    github: "https://github.com/Abinayashree25/demo"
  },
  {
    id: 2,
    image: picture2,
    category: "Web Development",
    title: "Native Website",
    description:
      "Built a responsive native website using HTML, CSS, and JavaScript.",
    live: "https://native-25.netlify.app/",
    github: "https://github.com/Abinayashree25/native"
  },
  {
    id: 3,
    image: picture3,
    category: "Web Development",
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website using React.js.",
    live: "https://portfolio-nine-ashen-wijp6dlbjh.vercel.app/",
    github: "https://github.com/Abinayashree25/portfolio"
  }
];

return (
  <div className={Abi.project} id="Project">
    <h1 className={Abi.projectTitle}>Projects</h1>

    {projectData.map((project) => (
      <div className={Abi.projectCard} key={project.id}>

        <div className={Abi.projectImage}>
          <img src={project.image} alt={project.title} />
        </div>

        <div className={Abi.projectContent}>
          <h4>{project.category}</h4>
          <h2>{project.title}</h2>

          <p>{project.description}</p>

          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>

          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className={Abi.githubBtn}>GitHub</button>
          </a>

        </div>

      </div>
    ))}
  </div>
);
};

export default Project;
