import './globals.css';
import '../styles/base.css';
import '../styles/welcome.css';
import '../styles/quiz.css';
import '../styles/processing.css';
import '../styles/dossier.css';
import '../styles/transmission.css';
import '../styles/motion.css';
import '../styles/responsive.css';

export const metadata = {
  title: 'Arquivo 264 | Clube das Baddies',
  description: 'Uma experiência imersiva de abertura da leitura coletiva de Estilhaça-me. Oito escolhas. Quatro perfis. Uma identidade.',
  icons: { icon: '/assets/favicon.svg' },
  openGraph: {
    title: 'Arquivo 264 — Clube das Baddies',
    description: 'Seus pensamentos não estão seguros aqui. Inicie sua avaliação.',
    type: 'website',
  },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#14243A' };

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
