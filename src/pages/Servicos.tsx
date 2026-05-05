import { motion } from "framer-motion";
import { Code, Cpu, Settings, BarChart3, ArrowRight, Globe, Bot, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";
import { NumeroComercial } from "@/constants";

const servicos = [
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    desc: "Sua empresa perde tempo com processos manuais e planilhas? Criamos sistemas web e mobile sob medida que automatizam fluxos, centralizam dados e escalam com o seu negócio.",
    items: ["Aplicações Web", "Apps Mobile", "Sistemas Integrados", "Dashboards", "APIs"],
  },
  {
    icon: Cpu,
    title: "Automação e Processos",
    desc: "Processos repetitivos consomem tempo e geram erros? Implementamos soluções de automação que eliminam gargalos e aumentam a produtividade da sua operação.",
    items: ["Automação com Microcontrollers", "RPA", "Otimização de Processos", "IoT", "Monitoramento"],
  },
  {
    icon: Settings,
    title: "Impressão e Modelagem 3D",
    desc: "Transformamos ideias em produtos físicos com modelagem 3D, prototipagem e impressão personalizada para empresas, eventos e projetos criativos.",
    items: [
      "Impressão 3D Personalizada",
      "Modelagem 3D",
      "Prototipagem Rápida",
      "Peças Sob Medida",
      "Produtos Personalizados"
    ],
  },
  {
    icon: Globe,
    title: "Sites e Landing Pages",
    desc: "Sua presença digital é o primeiro contato com potenciais clientes. Desenvolvemos sites responsivos e landing pages otimizadas para conversão e SEO.",
    items: ["Sites Corporativos", "Landing Pages", "E-commerce", "Otimização SEO", "Design Responsivo"],
  },
  {
    icon: Bot,
    title: "Automação com Agentes de IA",
    desc: "Potencialize suas operações com agentes inteligentes de IA que automatizam tarefas complexas, aprendem padrões e tomam decisões estratégicas.",
    items: ["Chatbots Inteligentes", "Automação de Processos com IA", "Análise Preditiva", "Integração com LLMs", "Agentes Autônomos"],
  },
  {
    icon: PieChart,
    title: "Business Intelligence e Power BI",
    desc: "Transforme seus dados em insights acionáveis com dashboards inteligentes e relatórios que ajudam você a tomar decisões baseadas em dados.",
    items: ["Dashboards Power BI", "Análise de Dados", "Relatórios Interativos", "Data Warehouse", "Visualização de Métricas"],
  },
];

const Servicos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Nossos Serviços
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Soluções que resolvem <span className="text-gradient">problemas reais</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
            Cada serviço é projetado para atacar a dor do cliente com precisão técnica e foco em resultado mensurável.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 space-y-8 max-w-5xl">
          {servicos.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="group bg-card rounded-2xl p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-16 h-16 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:animate-pulse-glow transition-all">
                  <s.icon size={32} />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Tem um desafio? <span className="text-gradient">Vamos resolver.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Converse com nossa equipe e receba uma proposta personalizada sem compromisso.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={`https://wa.me/${NumeroComercial}`}  target="_blank" rel="noopener noreferrer" className="gap-2">
                Falar pelo WhatsApp <ArrowRight size={18} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
