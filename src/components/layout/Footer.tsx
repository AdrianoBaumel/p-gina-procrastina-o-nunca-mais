const Footer = () => {
  return (
    <footer className="py-10 section-dark border-t border-border/20">
      <div className="container px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Procrastinação Nunca Mais. Todos os direitos reservados.</p>
          <p className="text-xs text-muted-foreground/70 mt-2">Este produto não substitui acompanhamento profissional de saúde mental.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
