'use client'
// components/ScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { buttonVariants } from "./button";
import { Icons } from "./icons";
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLinkGhost = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
    //   top: elem?.getBoundingClientRect().bottom,
      behavior: "smooth",
    });
  };
  return (
    <Link scroll={false} {...props} onClick={handleScroll}>
        <div className='flex flex-row items-center justify-center gap-1 px-4 py-2 text-muted-foreground hover:underline'>
            <p className='text-sm'>{children}</p>
            <Icons.arrowDown className='h-4 w-4'/>
        </div>
    </Link>
  );
};
export default ScrollLinkGhost;
