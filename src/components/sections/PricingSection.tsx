import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, Star, Zap, BookOpen } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const completeFeatures = [
    "Tudo do plano básico",
    "Agenda da Pessoa Comum",
    "Mapa da Retomada",
    "O Básico Que Salva",
    "Protocolos extras de ação",
    "Acesso vitalício",
  ];

  const basicFeatures = [
    "Guia Procrastinação Nunca Mais",
    "Ritual de 5 minutos por dia",
    "Acesso imediato",
  ];

  return (
    <section ref={ref} id="pricing" className="py-20 md:py-28 section-dark">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
            💰 Oferta Especial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Investimento que <span className="text-primary">transforma</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Complete Plan - Main */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card p-8 rounded-2xl shadow-hover border-2 border-primary relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-hero text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 text-center max-w-[180px] leading-tight">
                  <Star className="w-4 h-4 fill-current flex-shrink-0" />
                  <span>TENHO ALGO MELHOR PRA VOCÊ</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 border border-primary/30">
                    <Zap className="w-4 h-4" />
                    Pacote Completo
                  </div>
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-5xl font-bold text-foreground">R$7,99</span>
                    <span className="text-sm text-muted-foreground line-through">R$29,99</span>
                  </div>
                  <p className="text-primary font-medium text-sm mt-2">73% de desconto!</p>
                  <p className="text-muted-foreground mt-4 text-sm">
                    O pacote mais completo para quem quer resultados reais e duradouros.
                  </p>
                </div>

                <div>
                  <ul className="space-y-3">
                    {completeFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href="https://www.ggcheckout.com/checkout/v3/PIToL075TPMG3iNKdV8E" target="_blank" rel="noopener noreferrer" className="block w-full mt-8">
                <CTAButton variant="primary" size="lg" className="w-full">
                  Quero o Pacote Completo!
                </CTAButton>
              </a>
            </div>
          </motion.div>

          {/* Basic Plan - Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card/50 p-6 rounded-xl border border-border/50 relative">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                    <BookOpen className="w-4 h-4" />
                    Plano Básico
                  </div>
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-3xl font-bold text-foreground">R$1,99</span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Ideal para começar sua transformação.
                  </p>
                </div>

                <div>
                  <ul className="space-y-2">
                    {basicFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href="https://www.ggcheckout.com/checkout/v3/fNjKJLLBmFKur8YClaqf" target="_blank" rel="noopener noreferrer" className="block w-full mt-6">
                <CTAButton variant="outline" size="default" className="w-full">
                  Começar com o Básico
                </CTAButton>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
