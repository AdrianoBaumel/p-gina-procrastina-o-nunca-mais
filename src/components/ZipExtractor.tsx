import { useState, useCallback } from 'react';
import JSZip from 'jszip';
import { Upload, File, Folder, Download, Archive, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';

interface ZipEntry {
  name: string;
  path: string;
  isFolder: boolean;
  size: number;
  compressedSize: number;
}

interface ZipData {
  fileName: string;
  entries: ZipEntry[];
  zip: JSZip;
}

const ZipExtractor = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [zipData, setZipData] = useState<ZipData | null>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const processZipFile = async (file: File) => {
    if (!file.name.toLowerCase().endsWith('.zip')) {
      toast.error('Por favor, selecione um arquivo ZIP válido');
      return;
    }

    setIsLoading(true);
    try {
      const zip = await JSZip.loadAsync(file);
      const entries: ZipEntry[] = [];

      zip.forEach((relativePath, zipEntry) => {
        entries.push({
          name: zipEntry.name.split('/').filter(Boolean).pop() || zipEntry.name,
          path: relativePath,
          isFolder: zipEntry.dir,
          size: 0,
          compressedSize: 0,
        });
      });

      // Sort: folders first, then files alphabetically
      entries.sort((a, b) => {
        if (a.isFolder && !b.isFolder) return -1;
        if (!a.isFolder && b.isFolder) return 1;
        return a.path.localeCompare(b.path);
      });

      setZipData({
        fileName: file.name,
        entries,
        zip,
      });

      toast.success(`Arquivo "${file.name}" carregado com sucesso!`);
    } catch (error) {
      toast.error('Erro ao processar o arquivo ZIP');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processZipFile(file);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processZipFile(file);
  };

  const downloadFile = async (entry: ZipEntry) => {
    if (!zipData || entry.isFolder) return;

    try {
      const fileData = await zipData.zip.file(entry.path)?.async('blob');
      if (fileData) {
        const url = URL.createObjectURL(fileData);
        const a = document.createElement('a');
        a.href = url;
        a.download = entry.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success(`Baixando "${entry.name}"`);
      }
    } catch (error) {
      toast.error('Erro ao baixar o arquivo');
      console.error(error);
    }
  };

  const downloadAll = async () => {
    if (!zipData) return;

    try {
      const content = await zipData.zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = zipData.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Download completo!');
    } catch (error) {
      toast.error('Erro ao baixar os arquivos');
      console.error(error);
    }
  };

  const clearZip = () => {
    setZipData(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {!zipData ? (
        <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-0">
            <label
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`flex flex-col items-center justify-center min-h-[400px] cursor-pointer transition-all ${
                isDragging ? 'bg-primary/5 scale-[1.02]' : 'bg-background hover:bg-muted/50'
              }`}
            >
              <input
                type="file"
                accept=".zip"
                onChange={handleFileInput}
                className="hidden"
              />
              
              <div className={`transition-transform ${isDragging ? 'scale-110' : ''}`}>
                <Archive className="w-20 h-20 text-primary mb-6" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {isLoading ? 'Processando...' : 'Arraste seu arquivo ZIP aqui'}
              </h2>
              
              <p className="text-muted-foreground mb-6">
                ou clique para selecionar
              </p>
              
              <Button variant="outline" size="lg" disabled={isLoading}>
                <Upload className="w-4 h-4 mr-2" />
                Selecionar Arquivo
              </Button>
            </label>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div className="flex items-center gap-3">
              <Archive className="w-6 h-6 text-primary" />
              <CardTitle className="text-xl">{zipData.fileName}</CardTitle>
            </div>
            <div className="flex gap-2">
              <Button onClick={downloadAll} variant="default" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Baixar Tudo
              </Button>
              <Button onClick={clearZip} variant="outline" size="sm">
                <X className="w-4 h-4 mr-2" />
                Fechar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {zipData.entries.filter(e => !e.isFolder).length} arquivos encontrados
            </p>
            
            <ScrollArea className="h-[400px] rounded-md border">
              <div className="p-4 space-y-1">
                {zipData.entries.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      entry.isFolder ? 'bg-muted/50' : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {entry.isFolder ? (
                        <Folder className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <File className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="truncate text-sm" title={entry.path}>
                        {entry.path}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 flex-shrink-0">
                      {!entry.isFolder && (
                        <>
                          <span className="text-xs text-muted-foreground">
                            {formatFileSize(entry.size)}
                          </span>
                          <Button
                            onClick={() => downloadFile(entry)}
                            variant="ghost"
                            size="sm"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ZipExtractor;
