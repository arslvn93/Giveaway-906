export const prizeImages = [
  "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1573050751704-2899d6c4d4ae?ixlib=rb-4.0.3"
];

export const prizeContent = {
  title: "Exclusive Raptors Tickets Giveaway",
  description: "Score 2 lower bowl tickets to see the Toronto Raptors live on Friday, March 28th, 2025. Perfect for an unforgettable night out whether you're planning a date night or a family outing.",
  features: [
    "Enjoy premium lower bowl seating with an incredible view",
    "Experience the thrill of live NBA action",
    "Prize valued between $300 and $400",
    "Ideal for a memorable night out with friends or family",
    "Limited time offer – enter by March 21, 2025"
  ],
  value: "$300 - $400"
};

export const headerContent = {
  title: "Win 2 Raptors Tickets for an Unforgettable Night Out!",
  description: "Don't miss your chance to experience the thrill of live basketball! Enter now for a chance to win lower bowl tickets to see the Toronto Raptors in action on Friday, March 28th, 2025.",
  ctaText: "Enter Now",
  heroImage: prizeImages[0]
};

export const navigationContent = {
  title: "Raptors Tickets Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

export const howToEnterContent = {
  title: "How to Enter",
  description: "Follow these simple steps to enter our Raptors Tickets giveaway.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Provide your name and email address, then submit the form."
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Share the giveaway on social media for extra entries."
    },
    {
      icon: "Users",
      title: "Confirm Your Entry",
      description: "Check your email to confirm your participation."
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Takes less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Multiple Entries", 
      desc: "Share for extra chances" 
    },
    { 
      icon: "Gift", 
      title: "Exclusive Prize", 
      desc: "Valued at $300-$400" 
    }
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
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry."
  },
  currentEntries: 350
};

export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Review the rules and eligibility requirements for entering the Raptors Tickets Giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Residents of the Toronto area, 18 years and older, can enter this giveaway."
    },
    {
      question: "How long does the giveaway run?",
      answer: "The giveaway runs until March 21, 2025."
    },
    {
      question: "How will the winner be selected?",
      answer: "The winner will be chosen randomly from all valid entries."
    },
    {
      question: "When and how will the winner be notified?",
      answer: "The winner will receive an email notification within 48 hours after the giveaway ends and must respond within 72 hours."
    },
    {
      question: "How many times can I enter?",
      answer: "Each participant may enter once. Additional entries can be earned through social media shares (up to 3 extra entries)."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes, all submitted information is secured and used only for verifying your entry."
    }
  ],
  imageUrl: "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media to earn extra entries",
    "Stay tuned for the announcement of the winner"
  ],
  importantNotice: "Winners will be notified via the email provided. Please check your inbox and spam folder after the giveaway ends.",
  supportEmail: "arslan@salesgenius.co",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF"
};

export const contactContent = {
  title: "Get In Touch",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  brokerage: {
    name: "Sales Genius Realty",
    address: "Toronto, Ontario"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

export const footerContent = {
  aboutText: "Sales Genius Realty offers exclusive opportunities—whether it's experiencing live sports or exploring unique real estate insights.",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  quickLinks: ["Home", "About", "Listings", "Contact", "Privacy Policy"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "Sales Genius Realty",
    address: "Toronto, Ontario"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "Sales Genius Realty",
  privacyPolicyText: "Privacy Policy"
};

export const countdownContent = {
  endDate: new Date("March 21, 2025")
};

export const colorScheme = {
  primary: {
    main: 'blue-600',
    light: 'blue-400',
    dark: 'blue-800',
    gradient: 'from-blue-500 to-blue-700',
    text: 'blue-700',
    textLight: 'blue-500',
    textDark: 'blue-900',
    hover: 'blue-700',
    border: 'blue-200',
    background: 'blue-50',
    accent: 'blue-100',
    accentDark: 'blue-300'
  },
  secondary: {
    main: 'white',
    text: 'gray-800',
    textLight: 'gray-600',
    textDark: 'gray-900',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100'
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100'
  },
  gradients: {
    header: 'from-blue-100/70 via-blue-50/40 to-transparent',
    countdownBg: 'from-blue-800 to-blue-950',
    countdownText: 'from-blue-200 to-blue-400',
    prizeTitle: 'from-blue-700 to-blue-500',
    button: 'from-blue-500 to-blue-600',
    buttonHover: 'from-blue-600 to-blue-700'
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(66,153,225,0.3)]'
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow'
  }
};