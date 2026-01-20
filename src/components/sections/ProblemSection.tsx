import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, TrendingDown, Repeat } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: AlertCircle,
      title: "Quanto mais você tenta se organizar...",
      description: "...mais travado fica. A busca pela organização perfeita vira mais uma fonte de frustração.",
    },
    {
      icon: TrendingDown,
      title: "A motivação vem... e some em 48 horas",
      description: "Você conhece esse ciclo: empolgação inicial, queda livre, culpa, e o ciclo recomeça.",
    },
    {
      icon: Repeat,
      title: "Você sabe o que deveria fazer...",
      description: "...mas não consegue fazer. E isso te destrói por dentro, dia após dia.",
    },
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Você já reparou <span className="text-primary">que algo está errado?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Esses padrões te parecem familiares?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-xl font-medium text-foreground mt-14 max-w-2xl mx-auto"
        >
          <span className="text-primary font-bold">Você não está sozinho.</span>
          <br />
          Milhares de pessoas vivem exatamente essa realidade.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
