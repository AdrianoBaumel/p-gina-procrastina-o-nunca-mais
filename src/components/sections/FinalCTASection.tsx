import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CTAButton } from "@/components/ui/cta-button";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 section-darker relative overflow-hidden">
      <div className="absolute top-10 left-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
      <div className="container px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/30">
            <Clock className="w-4 h-4" />
            <span>Oferta por tempo limitado</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Esta oferta pode voltar ao preço normal a qualquer momento</h2>
          <p className="text-2xl font-semibold text-foreground mb-10">Por que continuar vivendo a mesma trava amanhã… <span className="text-primary">se você pode destravar sua vida hoje?</span></p>
          <CTAButton size="lg" variant="primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Começar por R$1,99</CTAButton>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" />Garantia de 7 dias</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />Acesso imediato</span>
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" />Risco zero</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
