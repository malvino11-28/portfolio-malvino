import { Mail, Send } from "lucide-react";
import WhatsappIcon from "./WhatsappIcon";
import LinkedinIcon from "./LinkedinIcon";
import { cn } from "@/lib/utils.js";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const formRef = useRef(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pela mensagem. Responderei em breve.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error(error);

      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar sua mensagem.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tem um projeto em mente ou quer colaborar? Sinta-se a vontade para
          entrar em contato. Estou sempre aberto para novas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* coluna da esquerda */}
          <div className="space-y-8 flex flex-col items-center w-fit">
            <h3 className="text-2xl font-semibold mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-16">
              <div className="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300 md:w-99">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="md:w-70">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:malvinodev2@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    malvinodev2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300">
                <div className="p-3 rounded-full bg-primary/10">
                  <WhatsappIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="md:w-70 w-45">
                  <h4 className="font-medium">Whatsapp</h4>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5518996371968&text&type=phone_number&app_absent=0"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (18) 99637-1968
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300">
                <div className="p-3 rounded-full bg-primary/10">
                  <LinkedinIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="md:w-70">
                  <h4 className="font-medium">Linkedin</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                    href="https://www.linkedin.com/in/malvino-garcia"
                  >
                    linkedin.com/in/malvino-garcia
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* coluna da direita */}
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>

            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Kauan Malvino..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Seu email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="exemplo@exemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={2}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Olá..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
