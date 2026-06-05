import { Providers as ThemeProvider } from './components/providers'
import NewHeader from './components/layouts/new_header'
import '../styles/globals.css'
import { FacebookPixel } from "./components";
import { Toaster } from './components/ui/toaster';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning >
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className='allparent'>
              <NewHeader/>
              <main className="flex-1">
                {children}
              </main>
            </div>
            <Toaster />
            <FacebookPixel />
            </ThemeProvider>
        </body>
    </html>
  );
}
