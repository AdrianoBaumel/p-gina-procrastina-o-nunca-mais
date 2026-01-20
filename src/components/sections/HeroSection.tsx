import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Clock, Brain, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-[hsl(0_0%_7%)]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/30"
          >
            <Clock className="w-4 h-4" />
            <span>5 minutos por dia • 7 dias para transformar</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Procrastinação <span className="text-gradient-primary">Nunca Mais</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Destrave sua vida em 7 dias</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            A solução criada para pessoas cansadas, ansiosas e cheias de recaídas —
            exatamente quem já tentou de tudo e nada funcionou.
          </motion.p>

          {/* Pain points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10"
          >
            {[
              { icon: Brain, text: "Mente barulhenta que te impede de começar?" },
              { icon: Clock, text: "Planeja, mas não consegue seguir?" },
              { icon: Heart, text: "Culpa por não conseguir agir?" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <CTAButton
              size="xl"
              variant="primary"
              className="animate-pulse-soft"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar por apenas R$1,99
            </CTAButton>
            <p className="text-sm text-muted-foreground">
              ✓ Acesso imediato • ✓ Garantia de 7 dias • ✓ Sem risco
            </p>
          </motion.div>

          {/* Highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 p-6 bg-card rounded-2xl shadow-card max-w-xl mx-auto"
          >
            <p className="text-lg font-medium text-foreground">
              Este é o seu <span className="text-primary font-bold">ponto de virada</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
