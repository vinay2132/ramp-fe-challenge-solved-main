import React from "react";

type CardProps = {
  title?: string;
  text?: string;
  emphasized?: boolean;
};

export function Card({ title = "", text = "", emphasized = false }: CardProps) {
  if (!(title || text)) return null;

  const classes = ["Card", emphasized && "Card--emphasized"]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      {title && <h2 className="Card__Title">{title}</h2>}
      <p className="Card__Text">{text}</p>
    </section>
  );
}
