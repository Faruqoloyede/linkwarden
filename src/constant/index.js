import { check, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12 } from "../assets";

export const navlinks = [
    {
        id: "features",
        title: "Features"
    },
    {
        id: "pricing",
        title: "Pricing"
    },
    {
        id: "faqs",
        title: "FAQS"
    },
    {
        id: "docs",
        title: "DOCS"
    },
    {
        id: "blog",
        title: "Blog"
    },
]

// export const preserve = [
//     {
//         icon: check,
//         text: "Collect webpages and bookmarks from any browser."
//     },
//     {
//         icon: check,
//         text: "Safeguard your webpages against "
//     },
//     {
//         icon: check,
//         text: "Download your archived webpages."
//     },
    
// ]

export const features = [
    {
        id: 1,
        icon: check,
        text: "Collect webpages and bookmarks from any browser."
    },
    {
        id: 2,
        icon: check,
        text: "Organize Links with Collections, Sub-Collections, and Tags."
    },
    {
        id: 3,
        icon: check,
        text: "Create new Collections to group related Links.."
    },
]

// export const share = [
//     {
//         icon: check,
//         text: "Collaborate on gathering resources under a Collection."
//     },
//     {
//         icon: check,
//         text: "Assign customizable permissions to each member."
//     },
//     {
//         icon: check,
//         text: "Easily share curated collections with the world."
//     },
// ]

// export const service = [
//     {
//         icon: opensource,
//         title: "Open Source, Self-Hostable",
//         text: "We published our entire source code to GitHub for transparency and trust."
//     },
//     {
//         icon: responsive,
//         title: "Responsive Design",
//         text: "Designed for every screen size, from widescreen monitors down to smartphones."
//     },
//     {
//         icon: pin,
//         title: "Pin your Favorite links",
//         text: "Pin your favorite webpages to the dashboard for easy access anytime."
//     },
//     {
//         icon: extension,
//         title: "Browser Extension",
//         text: "Collect webpages directly from your browser with our open-source extension."
//     },
//     {
//         icon: search,
//         title: "Powerful Search",
//         text: "You can search and filter all your curated contents across all your collections effortlessly."
//     },
//     {
//         icon: down,
//         title: "Installable PWA for Mobile",
//         text: "App-like experience across devices with PWA support, ensuring optimal performance and accessibility for all users."
//     },
// ]

// export const Personal = [
//     {
//         id: 1,
//         icon: bookmark,
//         text: "Bookmark Organization",
//         content: "Store and categorize links to articles, blog posts, and online content for easy retrieval."
//     },
//     {
//         id: 2,
//         icon: group,
//         text: "Seamless Collaboration",
//         content: "Share essential links and references among your friend or even publicly."
//     },
//     {
//         id: 3,
//         icon: down,
//         text: "Content Preservation",
//         content: "Keep a permanent snapshot of links regardless of any changes to the original content."
//     },
    
//     {
//         id: 4,
//         icon: search,
//         text: "Easy Access",
//         content: "Conveniently revisit favorite or important online materials at any time."
//     },
   
// ]

// export const design = [
//     {
//         id:1,
//         icon:category,
//         text: "Centralized Resource Collection",
//         content: "Aggregate and organize diverse design inspirations in one place."
//     },
//     {
//         id:2,
//         icon:group,
//         text: "Collaboration and Sharing",
//         content: "Teams can share and build a design resource pool together."
//     },
//     {
//         id:3,
//         icon:tag,
//         text: "Tagging and Organization",
//         content: "Use tags and categories for quick inspiration retrieval."
//     },
//     {
//         id:4,
//         icon:responsive,
//         text: "Access Anywhere",
//         content: "Save and access design inspirations from any device."
//     },
// ]

// export const research = [
//     {
//         id:1,
//         icon:bookmark,
//         text: "Resource Gathering",
//         content: "Gather and organize academic links and articles."
//     },
//     {
//         id:2,
//         icon:down,
//         text: "Permanent Access",
//         content: "Archive webpages to ensure continuous access despite changes or removal of online sources."
//     },
//     {
//         id:3,
//         icon:group,
//         text: "Collaborative Research",
//         content: "Pool resources and references through shared collaboration features."
//     },
//     {
//         id:4,
//         icon:search,
//         text: "Easy Access",
//         content: "Quickly store and access information through organized tags and categories."
//     },
// ]

// export const project = [
//     {
//         id:1,
//         icon:bookmark,
//         text: "Team Resource Gathering",
//         content: "Collectively gather and organize webpages relevant to a project."
//     },
//     {
//         id:2,
//         icon:group,
//         text: "Seamless Collaboration",
//         content: "Share essential resources and references among team members."
//     },
//     {
//         id:3,
//         icon:power,
//         text: "Project Efficiency",
//         content: "Access a centralized resource hub for all project-related information."
//     },
//     {
//         id:4,
//         icon:sync,
//         text: "Information Sharing",
//         content: "Ensure all team members have access to the same materials."
//     },
// ]

export const plans = [
    {
        id: 0,
        caption:"Self-Hosted" ,
        monthly: "2",
        yearly: "5",
        feature: [
            "Hosted by yourself.",
            "Unlimited Links.",
            "Unlimited Collections.",
            "Unlimited Tags.",
            "All the premium features."
        ]
    },
    {
        id: 1,
        caption: "Cloud",
        monthly: 3,
        yearly: 7,
        title: "Per User",
        feature: [
            "Hosted by us.",
            "Up to 30,000 Links.",
            "Up to 30,000 Links.",
            "Unlimited Collections.",
            "All the premium features.",
            "Priority support.",
            "Automatic updates.",
            "Support open source!"

        ]

    },
    {
        id: 2,
        caption: "Enterprise",
        monthly: 10,
        yearly: 15,
        title: "Custom",
        feature: [
            "Hosted by us.",
            "Unlimited Links.",
            "Up to 30,000 Links.",
            "Unlimited Collections.",
            "Unlimited Tags.",
            "All the premium",
            "Priority support.",
            "Automatic updates.",
            "Fully customizable instance.",
            "Single Sign-On (SSO).",
            "Support open source!"

        ]

    },
    
]

export const faq = [
    {
        question:"How can i try out the product?",
        answer: "You can try out Linkwarden Cloud for free by signing up for a 14-day trial. The reason we require a credit card is to prevent spam."
    },
    {
        question:"Why use the paid plan when i can already self host it?",
        answer: "The paid plan provides automatic updates, priority support, and access to the latest features, saving you time and effort. Plus, your subscription helps us continue improving Linkwarden for everyone!"
    },
    {
        question:"How does the free trial work?",
        answer: "Linkwarden Cloud's free trial will last for 14 days from the purchase date. The trial gives you full access to all features in that plan. At the end of the trial, you will be billed the regular amount. You can cancel your trial at any time within the trial period at no cost."
    },
    {
        question:"How will i be billed?",
        answer: "You will be billed every month. The payment is being handled by"
    },
    {
        question:"Where is my data stored?",
        answer: "Our primary server is hosted in Hetzner's data center in Virginia, USA. For storing the archives generated by each webpages, we use Digital Ocean's Spaces located in New York City, which is backed by AWS S3."
    },
    {
        question:"Can i have a customized instance designed specifically for my needs",
        answer: "Absolutely! We offer a custom plan tailored to your specific requirements. Contact us at",
        link: "support@linkwarden.app"
    },
    {
        question:"How can i cancel my plan?",
        answer: "To cancel your plan, follow these steps:",
        answers:[
            {
                list:"Log in to your account",
            },
            {
                list:"Click on your profile photo, then select Setting",
            },
        ]
    },
]

export const footer = [
    {
        id: "features",
        title: "Features"
    },
    {
        id: "pricing",
        title: "Pricing"
    },
    {
        id: "faqs",
        title: "FAQS"
    },
    {
        id: "docs",
        title: "DOCS"
    },
    {
        id: "blog",
        title: "Blog"
    },
    {
        id: "blog",
        title: "Terms Of Service"
    },
    {
        id: "blog",
        title: "Privacy Policy"
    },
]

export const service = [
    {
        id:1,
        icon: f1,
        title: "Open Source, Self-hostable",
        content: "Our source code is on GitHub for easy deployment on your machine."
    },
    {
        id:2,
        icon: f2,
        title: "Responsive Design",
        content: "Responsive design for all screens, from widescreen to smartphones."
    },
    {
        id:3,
        icon: f3,
        title: "Powerful Search",
        content: "Effortlessly search and filter curated content across all collections."
    },
    {
        id:4,
        icon: f4,
        title: "Pin your favourite pages",
        content: "Pin your favourite pages"
    },
    {
        id:5,
        icon: f5,
        title: "Privacy Friendly",
        content: "Privacy is a fundamental human right. We won't sell your data to third parties."
    },
    {
        id:6,
        icon: f6,
        title: "Import & Export your data",
        content: "You can import and export your data easily from the settings."
    },
    {
        id:7,
        icon: f7,
        title: "Dark & Light mode Supported",
        content: "Easily toggle between dark and light mode, whichever you prefer."
    },
    {
        id:8,
        icon: f8,
        title: "Browser Extension",
        content: "Collect webpages directly from your browser with our open-source extension."
    },
    {
        id:9,
        icon: f9,
        title: "Bulk Actions",
        content: "Edit or delete multiple items at once."
    },
    {
        id:10,
        icon: f10,
        title: "Secure API Integration",
        content: "Connect and secure your integrations using access tokens to create custom solutions and automate with ease."
    },
    {
        id:11,
        icon: f11,
        title: "Installable PWA for Mobile",
        content: "Our source code is on GitHub for easy deployment on your machine."
    },
    {
        id:12,
        icon: f12,
        title: "And Many More Features...",
        content: "We're constantly improving and got tons of updates planned, some are outlined in our public roadmap."
    },
]
