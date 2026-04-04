import Script from "next/script";
import { publicLineTagId, shouldLoadLineTag } from "@/lib/app-config";

/**
 * LINE Tag base (LAP): init + page view. Matches LINE Business Manager snippet;
 * uses first-party-friendly loader from LINE CDN.
 */
export function LineTagScripts() {
  const id = publicLineTagId();
  if (!shouldLoadLineTag() || !id) return null;

  const inline = `(function(g,d,o){
  g._ltq=g._ltq||[];g._lt=g._lt||function(){g._ltq.push(arguments)};
  var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';
  var s=d.createElement('script');s.async=1;
  s.src=o||h+'/n/line_tag/public/release/v1/lt.js';
  var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
})(window, document);
_lt('init', {
  customerType: 'lap',
  tagId: '${id}'
});
_lt('send', 'pv', ['${id}']);`;

  const noscriptSrc = `https://tr.line.me/tag.gif?c_t=lap&t_id=${encodeURIComponent(id)}&e=pv&noscript=1`;

  return (
    <>
      <Script id="line-tag-base" strategy="afterInteractive">
        {inline}
      </Script>
      <noscript>
        {/*
          LINE LAP noscript beacon: must stay a plain <img> (no JS). next/image is
          inappropriate inside <noscript> and for this third-party pixel URL.
        */}
        {/* eslint-disable-next-line @next/next/no-img-element -- LAP noscript fallback; see comment above */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          alt=""
          src={noscriptSrc}
        />
      </noscript>
    </>
  );
}
