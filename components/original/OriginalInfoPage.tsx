import type { OriginalCard, OriginalSection } from "@/lib/original-site-data";

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
      <style data-original-info-style dangerouslySetInnerHTML={{ __html: originalInfoCss }} />
      <main className="orig-page">
        <section className="orig-hero">
          <div className="container">
            <div className="orig-crumbs">
              <a href="/">Home</a>
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

const originalInfoCss = `
  .orig-page{
    --orig-bg:#FFFCF6;
    --orig-ink:#0A2540;
    --orig-muted:rgba(10,37,64,.64);
    --orig-line:rgba(10,37,64,.14);
    --orig-card:#fff;
    background:var(--orig-bg);
    color:var(--orig-ink);
  }
  .orig-page .container{
    max-width:var(--maxw-wide);
    padding-left:var(--pad-wide);
    padding-right:var(--pad-wide);
  }
  .orig-hero{
    padding:52px 0 64px;
    background:
      linear-gradient(90deg, rgba(2,9,18,.88), rgba(2,9,18,.62)),
      url("/assets/boats/hero-DSC07340-1.jpg") center/cover;
    color:#F4EFE6;
  }
  .orig-crumbs{
    display:flex;
    gap:10px;
    margin-bottom:34px;
    color:rgba(244,239,230,.62);
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .orig-crumbs a,.orig-crumbs b{ color:inherit; }
  .orig-crumbs b{ color:#D6A056; }
  .orig-hero-grid{
    display:grid;
    grid-template-columns:minmax(0,1fr) 230px;
    gap:36px;
    align-items:end;
  }
  .orig-ey{
    margin-bottom:14px;
    color:#D6A056;
    font-family:var(--mono);
    font-size:10.5px;
    letter-spacing:.2em;
    text-transform:uppercase;
  }
  .orig-hero h1{
    max-width:940px;
    margin:0;
    font-family:var(--display);
    font-size:82px;
    line-height:.9;
    letter-spacing:-.03em;
    font-weight:400;
  }
  .orig-hero p{
    max-width:760px;
    margin:22px 0 0;
    color:rgba(244,239,230,.76);
    font-family:var(--serif);
    font-size:18px;
    line-height:1.55;
  }
  .orig-source{
    min-height:46px;
    margin-top:28px;
    padding:0 16px;
    display:inline-flex;
    align-items:center;
    border:1px solid rgba(244,239,230,.22);
    background:#C68B3D;
    color:#FFFCF6;
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .orig-aside{
    min-height:190px;
    padding:22px;
    display:grid;
    align-content:space-between;
    border:1px solid rgba(244,239,230,.16);
    background:rgba(7,26,44,.72);
  }
  .orig-aside span,.orig-aside small{
    color:rgba(244,239,230,.62);
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .orig-aside strong{
    color:#D6A056;
    font-family:var(--display);
    font-size:72px;
    line-height:.82;
    font-weight:400;
  }
  .orig-cards,.orig-sections{
    padding:58px 0 72px;
  }
  .orig-cards .container{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:16px;
  }
  .orig-card{
    min-height:260px;
    padding:24px;
    display:flex;
    flex-direction:column;
    gap:12px;
    border:1px solid var(--orig-line);
    background:var(--orig-card);
    color:var(--orig-ink);
    box-shadow:0 28px 74px -64px rgba(10,37,64,.65);
  }
  .orig-card span,.orig-card small{
    color:#946421;
    font-family:var(--mono);
    font-size:9px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .orig-card strong{
    font-family:var(--display);
    font-size:34px;
    line-height:.98;
    font-weight:400;
  }
  .orig-card p,.orig-section p{
    color:var(--orig-muted);
    font-family:var(--serif);
    font-size:16px;
    line-height:1.55;
  }
  .orig-sections .container{
    display:grid;
    grid-template-columns:minmax(0,1fr) 320px;
    gap:28px;
    align-items:start;
  }
  .orig-section-list{
    display:grid;
    gap:18px;
  }
  .orig-section{
    padding:28px;
    border:1px solid var(--orig-line);
    background:var(--orig-card);
  }
  .orig-section h2{
    margin:0 0 12px;
    font-family:var(--display);
    font-size:44px;
    line-height:.96;
    font-weight:400;
  }
  .orig-chip-grid{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin-top:18px;
  }
  .orig-chip-grid span{
    padding:8px 10px;
    border:1px solid var(--orig-line);
    color:#946421;
    background:#FFFCF6;
    font-family:var(--mono);
    font-size:9px;
    letter-spacing:.14em;
    text-transform:uppercase;
  }
  .orig-directory{
    position:sticky;
    top:122px;
    display:grid;
    gap:1px;
    border:1px solid var(--orig-line);
    background:var(--orig-line);
  }
  .orig-directory span,.orig-directory-item{
    min-height:42px;
    padding:0 14px;
    display:flex;
    align-items:center;
    background:var(--orig-card);
    color:var(--orig-ink);
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.12em;
    text-transform:uppercase;
  }
  .orig-directory span{
    background:#0A2540;
    color:#F4EFE6;
  }
  html[data-theme="night"] .orig-page{
    --orig-bg:#061827;
    --orig-ink:#F4EFE6;
    --orig-muted:rgba(232,221,201,.68);
    --orig-line:rgba(244,239,230,.15);
    --orig-card:#0B2238;
  }
  html[data-theme="night"] .orig-chip-grid span,
  html[data-theme="night"] .orig-directory-item{
    background:#071A2C;
    color:#F4EFE6;
  }
  @media(max-width:900px){
    .orig-hero-grid,.orig-sections .container{ grid-template-columns:1fr; }
    .orig-cards .container{ grid-template-columns:1fr 1fr; }
    .orig-hero h1{ font-size:56px; }
    .orig-directory{ position:static; }
  }
  @media(max-width:560px){
    .orig-hero{ padding:36px 0 44px; }
    .orig-hero h1{ font-size:42px; }
    .orig-cards .container{ grid-template-columns:1fr; }
    .orig-section h2{ font-size:34px; }
  }
`;
