import Section from "../components/basic-components/Section";
import ProjectCard, {
  ProjectCardProps,
} from "../components/pages/projects/Project-card";

export default function Projects() {
  const projectsData: ProjectCardProps[] = [
    {
      title: "Garage Website",
      shortDescription: "Complete website of a Spanish garage company",
      longDescription:
        'Complete website of a real garage company in Spain. The web includes the "About", "Services", "Contact" and "Offers" sections.</br></br>The project was developed with React and Python (Flask). It can be visited <a  href=\'https://pabloff95.github.io/garage/\' class="underline text-primary-dark hover:text-primary-contrast w-fit" target="_blank" >here</a>.',
      imgSrc: "images/pages/projects/garage.jpg",
      imgAlt: "Garage website landing page",
      githubUrl: "https://github.com/pabloff95/garage",
    },
    {
      title: "Metadata Manager",
      shortDescription:
        "Web-application to read and update the metadata of any file",
      longDescription:
        "This project allows the user to update a file and read all the associated metadata. Then the user can update this metadata and download the new file with the changed data.</br></br>The project was developed with React (TypeScript) and Python (Flask).",
      imgSrc: "images/pages/projects/metadata.jpg",
      imgAlt: "Example of a file metadata",
      githubUrl: "https://github.com/pabloff95/metadata",
    },
    {
      title: "The GuessGame",
      shortDescription:
        'Adaptation of the boardgame "Mastermind" with an online players score tracker',
      longDescription:
        'The GuessGame is an online version of the boardgame "Mastermind". The app allows the user to play as a registered user. Then, at the end of each game the user score is saved and used to keep track of his games and to create a global rank of all the players.</br></br> This application was built using using native JavaScript and with PHP and MySQL in the back end.',
      imgSrc: "images/pages/projects/guessgame.jpg",
      imgAlt: "The GuessGame project board view",
      githubUrl: "https://github.com/pabloff95/The-GuessGame",
    },
    {
      title: "Weather App",
      shortDescription:
        "Simple weather application to consult the forecast of any town",
      longDescription:
        "This project allows the user to check the wheather information of any town, using the OpenWeather Map API.</br></br> This application was developed using native JavaScript.",
      imgSrc: "images/pages/projects/weather-app.jpg",
      imgAlt: "Application to consult the weather forecast of any town",
      githubUrl: "https://github.com/pabloff95/Weather-App",
    },
    {
      title: "Finances Manager",
      shortDescription:
        "Finance app to record expenses, income and investments and keep track of their evolution",
      longDescription:
        "Application that allows to monitore expenses, income and investments. The user can perform any CRUD operation with their data. Furthermore, the user can see an overview of the finances.</br></br> This application was built using using native JavaScript - with CanvasJS for the charts - and with PHP and MySQL in the back end.",
      imgSrc: "images/pages/projects/finance-manager.jpg",
      imgAlt: "Finances Manager project image",
      githubUrl: "https://github.com/pabloff95/Finance-Manager",
    },
    {
      title: "Research study",
      shortDescription:
        "Data analysis study on Plant Ecology using Integral Projection Models",
      longDescription:
        'Data analysis using Integral Projection Models (IPMs) - in R - to model the impacts of global warming on a forest understorey plant population.</br></br>The study and its results can be found <a  href=\'https://doi.org/10.1111/plb.13418\' class="underline text-primary-dark hover:text-primary-contrast w-fit" target="_blank" >here</a>.',
      imgSrc: "images/pages/projects/research-study.jpg",
      imgAlt: "Research study project image",
    },
    {
      title: "Calculator",
      shortDescription: "Application to perform basic math operations",
      longDescription:
        "This application is a calculator developed with React.</br></br>It can perform basic operations. The application keeps the records of all the operations performed in a side panel.",
      imgSrc: "images/pages/projects/calculator.jpg",
      imgAlt: "Calculator project image",
      githubUrl: "https://github.com/pabloff95/React-Calculator",
    },
    {
      title: "Snake Game",
      shortDescription: "Web adaptation of the classic snake game",
      longDescription:
        "This project is a web version of the classic snake game.</br></br>The project was completely developed with JavaScript vanilla, using a canvas element as the main gameboard.",
      imgSrc: "images/pages/projects/snake-game.jpg",
      imgAlt: "Snake Game project image",
      githubUrl: "https://github.com/pabloff95/Snake-Game",
    },
  ].map((el) => ({
    ...el,
  }));

  return (
    <>
      <Section title="Projects">
        <div className="w-full my-4 flex flex-wrap justify-center gap-y-8">
          {projectsData.map((project: ProjectCardProps, index) => (
            <ProjectCard {...project} key={`project-${index}`} />
          ))}
        </div>
      </Section>
    </>
  );
}
