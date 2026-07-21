import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { projects } from '../data/projects';
import { SectionHeading } from './SectionHeading';

export function WorkSection() {
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const [expandedId, setExpandedId] = useState<string | null>(projects[0]?.id ?? null);

  useEffect(() => {
    const handleOpenProject = (event: Event) => {
      const projectId = (event as CustomEvent<string>).detail;
      if (!projectId) return;
      setActiveId(projectId);
      setExpandedId(projectId);
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.addEventListener('portfolio:open-project', handleOpenProject);
    return () => window.removeEventListener('portfolio:open-project', handleOpenProject);
  }, []);

  return (
    <section className="section section--work" id="work" aria-labelledby="work-title">
      <SectionHeading eyebrow="SELECTED WORK" title="一些真实做过、也能继续展开的事。">
        像翻一组 iMessage 闪卡一样看项目：移到哪张，哪张就浮到最前面；点击后打开档案。
      </SectionHeading>

      <div className="project-stack" aria-label="Selected project flash cards">
        {projects.map((project, index) => {
          const isActive = activeId === project.id;
          const isExpanded = expandedId === project.id;

          return (
          <article
            className={`project-card ${isActive ? 'project-card--active' : ''} ${
              isExpanded ? 'project-card--expanded' : ''
            }`}
            key={project.id}
            onMouseEnter={() => setActiveId(project.id)}
            onFocus={() => setActiveId(project.id)}
            style={
              {
                '--card-index': index,
                '--card-z': isActive ? projects.length + 2 : projects.length - index,
            } as CSSProperties
            }
          >
            <div className="project-card__top">
              <span className="project-card__number">{project.number}</span>
              <span>{project.year}</span>
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p className="project-card__english">{project.englishTitle}</p>
              <p>{project.summary}</p>
              <div className="tag-row" aria-label="Project tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <button
              className="archive-toggle"
              type="button"
              aria-expanded={isExpanded}
              aria-controls={`case-study-${project.id}`}
              onClick={() => {
                setActiveId(project.id);
                setExpandedId(isExpanded ? null : project.id);
              }}
            >
              {isExpanded ? 'Close archive' : 'Open archive'}
            </button>
            <div className="case-study" id={`case-study-${project.id}`} hidden={!isExpanded}>
              <p>
                <strong>My Role</strong>
                {project.role}
              </p>
              <p>
                <strong>Question</strong>
                {project.question}
              </p>
              <div>
                <strong>Process</strong>
                <ul>
                  {project.process.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
              <p>
                <strong>Key Insight</strong>
                {project.insight}
              </p>
              <p>
                <strong>Output</strong>
                {project.output}
              </p>
              <p>
                <strong>Result</strong>
                {project.result}
              </p>
              <p>
                <strong>Reflection</strong>
                {project.reflection}
              </p>
              {project.link ? (
                <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                  View public example
                </a>
              ) : null}
            </div>
          </article>
        )})}
      </div>
    </section>
  );
}
