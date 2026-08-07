// Renders CMS heading text to safe HTML: *words* become <em>words</em>,
// line breaks become <br />. Input is escaped first, so editors can't
// inject markup.
const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function formatHeading(text: string): string {
  return escapeHtml(text)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />');
}

// Splits a textarea into paragraphs on blank lines.
export function paragraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
