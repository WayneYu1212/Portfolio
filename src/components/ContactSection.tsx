import { profile } from '../data/profile';

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">CONTACT</p>
      <h2 id="contact-title">如果你想继续看作品，或聊聊具体机会。</h2>
      <div className="contact__actions">
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          Send an email
        </a>
        <a className="button" href={profile.resumeHref}>
          Download public resume
        </a>
        {profile.socials.map((social) => (
          <a className="button" href={social.href} target="_blank" rel="noreferrer" key={social.label}>
            {social.label}
          </a>
        ))}
      </div>
      <p className="contact__note">
        公开页面只保留邮箱入口。手机号、出生年月和其他私人信息不放在网页正文中。
      </p>
    </section>
  );
}
