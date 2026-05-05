import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";
import { NumeroComercial } from "@/constants";
const produtos = [
  { 
    title: "ERP para Empresas Juniores e Pequenos Negócios", 
    categoria: "Software", 
    problema: "Necessidade de otimização de processos e gestão de informações.", 
    solucao: "Sistema integrado para automação de processos.", 
    resultado: "Engajamento da equipe e controle de processos. Tudo em um lugar só.",
    media: "/ERPPIC.png", // Cole a URL da imagem, gif ou vídeo aqui
    msgDeContato: "Quero saber mais sobre o ERP!" 
  },
  { 
    title: "Seu Cartão de Visitas em um Chaveiro NFC", 
    categoria: "Impressão 3D", 
    problema: "Cartões de visita tradicionais são facilmente perdidos e raramente geram interação.", 
    solucao: "Chaveiros 3D personalizados com NFC que compartilham contatos, links e redes sociais com apenas um toque.", 
    resultado: "Mais praticidade, maior impacto visual e networking moderno que aumenta as chances de conexão e lembrança da marca.",
    media: "/NFC.png", // Cole a URL da imagem, gif ou vídeo aqui
    msgDeContato: "Quero saber mais sobre o Chaveiro NFC!" 
  },
  { 
    title: "Atendimento Inteligente no WhatsApp", 
    categoria: "IA/Automação", 
    problema: "Clientes aguardam resposta e atendimentos se perdem.", 
    solucao: "Automação inteligente para WhatsApp com respostas rápidas e organização automática.", 
    resultado: "Mais agilidade, melhor experiência para o cliente e aumento nas conversões.",
    media: "/WppAuto.png", // Cole a URL da imagem, gif ou vídeo aqui
    msgDeContato: "Quero saber mais sobre o Atendimento no WhatsApp!" 
  },
];

const Projetos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Nossos Produtos
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Produtos que <span className="text-gradient">transformam negócios</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
            Conheça em detalhes as soluções que já entregamos e o impacto que geraram para nossos clientes.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 space-y-16">
          {produtos.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Mídia */}
                <div className="flex items-center justify-center bg-muted rounded-xl h-80 md:h-96">
                  {p.media ? (
                    <>
                      {p.media.includes('.mp4') || p.media.includes('youtube') || p.media.includes('vimeo') ? (
                        <video 
                          src={p.media} 
                          className="w-full h-full object-cover rounded-lg" 
                          controls
                          loop
                          autoPlay
                          muted
                        />
                      ) : (
                        <img 
                          src={p.media} 
                          alt={p.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                    </>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <p className="text-sm">Imagem, GIF ou Vídeo</p>
                      <p className="text-xs mt-2">Cole a URL aqui</p>
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="space-y-6 flex flex-col justify-center">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-3 inline-block">
                      {p.categoria}
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl mt-3 mb-4">{p.title}</h2>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1"> Problema</p>
                      <p className="text-muted-foreground">{p.problema}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1"> Solução</p>
                      <p className="text-muted-foreground">{p.solucao}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1"> Resultado</p>
                      <p className="text-muted-foreground">{p.resultado}</p>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" asChild className="w-fit">
                    <a href={`https://wa.me/${NumeroComercial}?text=${encodeURIComponent(p.msgDeContato)}`} target="_blank" rel="noopener noreferrer" className="gap-2">
                      Conhecer mais <ChevronRight size={18} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projetos;
