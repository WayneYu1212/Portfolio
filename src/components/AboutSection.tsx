import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section className="section section--about" id="about" aria-labelledby="about-title">
      <SectionHeading eyebrow="ADVANTAGES" title="我能把复杂材料整理成可执行的内容判断。">
        作为求职者，我的优势集中在研究、内容、社群理解和 AI 工作流四件事上。
      </SectionHeading>

      <div className="about-layout">
        <div className="advantage-grid">
          {profile.advantages.map((item) => (
            <article className="advantage-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <dl className="stat-board" aria-label="Selected numbers">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
