import { motion } from "framer-motion";
import { Target, Eye, Heart, Building, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pantherLogo from "/panteraOK.png";
import { fadeUp } from "@/lib/animations";

const valores = [
  { icon: Target, title: "Excelência", desc: "Busca incansável por qualidade em cada entrega." },
  { icon: Users, title: "Colaboração", desc: "Trabalho em equipe e troca de conhecimento." },
  { icon: Award, title: "Inovação", desc: "Pensar fora da caixa para gerar soluções únicas." },
  { icon: Heart, title: "Compromisso", desc: "Responsabilidade com prazos, resultados e comunidade." },
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Sobre Nós
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            A história por trás da <span className="text-gradient">Therion</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
            Nascemos da convicção de que estudantes podem entregar soluções de mercado com a qualidade de profissionais seniores — e o fazemos todos os dias.
          </motion.p>
        </div>
      </section>

      {/* História */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <img src={pantherLogo} alt="Therion Panther" className="w-3/5 " />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-secondary border border-border flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-display text-3xl font-bold text-primary">3+</span>
                    <p className="text-xs text-muted-foreground">Anos de atuação</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="space-y-6">
              <h2 className="font-display text-3xl font-bold">Nossa Trajetória</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Therion é a Empresa Júnior de Engenharia de Computação da UTFPR - Câmpus Apucarana. Fundada por alunos motivados a transformar conhecimento acadêmico em soluções reais de tecnologia, a Therion surgiu como um espaço de aprendizado prático e empreendedorismo. Desde sua criação, a empresa tem se destacado em projetos de desenvolvimento web, automação, consultoria e projetos de Modelagem 3D.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Como empresa júnior, operamos sob a supervisão de professores especialistas e seguimos metodologias consolidadas do mercado, garantindo qualidade técnica em cada projeto.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nosso nome vem da força e inteligência da pantera — e é exatamente isso que representamos: agilidade, visão estratégica e execução precisa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Missão", text: "Promover o desenvolvimento de soluções tecnológicas que gerem valor para clientes e aprendizado prático para os membros." },
              { icon: Eye, title: "Visão", text: "Ser reconhecida como uma empresa júnior referência em inovação, qualidade e impacto social na área de tecnologia." },
              {
                icon: Building,
                title: "Valores",
                text: (
                  <>
                    Atuamos com proatividade, colaboração e espírito de equipe, sempre pautados pela ética, responsabilidade, inovação e{" "}
                    <span className="text-primary font-semibold">Rosa Choque Por Resultados</span>
                  </>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-card rounded-xl p-8 shadow-card border border-border text-center space-y-4"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  <item.icon size={28} />
                </div>
                <h3 className="font-display font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary font-display font-semibold text-lg uppercase tracking-widest">Nossos Pilares</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="text-center space-y-3 p-6"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <v.icon size={28} />
                </div>
                <h3 className="font-display font-semibold">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground max-w-4xl mx-auto">
            {[
              { num: "30+", label: "Projetos Entregues" },
              { num: "30+", label: "Clientes Atendidos" },
              { num: "20+", label: "Prêmios e Reconhecimentos" },
              { num: "3+", label: "Anos de Atuação" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <span className="font-display text-4xl md:text-5xl font-bold">{stat.num}</span>
                <p className="text-primary-foreground/80 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
