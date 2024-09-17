"use client";
import React from "react";
import Image from "next/image";
import hamburger from "/icons/hamburger.svg";
import Icon from "/icons/logo.svg"; // Make sure to import Icon here
import Link from "next/link";
import { sidebarLinks } from "/constants/index.ts";
import { cn } from "/lib/utils.ts";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "/src/components/ui/sheet.tsx";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={hamburger}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="cursor-pointer flex items-center gap-1 px-4"
            >
              <Image src={Icon} width={34} height={34} alt="VaultView" />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                VaultView
              </h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);

                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          href={item.route}
                          key={item.label}
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })}
                        >
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />

                          <span
                            className={cn(
                              "text-16 font-semibold text-black-2",
                              {
                                "text-white": isActive,
                              }
                            )}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                  USER
                </nav>
              </SheetClose>
              Footer
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
