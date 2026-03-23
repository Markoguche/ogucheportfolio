// src/components/JsonLd.tsx
export const JsonLd = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark Oguche",
    url: "https://markoguche.dev",
    jobTitle: "Frontend Engineer",
    worksFor: { "@type": "Organization", name: "ServeLead Global" },
    sameAs: [
      "https://github.com/Markoguche",
      "http://linkedin.com/in/mark-oguche9",
      "https://x.com/_otmark",
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "Frontend Development", "Web Animations", "GSAP", "Framer Motion"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
