import './globals.css';

export const metadata = {
  title: 'Kasun Miu',
  description: 'A creator building worlds, systems, and solutions, always looking for problems to solve.',
  
  // Favicon
  icons: {
    icon: '/favicon.ico',
  },

  // SEO
  keywords: ['Kasun Miuranga', 'game developer', 'digital artist', 'Sri Lanka', 'indie games', 'Godot'],
  authors: [{ name: 'Kasun Miuranga', url: 'https://kasunmiu.github.io' }],
  creator: 'Kasun Miuranga',

  // Open Graph (WhatsApp, Facebook previews)
  openGraph: {
    title: 'Kasun Miuranga',
    description: 'A creator building worlds, systems, and solutions, always looking for problems to solve.',
    url: 'https://kasunmiu.github.io',
    siteName: 'Kasun Miuranga',
    images: [{ url: '/images/kasunmiu.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter/X card
  twitter: {
    card: 'summary_large_image',
    title: 'Kasun Miuranga',
    description: 'Game developer, digital artist & creator.',
    images: ['/images/kasunmiu.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
