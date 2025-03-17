// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1627627256672-027a4613d028?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwzfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3", 
];

export const prizeContent = {
  title: "Lower Bowl Raptors Game Tickets",
  description:
    "Win two lower bowl tickets to the Toronto Raptors game on Friday, March 28th! Experience the thrill of live basketball with prime seating, perfect for an unforgettable date night or a fun family outing. This prize is valued between $300 and $400.",
  features: [
    "Prime lower bowl seating for an immersive game experience",
    "Exclusive access to one of Toronto's most exciting sports events",
    "Perfect for a memorable date night or family outing",
    "Quick and easy entry via our signup form",
    "A thrilling live sports experience you won't forget",
  ],
  value: "$300 - $400",
};

// Header section
export const headerContent = {
  title: "Win 2 Raptors Tickets!",
  description:
    "Secure your chance to witness the Toronto Raptors live from a prime lower bowl seat. Enter now for a chance to win tickets valued at $300 to $400. No purchase necessary!",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
};

// Navigation section
export const navigationContent = {
  title: "Raptors Giveaway",
  links: [
    { name: "Home", href: "#" },
    { name: "Prize Details", href: "#prize" },
    { name: "How to Enter", href: "#howToEnter" },
    { name: "Rules", href: "#rules" },
    { name: "Contact", href: "#contact" },
  ],
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description:
    "Getting started is easy! Follow these simple steps to enter our Raptors ticket giveaway.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Provide your name and email address to register your entry.",
    },
    {
      icon: "Clipboard",
      title: "Answer a Few Quick Questions",
      description:
        "Help us get to know you a bit better with a few fun qualifying questions.",
    },
    {
      icon: "CheckCircle",
      title: "Confirm Your Entry",
      description:
        "Check your email for a confirmation link and complete your entry.",
    },
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Entry in less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Multiple Entries", 
      desc: "Earn extra chances by sharing" 
    },
    { 
      icon: "Gift", 
      title: "Premium Prize", 
      desc: "Tickets valued at $300-$400" 
    },
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText:
      "By entering, you agree to our Terms & Conditions and Privacy Policy.",
  },
  successMessage: {
    title: "Entry Submitted!",
    description:
      "Thank you for entering! Check your email to confirm your entry and stay tuned for the draw.",
  },
  currentEntries: 125,
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description:
    "Please review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer:
        "Anyone 18 years or older residing in the Greater Toronto Area can enter this giveaway.",
    },
    {
      question: "How long does the giveaway run?",
      answer:
        "This giveaway kicks off on March 3rd, 2025 and entries are accepted until the draw on March 21st, 2025.",
    },
    {
      question: "How will the winner be selected?",
      answer:
        "The winner will be selected randomly from all valid entries using a certified random selection tool to ensure fairness.",
    },
    {
      question: "When and how will the winner be notified?",
      answer:
        "The winner will be notified via email within 48 hours after the draw on March 21st, 2025. They must respond within 72 hours to claim their prize.",
    },
    {
      question: "How many times can I enter?",
      answer:
        "Each person may enter once. Additional entries can be earned by sharing on social media (up to 3 extra entries).",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes, we take your privacy seriously. Your information will only be used for this giveaway and will not be shared with any third parties.",
    },
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Double-check your email address before submitting your entry.",
    "Share on social media for additional entry opportunities.",
    "Set a calendar reminder for the draw date on March 21st, 2025.",
  ],
  importantNotice:
    "All winners will be contacted via the email provided during entry. Please check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF",
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  brokerage: {
    name: "Toronto Sports Entertainment",
    address: "123 Arena Blvd, Toronto",
  },
  disclaimer:
    "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy",
};

// Footer section
export const footerContent = {
  aboutText:
    "The Raptors Giveaway specializes in offering exclusive experiences to sports fans across Toronto.",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  quickLinks: [
    "Home",
    "About",
    "Listings",
    "Contact",
    "Privacy Policy"
  ],
  newsletterText:
    "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "Toronto Sports Entertainment",
    address: "123 Arena Blvd, Toronto",
  },
  disclaimer:
    "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "The Sky Group Real Estate",
  privacyPolicyText: "Privacy Policy",
};

// Countdown
export const countdownContent = {
  endDate: new Date("March 21, 2025"),
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: "amber-600",
    light: "amber-400",
    dark: "amber-800",
    gradient: "from-amber-500 to-amber-700",
    text: "amber-700",
    textLight: "amber-500",
    textDark: "amber-900",
    hover: "amber-700",
    border: "amber-200",
    background: "amber-50",
    accent: "amber-100",
    accentDark: "amber-300",
  },
  secondary: {
    main: "white",
    text: "gray-700",
    textLight: "gray-600",
    textDark: "gray-800",
    border: "gray-200",
    background: "white",
    accent: "gray-100",
  },
  utility: {
    success: "green-600",
    successLight: "green-100",
    error: "red-600",
    errorLight: "red-100",
    warning: "yellow-600",
    warningLight: "yellow-100",
    info: "blue-600",
    infoLight: "blue-100",
  },
  gradients: {
    header: "from-amber-100/70 via-amber-50/40 to-transparent",
    countdownBg: "from-amber-800 to-amber-950",
    countdownText: "from-amber-200 to-amber-400",
    prizeTitle: "from-amber-700 to-amber-500",
    button: "from-amber-500 to-amber-600",
    buttonHover: "from-amber-600 to-amber-700",
  },
  shadows: {
    small: "shadow-md",
    medium: "shadow-lg",
    large: "shadow-xl",
    extraLarge: "shadow-2xl",
    glow: "shadow-[0_0_15px_rgba(251,191,36,0.3)]",
  },
  animations: {
    float: "animate-float",
    pulseSlow: "animate-pulse-slow",
    bounceSlow: "animate-bounce-slow",
  },
};