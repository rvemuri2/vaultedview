"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "/public/icons/logo.svg";
import { sidebarLinks } from "/constants/index.ts";
import { cn } from "/lib/utils.ts";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src={Icon}
            width={34}
            height={34}
            alt="VaultView"
            className="size-[36px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">VaultView</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link flex items-center gap-2", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <span
                className={cn("sidebar-label", { "!text-white": isActive })}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
        User
      </nav>
      Footer
    </section>
  );
};

export default Sidebar;
