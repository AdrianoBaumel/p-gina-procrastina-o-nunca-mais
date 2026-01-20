import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    { question: "Isso substitui terapia?", answer: "Não. Mas ajuda muito no dia a dia, reduzindo travas e crises. Este é um método prático para o cotidiano, não um tratamento clínico." },
    { question: "Funciona para pessoas ansiosas?", answer: "Sim. Foi criado exatamente para elas. O método respeita seu ritmo e não exige força de vontade sobre-humana." },
    { question: "Preciso de experiência, planner ou equipamento?", answer: "Nada disso. Apenas 5 minutos por dia e a vontade de tentar algo diferente." },
    { question: "Em quanto tempo vejo resultado?", answer: "A maioria sente efeito no primeiro dia. A transformação completa acontece em até 7 dias com prática consistente." },
    { question: "Recebo como?", answer: "Por e-mail imediatamente após o pagamento. Você terá acesso instantâneo a todo o conteúdo." },
    { question: "É seguro?", answer: "Completamente. Conteúdo simples, leve e realista. Sem técnicas agressivas ou pressão emocional." },
    { question: "O acesso é vitalício?", answer: "Sim. Uma vez seu, é seu para sempre. Acesse quantas vezes quiser, pelo tempo que precisar." },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 section-dark">
      <div className="container px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">❓ Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Perguntas <span className="text-primary">respondidas</span></h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border/50 shadow-card px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
