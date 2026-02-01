import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  desc: string;
  features: string[];
  icon: string;
  background: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Business Websites",
    desc: "Professional and responsive websites for strong brand presence.",
    features: ["Corporate Sites", "Landing Pages", "SEO Friendly"],
    icon: "/images/icons/icon-bitcoin.svg",
    background: "bg-warning bg-opacity-20",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Portfolio Websites",
    desc: "Modern portfolios for individuals and professionals.",
    features: ["Personal Branding", "Responsive Design", "Fast Loading"],
    icon: "/images/icons/icon-ethereum.svg",
    background: "bg-light_grey",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "WordPress Development",
    desc: "High performance WordPress solutions with easy management.",
    features: ["Theme Customization", "Plugin Integration", "Security"],
    icon: "/images/icons/icon-bitcoin-circle.svg",
    background: "bg-warning bg-opacity-20",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Custom Web Solutions",
    desc: "Tailor-made web systems for business workflows.",
    features: ["Admin Panels", "Booking Systems", "ERP / CRM"],
    icon: "/images/icons/icon-litecoin.svg",
    background: "bg-light_grey",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Mobile App Development",
    desc: "Android & cross-platform mobile applications.",
    features: ["Business Apps", "Firebase", "API Integration"],
    icon: "/images/icons/icon-solana.svg",
    background: "bg-light_grey",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Secure online stores for digital sales growth.",
    features: ["Payment Gateway", "Order Tracking", "WooCommerce"],
    icon: "/images/icons/icon-dogecoin.svg",
    background: "bg-light_grey",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];


export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "Manage your portfolio",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Vault protection",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Mobile apps",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "100% Secure" },
  { title: "A Fraction of the Cost" },
  { title: "More Durable" },
  { title: "Easier to Use" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "24/7 Support",
    text: "Need help? Get your requests solved quickly via support team.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Community",
    text: "Join the conversations on our worldwide OKEx communities",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "Academy",
    text: "Learn blockchain and<br /> crypto for free.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Planning",
    text: "Map the project's scope and architecture",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Refinement",
    text: "Refine and improve your solution",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Prototype",
    text: "Build a working prototype to test your product",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Support",
    text: "Deploy the product and ensure full support by us",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
