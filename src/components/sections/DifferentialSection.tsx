import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const DifferentialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const doesNotHave = [
    "Fórmulas mágicas",
    "Metas impossíveis",
    "Pressão",
    "Hacks de produtividade tóxica",
    "Efeitos colaterais emocionais",
  ];

  const hasIt = [
    "100% testado na vida real",
    "Criado para pessoas comuns",
    "Solução simples e rápida",
    "Funciona com cansaço e ansiedade",
    "Respeita seu ritmo",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 section-dark">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
            💡 O Diferencial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que este método é <span className="text-primary">diferente</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            A maioria das "soluções" fala de força de vontade, disciplina militar,
            planners complexos ou dicas rasas. Nada disso funciona para quem vive uma vida corrida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* What it doesn't have */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 rounded-2xl shadow-card border border-border/50"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
              Este método NÃO tem:
            </h3>
            <ul className="space-y-4">
              {doesNotHave.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* What it has */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card p-8 rounded-2xl shadow-card border border-primary/20"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              Este método É:
            </h3>
            <ul className="space-y-4">
              {hasIt.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center text-lg font-medium text-foreground mt-12 max-w-2xl mx-auto"
        >
          Criado para pessoas que precisam de uma solução{" "}
          <span className="text-primary font-bold">simples, rápida e eficaz</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default DifferentialSection;
