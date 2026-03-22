import type { ReactNode } from "react";

function formatInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const boldRe = /\*\*(.+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = boldRe.exec(text)) !== null) {
    if (m.index > last) {
      out.push(text.slice(last, m.index));
    }
    out.push(
      <strong key={key++} className="font-semibold text-gray-800">
        {m[1]}
      </strong>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    out.push(text.slice(last));
  }
  return out.length ? out : [text];
}

function paragraphWithEmail(text: string, key: number): ReactNode {
  const emailMatch = text.match(
    /^(Email:\s*)([\w.-]+@[\w.-]+\.\w+)(\s*)$/i,
  );
  if (emailMatch) {
    const [, prefix, email, suffix] = emailMatch;
    return (
      <p key={key} className="text-gray-600">
        {prefix}
        <a
          href={`mailto:${email}`}
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          {email}
        </a>
        {suffix}
      </p>
    );
  }
  return (
    <p key={key} className="text-gray-600">
      {formatInline(text)}
    </p>
  );
}

export function LegalMarkdown({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const nodes: ReactNode[] = [];
  let block: string[] = [];
  let nodeKey = 0;

  const flushBlock = () => {
    if (block.length === 0) return;
    const text = block.join(" ").trim();
    block = [];
    if (!text) return;
    nodes.push(paragraphWithEmail(text, nodeKey++));
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBlock();
      continue;
    }
    if (trimmed.startsWith("######")) {
      flushBlock();
      const title = trimmed.replace(/^######\s*/, "").trim();
      nodes.push(
        <h2
          key={nodeKey++}
          className="scroll-mt-28 text-base font-bold tracking-tight text-gray-900"
        >
          {title}
        </h2>,
      );
      continue;
    }
    if (trimmed.startsWith("### ") && !trimmed.startsWith("####")) {
      flushBlock();
      const title = trimmed.replace(/^###\s*/, "").trim();
      nodes.push(
        <h3
          key={nodeKey++}
          className="scroll-mt-24 text-lg font-semibold text-gray-900"
        >
          {formatInline(title)}
        </h3>,
      );
      continue;
    }
    if (trimmed.startsWith("## ") && !trimmed.startsWith("###")) {
      flushBlock();
      const title = trimmed.replace(/^##\s*/, "").trim();
      nodes.push(
        <h2
          key={nodeKey++}
          className="scroll-mt-28 text-2xl font-bold tracking-tight text-gray-900"
        >
          {formatInline(title)}
        </h2>,
      );
      continue;
    }
    block.push(trimmed);
  }
  flushBlock();

  return <div className="space-y-4">{nodes}</div>;
}
