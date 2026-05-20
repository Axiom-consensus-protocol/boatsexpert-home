import Link from "next/link";
import type { OriginalCard, OriginalSection } from "@/lib/original-site-data";
import "./OriginalInfoPage.css";

type OriginalInfoPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  source?: string;
  cards?: OriginalCard[];
  sections?: OriginalSection[];
  asideTitle?: string;
  asideItems?: string[];
};

export function OriginalInfoPage({
  eyebrow,
  title,
  lead,
  source,
  cards = [],
  sections = [],
  asideTitle = "Original sitemap coverage",
  asideItems = [],
}: OriginalInfoPageProps) {
  return (
    <>
      <main className="orig-page">
        <section className="orig-hero">
          <div className="container">
            <div className="orig-crumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <b>{title}</b>
            </div>
            <div className="orig-hero-grid">
              <div>
                <div className="orig-ey">{eyebrow}</div>
                <h1>{title}</h1>
                <p>{lead}</p>
                {source ? <a className="orig-source" href={source}>Original source</a> : null}
              </div>
              <aside className="orig-aside">
                <span>{asideTitle}</span>
                <strong>{asideItems.length || cards.length || sections.length}</strong>
                <small>items mapped into the new site</small>
              </aside>
            </div>
          </div>
        </section>

        {cards.length ? (
          <section className="orig-cards">
            <div className="container">
              {cards.map((card) => (
                <a className="orig-card" href={card.href || "#"} key={card.title}>
                  {card.kicker ? <span>{card.kicker}</span> : null}
                  <strong>{card.title}</strong>
                  <p>{card.text}</p>
                  {card.meta ? <small>{card.meta}</small> : null}
                </a>
              ))}
            </div>
          </section>
        ) : null}

        {sections.length ? (
          <section className="orig-sections">
            <div className="container">
              <div className="orig-section-list">
                {sections.map((section) => (
                  <article className="orig-section" key={section.title}>
                    <h2>{section.title}</h2>
                    {section.text.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                    {section.items?.length ? (
                      <div className="orig-chip-grid">
                        {section.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
              {asideItems.length ? (
                <aside className="orig-directory">
                  <span>{asideTitle}</span>
                  {asideItems.map((item) => (
                    <b className="orig-directory-item" key={item}>{item}</b>
                  ))}
                </aside>
              ) : null}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}

