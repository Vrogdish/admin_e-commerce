import Link from "next/link";
import React, { ReactNode } from "react";
import { URL, Url } from "url";

interface Props {
  title: string;
  className?: string;
  children: ReactNode;
  link?: string;
}

export default function Card({ title, className, children, link }: Props) {
  return (
    <div className={` p-10 m-10 rounded-2xl bg-main-primary flex flex-col justify-between ${className} `}>
      <div>
        <h2 className="font-bold text-lg">{title} </h2>
        <div className="my-6">{children}</div>
      </div>
      <div className="flex justify-end">
        {link && (
          <Link
            href={`${link}`}
            className="bg-main-secondary text-black p-3 rounded-xl font-bold "
          >
            Voir le détail
          </Link>
        )}
      </div>
    </div>
  );
}
