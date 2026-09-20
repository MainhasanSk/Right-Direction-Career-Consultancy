import React from "react";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
  className = "",
}) {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
            light
              ? "bg-white/10 text-rdcc-cyan-light border border-white/20"
              : "bg-rdcc-cyan-ice text-rdcc-navy border border-rdcc-cyan-light"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rdcc-blue"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight ${
          light ? "text-white" : "text-rdcc-navy"
        }`}
      >
        {title}
      </h2>

      {/* Upward accent line with small arrow motif */}
      <div
        className={`flex items-center gap-2 mt-3 mb-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <div
          className={`h-1 w-12 rounded-full ${
            light ? "bg-rdcc-cyan" : "bg-rdcc-blue"
          }`}
        />
        <div
          className={`h-1 w-4 rounded-full ${
            light ? "bg-rdcc-gold" : "bg-rdcc-cyan"
          }`}
        />
        <span
          className={`text-xs font-bold leading-none ${
            light ? "text-rdcc-gold" : "text-rdcc-blue"
          }`}
        >
          ↗
        </span>
      </div>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
