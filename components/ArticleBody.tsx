import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

interface ArticleBodyProps {
  content: string;
  excerpt?: string;
}

function parseTableRow(row: string): string[] {
  return row
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

export function renderInlineFormatted(text: string): React.ReactNode {
  // Split by bold (**...**), italic (*...*), code (`...`), and links ([text](url))
  const parts = text.split(/(\*\*.*?\*\*|\*[^*\s][^*\n]*?\*|`.*?`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={index} className="italic text-slate-200">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const linkClass =
        'text-indigo-300 underline underline-offset-4 hover:text-indigo-200 transition-colors';
      if (href.startsWith('/')) {
        return (
          <Link key={index} href={href} className={linkClass}>
            {label}
          </Link>
        );
      }
      const isExternal = href.startsWith('http');
      return (
        <a
          key={index}
          href={href}
          className={linkClass}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({ content, excerpt }) => {
  return (
    <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
      {excerpt && (
        <div className="text-base sm:text-lg font-medium text-slate-200 italic border-l-4 border-indigo-500 pl-4 sm:pl-6 py-2 bg-indigo-950/30 rounded-r-2xl">
          &ldquo;{excerpt}&rdquo;
        </div>
      )}

      {content.split('\n\n').map((paragraph, idx) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return null;

        if (trimmed === '---') {
          return <hr key={idx} className="border-slate-800/80 my-6" />;
        }

        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={idx}
              className="font-space font-extrabold text-2xl sm:text-3xl text-white pt-6 pb-2 border-b border-slate-800/80"
            >
              {renderInlineFormatted(trimmed.replace('## ', ''))}
            </h2>
          );
        }

        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="font-space font-extrabold text-xl sm:text-2xl text-white pt-4 pb-1 border-b border-slate-800/80"
            >
              {renderInlineFormatted(trimmed.replace('### ', ''))}
            </h3>
          );
        }

        if (trimmed.startsWith('#### ')) {
          return (
            <h4
              key={idx}
              className="font-space font-bold text-lg sm:text-xl text-indigo-300 pt-3"
            >
              {renderInlineFormatted(trimmed.replace('#### ', ''))}
            </h4>
          );
        }

        if (trimmed.startsWith('> [!CTA]')) {
          const ctaBody = trimmed
            .replace(/^>\s*\[!CTA\]\s*/, '')
            .split('\n')
            .map((line) => line.trim().replace(/^>\s*/, ''))
            .join(' ');
          return (
            <div
              key={idx}
              className="my-6 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-emerald-950/40 border border-indigo-500/40 p-5 sm:p-6 shadow-lg"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed m-0">
                  {renderInlineFormatted(ctaBody)}
                </p>
              </div>
            </div>
          );
        }

        if (trimmed.startsWith('> ')) {
          const quoteText = trimmed
            .split('\n')
            .map((line) => line.trim().replace(/^>\s*/, ''))
            .join(' ');
          return (
            <blockquote
              key={idx}
              className="border-l-4 border-indigo-500 pl-4 py-2 my-4 italic text-slate-200 bg-indigo-950/20 rounded-r-xl"
            >
              {renderInlineFormatted(quoteText)}
            </blockquote>
          );
        }

        const lines = trimmed
          .split('\n')
          .map((line) => line.trim())
          .filter(Boolean);
        if (
          lines.length >= 3 &&
          lines[0].startsWith('|') &&
          /^\|[\s:|-]+\|$/.test(lines[1])
        ) {
          const headers = parseTableRow(lines[0]);
          const rows = lines.slice(2).map(parseTableRow);
          return (
            <div
              key={idx}
              className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 my-6 shadow-lg"
            >
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead className="bg-slate-900/95 border-b border-slate-800">
                  <tr>
                    {headers.map((header, hIdx) => (
                      <th
                        key={hIdx}
                        scope="col"
                        className="px-4 py-3.5 font-space font-bold text-white whitespace-nowrap"
                      >
                        {renderInlineFormatted(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {rows.map((cells, rIdx) => (
                    <tr
                      key={rIdx}
                      className="hover:bg-slate-800/30 transition-colors"
                    >
                      {cells.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-4 py-3.5 leading-relaxed ${
                            cIdx === 0
                              ? 'font-semibold text-white whitespace-nowrap'
                              : cIdx === headers.length - 1
                                ? 'text-indigo-200'
                                : 'text-slate-300'
                          }`}
                        >
                          {renderInlineFormatted(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed
            .split('\n')
            .filter((line) => /^\d+\.\s/.test(line.trim()));
          return (
            <ol key={idx} className="space-y-3 text-slate-300 pl-1">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-950/90 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">
                    {renderInlineFormatted(item.trim().replace(/^\d+\.\s*/, ''))}
                  </span>
                </li>
              ))}
            </ol>
          );
        }

        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').filter((line) => line.trim().startsWith('* ') || line.trim().startsWith('- '));
          return (
            <ul key={idx} className="space-y-2 text-slate-300 pl-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">
                    {renderInlineFormatted(item.replace(/^\s*[\*\-]\s*/, ''))}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="text-slate-300 leading-relaxed">
            {renderInlineFormatted(trimmed)}
          </p>
        );
      })}
    </div>
  );
};
