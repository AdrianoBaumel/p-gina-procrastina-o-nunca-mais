import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Heart, Shield, Target, Eye, Plus } from "lucide-react";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      primary: "Você começa sem travar",
      secondary: "Sente alívio imediato na mente",
    },
    {
      icon: Heart,
      primary: "Você retoma a rotina sem culpa",
      secondary: "Cria consistência real",
    },
    {
      icon: Shield,
      primary: "Você reduz a autossabotagem",
      secondary: "Desbloqueia energia emocional",
    },
    {
      icon: Target,
      primary: "Você faz o básico funcionar",
      secondary: "Evita recaídas demoradas",
    },
    {
      icon: Eye,
      primary: "Você ganha clareza em 7 dias",
      secondary: "Melhora foco e organização",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 section-darker">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
            ✅ Benefícios Comprovados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            O que você vai <span className="text-gradient-hope">conquistar</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-hover hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-3">
                    <p className="font-semibold text-lg text-foreground">{benefit.primary}</p>
                    <Plus className="hidden md:block w-4 h-4 text-accent flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit.secondary}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
