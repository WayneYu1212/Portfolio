import { currentShelf, musicFavorites } from '../data/favorites';
import { SectionHeading } from './SectionHeading';

export function FavoritesSection() {
  return (
    <section className="section section--favorites" id="favorites" aria-labelledby="favorites-title">
      <SectionHeading eyebrow="FAVORITES" title="一些不一定写进简历，但会留在我身上的东西。">
        默认静音。这里只做视觉播放器和歌单入口，不放未授权音频。
      </SectionHeading>

      <div className="favorites-layout">
        <div className="player-window" aria-label="Now playing visual player">
          <div className="player-window__screen">
            <p>NOW PLAYING</p>
            <strong>广东歌 / city lights / band sound</strong>
            <span />
          </div>
          <div className="player-window__controls">
            <button type="button" aria-label="Previous track">◀</button>
            <button type="button" aria-label="Play is disabled by default">▶</button>
            <button type="button" aria-label="Next track">▶</button>
          </div>
        </div>

        <div className="music-shelf">
          {musicFavorites.map((item) => (
            <article key={item.title} className="shelf-item">
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="current-shelf">
        {currentShelf.map((item) => (
          <article key={item.title}>
            <span>{item.meta}</span>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
