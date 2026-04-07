import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Сделано с <Heart className="w-4 h-4 text-accent" /> Мухаммадом
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Все права защищены
        </p>
      </div>
    </footer>
  );
}
