import type { FooterItem, MainNavItem } from "../types"



export type SiteConfig = typeof siteConfig


export const siteConfig = {
  name: "Awaj ET",
  description:
    "All in one digital marketing and sales platform with everything included to boost your ad campaigns.",
  url: "https://www.awajet.com",
  ogImage: 'https://drive.google.com/file/d/1SA5WLIdnOdeXQcx-6-W-0UfgXyDUhhsT/view?usp=sharing',
  mainNav: [
    {
      title: "Pricing",
      items: [
        {
          title: "Monthly Plans",
          href: "/pricing",
          description: "Monthly plans and pricings",
          items: [],
        },
        // {
        //   title: "Awaj Meda",
        //   href: "/pricing/awaj-meda",
        //   description: "Top up your Awaj Meda coins here.",
        //   items: [],
        // },
        {
          title: "Packages | ጥቅሎች",
          href: "/pricing/deals",
          description: "Check recent packages",
          items: [],
        },
      ],
    },
    // ...productCategories.map((category) => ({
    //   title: category.title,
    //   items: [
    //     {
    //       title: "All",
    //       href: `/categories/${slugify(category.title)}`,
    //       description: `All ${category.title}.`,
    //       items: [],
    //     },
    //     ...category.subcategories.map((subcategory) => ({
    //       title: subcategory.title,
    //       href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
    //       description: subcategory.description,
    //       items: [],
    //     })),
    //   ],
    // })),
    // {
    //   title: "AI",
    //   items: [
    //     {
    //       title: "Gallery",
    //       href: "/ai/gallery",
    //       description: "Selected generative results.",
    //       items: [],
    //     },
    //     {
    //       title: "Prompts",
    //       href: "/ai/prompts",
    //       description: "Browse prompt lab and collections.",
    //       items: [],
    //     },
    //     {
    //       title: "Image Generation",
    //       href: "/ai/image/text-to-image",
    //       description: "Generate AI Images.",
    //       items: [],
    //     },
    //     {
    //       title: "Text Generation",
    //       href: "/ai/conversations",
    //       description: "Compose AI Texts",
    //       items: [],
    //     },
    //     {
    //       title: "Audio Generation",
    //       href: "/ai/audio",
    //       description: "Generate AI Audios.",
    //       items: [],
    //     },
    //     {
    //       title: "Expert AI",
    //       href: "/ai/expert",
    //       description: "Conversations with expert AI characters.",
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: "Resources",
    //   items: [
    //     {
    //       title: "Downloads",
    //       href: "/resources/downloads",
    //       description: "Awaj ET applications and plugins.",
    //       icon:"book",
    //       items: [],
    //     },
    //     {
    //       title: "Getting started",
    //       href: "/resources/getting_started",
    //       description: "Instructions to get you up and running.",
    //       items: [],
    //     },
    //     {
    //       title: "Case studies",
    //       href: "/resources/awaj_case_studies",
    //       description: "Case studies on selected projects.", 
    //       items: [],
    //     },
    //     {
    //       title: "Content Hub",
    //       href: "/resources/content",
    //       description: "Collection of free giveaway contents.",
    //       items: [],
    //     },
    //     {
    //       title: "Overview Tour",
    //       href: "/resources/overview",
    //       description: "Quick tour of the Awaj ET software.",
    //       items: [],
    //     },
    //     {
    //       title: "Learning Hub",
    //       href: "/resources/learning/content",
    //       description: "Collection of Awaj learning materials.",
    //       items: [],
    //     },
    //   ],
    // },
    {
      title: "Company",
      items: [
        {
          title: "About us",
          href: "/about",
          description: "Get to know Awaj ET.",
          items: [],
        },
        {
          title: "Help center",
          href: "/help_center",
          description: "Get answers from our support team.",
          items: [],
        },
        {
          title: "For influencers",
          href: "/influencers",
          description: "Opportunity for creators & influencers.",
          items: [],
        },
        {
          title: "Career",
          href: "/team",
          description: "Teams and carrer openings",
          items: [],
        },
        // {
        //   title: "Insight reports",
        //   href: "/reports",
        //   description: "Check from our list one-time orders.",
        //   items: [],
        // },
        // {
        //   title: "FAQs",
        //   href: "/faqs",
        //   description: "Build your own custom campaign.",
        //   items: [],
        // },
        // {
        //   title: "Blog",
        //   href: "/blog",
        //   description: "Check the latest from Awaj ET.",
        //   items: [],
        // },
        {
          title: "Contact",
          href: "/contact",
          description: "Contact us, we are online 24/7.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],

}
