import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FavoritesSection } from './components/FavoritesSection';
import { HeroRoom } from './components/HeroRoom';
import { WorkSection } from './components/WorkSection';

export default function App() {
  return (
    <>
      <HeroRoom />
      <main>
        <WorkSection />
        <AboutSection />
        <FavoritesSection />
        <ContactSection />
      </main>
      <a className="back-to-top" href="#index" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
