"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const links: { title: string; link: string; imageUrl : string; imageUrlBlack : string }[] = [
    { title: "Dashboard", link: "/",imageUrl : "/icons/home.png", imageUrlBlack : "/icons/home-black.png"},
    { title: "Produits", link: "/products" ,imageUrl : "/icons/product.png", imageUrlBlack : "/icons/product-black.png"},
    { title: "Utilisateurs", link: "/users",imageUrl : "/icons/group.png" , imageUrlBlack : "/icons/group-black.png"},
    { title: "Commandes", link: "/sales",imageUrl : "/icons/sale.png" , imageUrlBlack : "/icons/sale-black.png"},
    { title: "Commentaires", link: "/comments",imageUrl : "/icons/comment.png", imageUrlBlack : "/icons/comments-black.png" },
  ];

  const pathname = usePathname();

  return (
    <nav className="w-[400px] h-screen border-r border-main-gray px-10 py-40 flex flex-col gap-4 ">
      {links.map((elem, index) => (
        <Link
          href={elem.link}
          key={index}
          className={`flex gap-6 items-center py-6 px-8 rounded-2xl  transition-all  bg-main-secondary font-bold   ${
            elem.link === pathname ? "bg-opacity-1 text-black " : "bg-opacity-0 text-main-gray"
          }`}
        >
          <Image src={elem.link === pathname ? elem.imageUrlBlack : elem.imageUrl} alt={elem.title} width={20} height={20} className=""/>
          {elem.title}
        </Link>
      ))}
    </nav>
  );
}
