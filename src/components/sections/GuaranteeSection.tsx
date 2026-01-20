import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 section-darker">
      <div className="container px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
          <div className="bg-card p-10 md:p-14 rounded-3xl shadow-card border border-primary/10 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">🛡️ Garantia Incondicional</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Você tem <span className="text-primary">7 dias</span> para testar tudo</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Se não sentir alívio, clareza ou avanço… <span className="font-bold text-foreground">eu devolvo seu dinheiro.</span></p>
              <div className="flex flex-col md:flex-row justify-center gap-4 text-muted-foreground">
                <span>✓ Sem perguntas</span>
                <span className="hidden md:block">|</span>
                <span className="hidden md:block">|</span>
                <span>✓ Risco zero</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
