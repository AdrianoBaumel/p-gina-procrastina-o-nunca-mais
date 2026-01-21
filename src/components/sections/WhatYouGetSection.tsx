import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Book, Calendar, Map, Sparkles, ArrowRight } from "lucide-react";

const WhatYouGetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bonuses = [
    {
      icon: Calendar,
      title: "Agenda da Pessoa Comum",
      description: "O planejamento semanal que realmente funciona para quem nunca conseguiu seguir uma rotina.",
    },
    {
      icon: Map,
      title: "Mapa da Retomada",
      description: "O protocolo de emergência para voltar ao caminho quando tudo já desandou.",
    },
    {
      icon: Sparkles,
      title: "O Básico Que Salva",
      description: "12 micro-ações que resgatam seu dia quando a motivação some completamente.",
    },
  ];

  const steps = [
    "Você garante acesso por apenas R$1,99",
    "Recebe imediatamente o conteúdo no seu e-mail",
    "Aplica o ritual de 5 minutos por dia",
    "Em até 7 dias, sente clareza, retomada e ação sem culpa",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 section-darker">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
            📦 O Que Você Recebe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tudo que você precisa para <span className="text-primary">destravar</span>
          </h2>
        </motion.div>

        {/* Main Product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-gradient-card p-8 md:p-10 rounded-2xl shadow-card border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Book className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">Produto Principal</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1 mb-3">
                    Procrastinação Nunca Mais
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Um guia simples e direto que destrava sua mente, elimina a culpa e
                    faz você agir de forma leve e sustentável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-center text-2xl font-bold text-foreground mb-8">
            🎁 + 3 Bônus Exclusivos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-hover hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <bonus.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-2">{bonus.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{bonus.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How it Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-center text-2xl font-bold text-foreground mb-10">
            Como Funciona
          </h3>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4 bg-secondary/50 p-5 rounded-xl"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground font-medium">{step}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
