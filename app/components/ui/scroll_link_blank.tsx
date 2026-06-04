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
const ScrollLinkBlank = ({ children, ...props }: ScrollLinkProps) => {
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
            <p className='text-sm'>{children}</p>
    </Link>
  );
};
export default ScrollLinkBlank;
