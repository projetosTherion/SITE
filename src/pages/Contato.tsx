import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";
import { fadeUp } from "@/lib/animations";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [loading, setLoading] = useState(false);

  // Substitua com a URL do seu Google Form (ex: https://docs.google.com/forms/d/[FORM_ID]/formResponse)
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqpCeLpYBWzhw1AAJT9OvsvjPrhgui4AJ_0Uh2sgZCDcZKWg/formResponse";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("entry.448256218", form.nome);
      formData.append("entry.1450108290", form.email);
      formData.append("entry.1793042360", form.mensagem);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setForm({ nome: "", email: "", mensagem: "" });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Contato
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Vamos <span className="text-gradient">conversar?</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
            Entre em contato e descubra como podemos ajudar sua empresa.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Descreva seu projeto ou desafio..."
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    required
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" disabled={loading} className="w-full gap-2">
                  {loading ? "Enviando..." : "Enviar Mensagem"} <Send size={18} />
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-6">Outras formas de contato</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-all">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="font-display font-semibold">WhatsApp</p>
                      <p className="text-sm opacity-70">Resposta rápida em horário comercial</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@therion.com.br"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-display font-semibold">Email</p>
                      <p className="text-sm opacity-70">empresatherion@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/therion.ej/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Instagram size={22} />
                  </a>
                  <a href="https://www.linkedin.com/company/therion/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
