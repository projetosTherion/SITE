import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Settings, BarChart3, Users, GraduationCap, Target, Zap, Quote, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import pantherLogo from "/therion.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";
import { NumeroComercial } from "@/constants";
const diferenciais = [
  { icon: Users, title: "Equipe Técnica Qualificada", desc: "Membros selecionados com rigor, capacitados para entregar soluções de alto nível." },
  { icon: GraduationCap, title: "Supervisão de Professores", desc: "Projetos orientados por especialistas com experiência acadêmica e de mercado." },
  { icon: Target, title: "Soluções Personalizadas", desc: "Cada projeto é único — desenvolvemos sob medida para a sua necessidade." },
  { icon: Zap, title: "Foco em Resultado", desc: "Compromisso com eficiência, prazo e impacto real no seu negócio." },
];

const areas = [
  { icon: Code, title: "Desenvolvimento de Software", desc: "Aplicações web, mobile e sistemas sob medida para otimizar operações." },
  { icon: Cpu, title: "Automação e Processos", desc: "Automação com microcontroladores e de processos para maximizar produtividade." },
  { icon: Settings, title: "Modelagem e Prototipação 3D", desc: "Modelamos e realizamos impressões 3D sob demanda. Soluções tecnológicas personalizadas." },
  { icon: BarChart3, title: "Sites e Landing Pages", desc: "Desenvolvemos sites e landing pages profissionais para impulsionar sua presença digital." },
];

const projetos = [
  { title: "ERP para Empresas Juniores e Pequenos Negócios", problema: "Necessidade de otimização de processos e gestão de informações.", solucao: "Sistema integrado para automação de processos.", resultado: "Engajamento da equipe e controle de processos. Tudo em um lugar só", msgDeContato: "Quero saber mais sobre o ERP!" },
  { title: "Seu Cartão de Visitas em um Chaveiro NFC", problema: "Cartões de visita tradicionais são facilmente perdidos e raramente geram interação.", solucao: "Chaveiros 3D personalizados com NFC que compartilham contatos, links e redes sociais com apenas um toque.", resultado: "Mais praticidade, maior impacto visual e networking moderno que aumenta as chances de conexão e lembrança da marca.", msgDeContato: "Quero saber mais sobre o Chaveiro NFC!" },
  { title: "Atendimento Inteligente no WhatsApp", problema: "Clientes aguardam resposta e atendimentos se perdem.", solucao: "Automação inteligente para WhatsApp com respostas rápidas e organização automática.", resultado: "Mais agilidade, melhor experiência para o cliente e aumento nas conversões.", msgDeContato: "Quero saber mais sobre o Atendimento no WhatsApp!" },
];

const depoimentos = [
  { nome: "Núcleo das empresas juniores de Londrina", cargo: "NEJLON", texto: "Atendimento excelente, tiveram muita paciência durante todo o processo de decisão final do produto." },
  { nome: "Núcleo das empresas juniores de Londrina", cargo: "NEJLON", texto: "Parabéns gente, arrasaram demais, tanto no atendimento, tanto na qualidade do produto, me senti segura durante todo processo, mesmo tendo aquele problema das argolas, vocês resolveram na hora, não sei como vocês tinham isso no evento, mas deu tudo certo, obrigada por tudo!" },
  { nome: "Leonardo Monteiro da Silva", cargo: "Fundador, Arcseed", texto: "Ótimo atendimento." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
              <img src={pantherLogo} alt="Therion Panther" className="h-auto w-32 mx-auto mb-6 animate-float" />
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              Inteligência, Estratégia e {" "}
              <span className="text-gradient">Rosa Choque Por Resultados</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              A Therion conecta conhecimento técnico à aplicação prática para transformar empresas.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" custom={3} variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="lg" asChild>
                <a href={`https://wa.me/${NumeroComercial}`}  target="_blank" rel="noopener noreferrer" className="gap-2">
                  Solicitar Proposta <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#sobre">Conheça a Therion</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institucional */}
      <section id="sobre" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Quem Somos</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Uma empresa júnior que entrega como{" "}
              <span className="text-gradient">empresa sênior</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
           Somos a Therion, a Empresa Júnior de Engenharia de Computação da UTFPR Apucarana. 
           Alunos com atitude, criatividade e sede por inovação. Sem fins lucrativos, com foco total em resultados — porque acreditamos que aprender fazendo transforma carreiras e impulsiona o mercado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Por que a Therion</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Nossos Diferenciais</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">O que fazemos</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Áreas de Atuação</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="group flex gap-5 bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="w-14 h-14 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  <area.icon size={28} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="/servicos" className="gap-2">
                Saiba Mais <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Resultados</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Produtos que Impulsionam seu Negócio</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projetos.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group"
              >
                <div className="h-2 bg-gradient-primary" />
                <div className="p-8 space-y-4">
                  <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-foreground">Problema:</span> <span className="text-muted-foreground">{p.problema}</span></p>
                    <p><span className="font-semibold text-foreground">Solução:</span> <span className="text-muted-foreground">{p.solucao}</span></p>
                    <p><span className="font-semibold text-primary">Resultado:</span> <span className="text-muted-foreground">{p.resultado}</span></p>
                  </div>
                  <Button onClick={() => window.open(`https://wa.me/5500000000000/?text=${p.msgDeContato}`, '_blank')} variant="ghost" size="sm" className="bg-transparent p-0 hover:bg-transparent hover:text-primary group-hover:text-primary transition-colors gap-1">
                    Entre Em Contato <ChevronRight size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Depoimentos</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">O que dizem sobre nós</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <motion.div
                key={d.nome}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="bg-card rounded-xl p-8 shadow-card border border-border relative"
              >
                <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{d.texto}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {d.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{d.nome}</p>
                    <p className="text-muted-foreground text-xs">{d.cargo}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="bg-gradient-primary rounded-2xl p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <img src={pantherLogo} alt="" className="h-auto w-64 mx-auto mt-8 brightness-0 invert" />
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Pronto para levar sua empresa ao próximo nível?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
                Fale com nossa equipe e descubra como a Therion pode transformar seus desafios em resultados concretos.
              </p>
              <Button variant="hero-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href={`https://wa.me/${NumeroComercial}`} target="_blank" rel="noopener noreferrer" className="gap-2">
                  Solicitar Proposta <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
