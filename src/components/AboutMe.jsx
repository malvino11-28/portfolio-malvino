import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">mim</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor backend em formação
            </h3>

            <p className="text-muter-foreground">
              Análise e Desenvolvimento de Sistemas, com foco em back-end. 1 ano
              de experiência de estudos em Node.js, Python e APIs. Focado em
              lógica, organização e eficiência.
            </p>

            <p className="text-muter-foreground">
              Também possuo conhecimentos em React aplicados em projetos de
              estudo, incluindo este portfólio. Atualmente atuo como estagiário
              com foco em organização de dados e suporte técnico, e busco minha
              primeira oportunidade na área de desenvolvimento para evoluir na
              prática e contribuir em projetos reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Entrar em Contato
              </a>

              <a
                href="/public/curriculo.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Desenvolvedor Web</h4>
                  <p className="text-muted-foreground">
                    Criação de sites e aplicativos web responsivos com
                    frameworks modernos
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> APIs e Back-end</h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de APIs REST e integração com bancos de
                    dados
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Lógica e Estrutura de Dados
                  </h4>
                  <p className="text-muted-foreground">
                    Foco em resolução de problemas e organização de código
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
