import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { profile } from '../data/profile';

const roomObjects = [
  { className: 'object object--recorder', label: '访谈录音 / ORAL HISTORY', depth: 26, projectId: 'oral-history' },
  { className: 'object object--book', label: '书页批注 / FIELD NOTES', depth: -18, projectId: 'ai-history' },
  { className: 'object object--pad', label: '游戏社群 / GAME WORLDS', depth: 34, projectId: 'xiaohongshu-game' },
  { className: 'object object--camera', label: '视频剪辑 / TIMELINE', depth: 18, projectId: 'xiaohongshu-game' },
  { className: 'object object--map', label: '田野路线 / CULTURE WALK', depth: 12, projectId: 'culture-walk' },
  { className: 'object object--ai', label: 'AI 工作流 / PROMPT NOTES', depth: 38, projectId: 'chronicle' },
  { className: 'object object--sticky', label: '广东歌 / NOW PLAYING', depth: -12 },
];

export function HeroRoom() {
  const roomRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const englishLetters = Array.from(profile.englishName);

  useEffect(() => {
    const room = roomRef.current;
    if (!room || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = room.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      room.style.setProperty('--mx', String(x));
      room.style.setProperty('--my', String(y));
    };

    room.addEventListener('pointermove', handlePointerMove);
    return () => room.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const openProject = (projectId?: string) => {
    if (!projectId) return;
    window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: projectId }));
    window.setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const enterWorktable = () => {
    setEntered(true);
    window.setTimeout(() => {
      window.history.replaceState(null, '', '#index');
      document.getElementById('index')?.scrollIntoView({ block: 'start' });
    }, 0);
  };

  return (
    <section className={`hero ${entered ? 'hero--entered' : ''}`} id="index" aria-labelledby="hero-title">
      <nav className="topbar" aria-label="Primary navigation">
        <a href="#index">INDEX</a>
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#favorites">FAVORITES</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <div className="entry-gate" aria-hidden={entered}>
        <div className="entry-worktable" aria-label="Floating pixel laptop entrance">
          <img className="entry-asset entry-asset--cursor" src="./ppt-assets/image10.png" alt="" />
          <img className="entry-asset entry-asset--spark" src="./ppt-assets/image17.png" alt="" />
          <img className="entry-asset entry-asset--bubble" src="./ppt-assets/image23.png" alt="" />
          <img className="entry-asset entry-asset--bot" src="./ppt-assets/image6.png" alt="" />
          <img className="entry-asset entry-asset--star" src="./ppt-assets/image28.png" alt="" />
          <span className="entry-prop entry-prop--recorder">REC</span>
          <span className="entry-prop entry-prop--game">PLAY</span>
          <span className="entry-prop entry-prop--note">FIELD NOTE</span>
          <span className="entry-prop entry-prop--map">MAP</span>
          <div className="entry-laptop">
            <img src="./ppt-assets/image5.png" alt="像素风笔记本电脑" />
            <div className="entry-screen" aria-hidden="true">
              <span>YU YUYING</span>
              <strong>WORKTABLE</strong>
              <small>stories / systems / small worlds</small>
            </div>
            <button className="entry-start" type="button" onClick={enterWorktable}>
              开始
            </button>
          </div>
          <p className="entry-caption">YU YUYING'S WORKTABLE</p>
        </div>
      </div>

      <div className="hero__room" ref={roomRef}>
        <div className="hero__copy">
          <p className="eyebrow">CREATIVE WORKTABLE / PERSONAL ARCHIVE</p>
          <h1 id="hero-title">
            <span className="hero-name" tabIndex={0}>
              {profile.name}
              <span className="name-hi" aria-hidden="true">
                <img src="./ppt-assets/image6.png" alt="" />
                <span>hi!</span>
              </span>
            </span>
            <span className="letter-row" aria-label={profile.englishName}>
              {englishLetters.map((letter, index) =>
                letter === ' ' ? (
                  <span className="letter-space" aria-hidden="true" key={`space-${index}`} />
                ) : (
                  <span className="name-letter" style={{ '--i': index } as CSSProperties} key={`${letter}-${index}`}>
                    {letter}
                  </span>
                ),
              )}
            </span>
          </h1>
          <div className="quote-card" tabIndex={0}>
            <p className="hero__intro">{profile.intro}</p>
            <p className="hero__intro hero__intro--en">{profile.englishIntro}</p>
            <div className="quote-popover" role="note">
              <strong>{profile.quote.attribution}</strong>
              <p>{profile.quote.source}</p>
              <div>
                <a href={profile.quote.wikiHref} target="_blank" rel="noreferrer">
                  Wikipedia
                </a>
                <a href={profile.quote.sourceHref} target="_blank" rel="noreferrer">
                  The Savage Mind excerpt
                </a>
              </div>
            </div>
          </div>
          <div className="hero__actions" aria-label="Main actions">
            <a className="button button--primary" href="#work">
              Explore my work
            </a>
            <a className="button" href={`mailto:${profile.email}`}>
              Send an email
            </a>
          </div>
        </div>

        <div className="desktop-scene" aria-label="A layered creative desktop">
          <div className="scene-orbit scene-orbit--one" />
          <div className="scene-orbit scene-orbit--two" />
          <div className="laptop">
            <img className="laptop__image" src="./ppt-assets/image5.png" alt="悬浮的像素风笔记本电脑" />
            <div className="laptop__screen">
              <p>WORKTABLE_2026</p>
              <strong>ARCHIVE</strong>
              <small>history / internet / games / ai</small>
              <a href="#work">OPEN FILES</a>
            </div>
          </div>
          {roomObjects.map((item) => (
            <a
              href={item.projectId ? '#work' : '#favorites'}
              className={item.className}
              key={item.label}
              onClick={(event) => {
                if (item.projectId) {
                  event.preventDefault();
                }
                openProject(item.projectId);
              }}
              style={{ '--depth': item.depth } as CSSProperties}
            >
              <span className="object__label">{item.label}</span>
            </a>
          ))}
          <div className="cursor-chip">ENTER</div>
        </div>
      </div>
    </section>
  );
}
