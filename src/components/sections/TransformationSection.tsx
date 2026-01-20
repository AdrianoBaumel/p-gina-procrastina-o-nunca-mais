import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sunrise, Wind, Smile, Battery } from "lucide-react";

const TransformationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const transformations = [
    {
      icon: Sunrise,
      text: "Acordar e finalmente conseguir começar sem travar",
    },
    {
      icon: Wind,
      text: "Mente mais leve, mais silenciosa, mais clara",
    },
    {
      icon: Smile,
      text: "Olhar para o dia e sentir: \"hoje eu consigo\"",
    },
    {
      icon: Battery,
      text: "Uma rotina que funciona mesmo quando você está cansado",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 section-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
            ✨ A Transformação
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Imagine uma vida <span className="text-gradient-hope">diferente</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="flex items-center gap-5 bg-card p-6 rounded-xl shadow-card border border-border"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg text-foreground font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-xl md:text-2xl font-medium text-foreground max-w-xl mx-auto">
            Você pode reverter isso — e tudo começa com apenas{" "}
            <span className="text-primary font-bold">1 ritual diário de 5 minutos</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
