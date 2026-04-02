import { Mail, Send } from "lucide-react";
import WhatsappIcon from "./WhatsappIcon";
import LinkedinIcon from "./LinkedinIcon";
import { cn } from "@/lib/utils.js";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl"></div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Entre em <span className="text-primary">Contato</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Tem um projeto em mente ou quer colaborar? Sinta-se a vontade para
        entrar em contato. Estou sempre aberto para novas oportunidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">
            {" "}
            Informações de Contato
          </h3>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Email</h4>
                <a
                  href="mailto:malvinodev2@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  malvinodev2@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <WhatsappIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Whatsapp </h4>
                <a
                  href="https://api.whatsapp.com/send/?phone=5518996371968&text&type=phone_number&app_absent=0"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +55 (18) 99637-1968
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <LinkedinIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Linkedin </h4>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/malvino-garcia"
                >
                  https://www.linkedin.com/in/malvino-garcia
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Envie uma mensagem</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Kauan Malvino..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Seu email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="exemplo@exemplo.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Olá..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {" "}
                Enviar Mensagem
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
