import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import pantherLogo from "/therion.png";
import { NumeroComercial } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={pantherLogo} alt="Therion" className="h-10 w-10 object-contain brightness-0 invert" />
              <span className="font-display text-xl font-bold tracking-tight">Therion</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Inteligência, estratégia e engenharia que geram resultado.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider">Navegação</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Sobre", "Serviços", "Projetos", "Contato"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-background/60 text-sm hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider">Serviços</h4>
            <div className="flex flex-col gap-2 text-background/60 text-sm">
              <span>Desenvolvimento de Software</span>
              <span>Automação e Processos</span>
              <span>Impressão e Modelagem 3D</span>
              <span>Sites e Landing Pages</span>
              <span>Automação com Agentes de IA</span>
              <span>Business Intelligence</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@therion.com.br" className="flex items-center gap-2 text-background/60 text-sm hover:text-primary transition-colors">
                <Mail size={16} /> empresatherion@gmail.com
              </a>
              <a href={`https://wa.me/${NumeroComercial}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/60 text-sm hover:text-primary transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://www.instagram.com/therion.ej/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/therion/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/40 text-sm">
          © {new Date().getFullYear()} Therion Empresa Júnior. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
