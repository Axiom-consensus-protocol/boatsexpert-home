type HtmlFragmentProps = {
  html: string;
  label: string;
};

export function HtmlFragment({ html, label }: HtmlFragmentProps) {
  return (
    <div
      className="legacy-fragment"
      data-legacy-fragment={label}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
