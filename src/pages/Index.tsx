import ZipExtractor from '@/components/ZipExtractor';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Open ZIP
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Abra e extraia arquivos ZIP diretamente no seu navegador. 
            Rápido, seguro e sem upload para servidores.
          </p>
        </header>
        
        <main>
          <ZipExtractor />
        </main>
        
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>Seus arquivos nunca saem do seu dispositivo.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
