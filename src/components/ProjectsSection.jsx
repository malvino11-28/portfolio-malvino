import { ExternalLinkIcon } from "lucide-react";
import { GithubIcon } from "./GithubIcon.jsx";

const projects = [
  // EXEMPLOS FEITOS COM CODEX
  {
    id: 1,
    title: "API com MySQL",
    description:
      "API REST desenvolvida com express para gerenciamento de produtos com banco de dados MySQL",
    image: "/projects/exemplo.png",
    tags: ["API", "MySQL", "Express"],
    deployURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Simulador de Trajetória",
    description:
      "Aplicação web que calcula e exibe a trajetória de um projétil com base em velocidade e ângulo, integrando frontend em React com backend em Flask",
    image: "/projects/exemplo.png",
    tags: ["React", "Flask", "API", "Recharts"],
    deployURL: "#",
    githubURL: "#",
  },
  {
    id: 3,
    title: "Portfólio Pessoal",
    description:
      "Portfólio desenvolvido com React e Tailwind CSS para apresentação de projetos, habilidades e contato profissional",
    image: "/projects/exemplo.png",
    tags: ["React", "Tailwind", "Vite"],
    deployURL: "#",
    githubURL: "#",
  },
  {
    id: 4,
    title: "Sistema de Tarefas (To-Do)",
    description:
      "Aplicação para gerenciamento de tarefas com persistência em localStorage, permitindo criação, edição e exclusão de tarefas",
    image: "/projects/exemplo.png",
    tags: ["JavaScript", "CRUD", "LocalStorage"],
    deployURL: "#",
    githubURL: "#",
  },
  {
    id: 5,
    title: "Simulador de Foguete PET",
    description:
      "Simulador interativo que calcula parâmetros de lançamento de foguetes PET com base em variáveis físicas como pressão, ângulo e propelente",
    image: "/projects/exemplo.png",
    tags: ["JavaScript", "Simulação", "Física"],
    deployURL: "#",
    githubURL: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Melhores <span className="text-primary">Projetos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Aqui estão alguns dos meus projetos desenvolvidos com atenção aos
          detalhes e performance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-100"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border bg-primary/20 rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.deployURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                    <a href={project.githubURL} target="_blank">
                      <GithubIcon
                        size={20}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
