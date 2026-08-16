import React from 'react';

interface ArticleBodyProps {
  content: string;
  excerpt?: string;
}

export function renderInlineFormatted(text: string): React.ReactNode {
  // Split by bold (**...**) and code (`...`)
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
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

        if (trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').filter((line) => line.trim().startsWith('* '));
          return (
            <ul key={idx} className="space-y-2 text-slate-300 pl-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">
                    {renderInlineFormatted(item.replace(/^\s*\*\s*/, ''))}
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
