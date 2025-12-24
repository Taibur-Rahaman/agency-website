'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'bn' | 'en'

type TranslationKey =
  | 'navHome'
  | 'navNew'
  | 'navShowcase'
  | 'navServices'
  | 'navAbout'
  | 'navContact'
  | 'navAdmin'
  | 'navCta'
  | 'navAutomation'
  | 'heroTitleBrand'
  | 'heroLine1'
  | 'heroLine2'
  | 'heroSubtitle'
  | 'heroPrimaryCta'
  | 'heroSecondaryCta'
  | 'heroFeature1'
  | 'heroFeature2'
  | 'heroFeature3'
  | 'heroFeature4'
  | 'heroVisualLabel'
  | 'servicesTitle'
  | 'servicesSubtitle'
  | 'aboutTitle'
  | 'aboutSubtitle'
  | 'aboutWhoWeAre'
  | 'aboutWhoWeAreText1'
  | 'aboutWhoWeAreText2'
  | 'aboutMission'
  | 'aboutMissionText'
  | 'aboutVision'
  | 'aboutVisionText'
  | 'aboutTeamTitle'
  | 'contactTitle'
  | 'contactSubtitle'
  | 'contactCall'
  | 'contactEmail'
  | 'contactAddress'
  | 'contactHours'
  | 'contactFormName'
  | 'contactFormEmail'
  | 'contactFormMessage'
  | 'contactFormSubmit'
  | 'reviewsStories'
  | 'reviewsTitle'
  | 'reviewsSubtitle'
  | 'showcaseHeroTitle'
  | 'showcaseHeroSubtitle'
  | 'showcaseHeroDescription'
  | 'showcaseGetStarted'
  | 'showcaseLearnMore'
  | 'showcaseDigitalExcellence'
  | 'showcaseExcellenceDesc'
  | 'showcaseBeyondLimits'
  | 'showcaseLimitsDesc'
  | 'showcaseGrowthDriven'
  | 'showcaseGrowthDesc'
  | 'showcaseProvenSuccess'
  | 'showcaseSuccessDesc'
  | 'showcaseWorkTitle'
  | 'showcaseWorkSubtitle'
  | 'showcaseWebDevTitle'
  | 'showcaseWebDevDesc'
  | 'showcaseDesignTitle'
  | 'showcaseDesignDesc'
  | 'showcaseMarketingTitle'
  | 'showcaseMarketingDesc'
  | 'newPageTagline'
  | 'newPageTitle'
  | 'newPageTitleHighlight'
  | 'newPageDescription'
  | 'newPageBookCall'
  | 'newPageViewWork'
  | 'newPagePerfectFor'
  | 'newPageConversionSnapshot'
  | 'newPageDashboardTitle'
  | 'newPageLeads'
  | 'newPageSession'
  | 'newPageConversion'
  | 'newPageTestimonial'
  | 'newPageTestimonialAuthor'
  | 'newPageDoneForYou'
  | 'newPageDoneForYouText'
  | 'newPageLaunch14'
  | 'newPageLaunch14Text'
  | 'newPageWhatsApp'
  | 'newPageWhatsAppText'
  | 'newPageSelectedResults'
  | 'newPageResultsTitle'
  | 'newPageResultsDesc'
  | 'newPageEcommerce'
  | 'newPageFashionBrand'
  | 'newPageFashionResult'
  | 'newPageFashionDetails'
  | 'newPagePersonalBrand'
  | 'newPageCoachTitle'
  | 'newPageCoachResult'
  | 'newPageCoachDetails'
  | 'newPageB2BSaaS'
  | 'newPageSoftwareTitle'
  | 'newPageSoftwareResult'
  | 'newPageSoftwareDetails'
  | 'newPageSimpleProcess'
  | 'newPageProcessTitle'
  | 'newPageProcessDesc'
  | 'newPageStep1'
  | 'newPageStep1Title'
  | 'newPageStep1Text'
  | 'newPageStep2'
  | 'newPageStep2Title'
  | 'newPageStep2Text'
  | 'newPageStep3'
  | 'newPageStep3Title'
  | 'newPageStep3Text'
  | 'newPagePlanTitle'
  | 'newPagePlanDesc'
  | 'newPagePlanList1'
  | 'newPagePlanList2'
  | 'newPagePlanList3'
  | 'newPageFormName'
  | 'newPageFormContact'
  | 'newPageFormHelp'
  | 'newPageFormSubmit'
  | 'newPageFormResponse'
  | 'galleryWorkTitle'
  | 'galleryWorkSubtitle'
  | 'adminPortal'
  | 'adminTitle'
  | 'adminDescription'
  | 'adminNote'
  | 'adminNoteText'
  | 'adminBookings'
  | 'adminContent'
  | 'adminClientBookings'
  | 'adminAddBooking'
  | 'adminClient'
  | 'adminProjectType'
  | 'adminBudget'
  | 'adminStatus'
  | 'adminStatusNew'
  | 'adminStatusProgress'
  | 'adminStatusCompleted'
  | 'adminHomepageContent'
  | 'adminContentDesc'
  | 'adminHeroTitle'
  | 'adminHeroSubtitle'
  | 'adminLivePreview'
  | 'adminPreviewDesc'
  | 'newPageIndustry1'
  | 'newPageIndustry2'
  | 'newPageIndustry3'
  | 'newPageIndustry4'
  | 'storexHeroTitle'
  | 'storexHeroSubtitle'
  | 'storexHeroDescription'
  | 'storexHeroCta'
  | 'storexWhyTitle'
  | 'storexWhySubtitle'
  | 'storexReadyTitle'
  | 'storexReadySubtitle'
  | 'storexReadyCta'
  | 'storexSystemTitle'
  | 'storexSystemSubtitle'
  | 'storexSystemDescription'
  | 'storexViewFeatures'
  | 'storexFeature1Title'
  | 'storexFeature1Desc'
  | 'storexFeature2Title'
  | 'storexFeature2Desc'
  | 'storexFeature3Title'
  | 'storexFeature3Desc'
  | 'storexFeature4Title'
  | 'storexFeature4Desc'
  | 'storexFeature5Title'
  | 'storexFeature5Desc'
  | 'storexFeature6Title'
  | 'storexFeature6Desc'
  | 'storexStatsTitle'
  | 'storexStatsSubtitle'
  | 'storexStatsSave'
  | 'storexStatsCustomers'
  | 'storexStatsDesc'
  | 'storexLearnMore'
  | 'storexTestimonialsTitle'
  | 'storexTestimonialsSubtitle'
  | 'storexFinalCta'
  | 'storexFinalCtaDesc'
  | 'storexStartNow'
  | 'storexStatsSubtitle'
  | 'navWebDev'
  | 'navPricing'
  | 'navEcommerce'
  | 'webDevHeroTitle'
  | 'webDevHeroSubtitle'
  | 'webDevHeroDescription'
  | 'webDevHeroCta'
  | 'webDevWhyTitle'
  | 'webDevWhySubtitle'
  | 'webDevFeature1'
  | 'webDevFeature2'
  | 'webDevFeature3'
  | 'webDevFeature4'
  | 'webDevFeature5'
  | 'webDevFeature6'
  | 'webDevProcessTitle'
  | 'webDevProcessStep1'
  | 'webDevProcessStep2'
  | 'webDevProcessStep3'
  | 'webDevProcessStep4'
  | 'webDevTechTitle'
  | 'webDevTechSubtitle'
  | 'pricingTitle'
  | 'pricingSubtitle'
  | 'pricingPlan1Name'
  | 'pricingPlan1Price'
  | 'pricingPlan1Desc'
  | 'pricingPlan2Name'
  | 'pricingPlan2Price'
  | 'pricingPlan2Desc'
  | 'pricingPlan3Name'
  | 'pricingPlan3Price'
  | 'pricingPlan3Desc'
  | 'pricingFeature'
  | 'pricingCTA'
  | 'pricingContact'

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    navHome: 'Home',
    navNew: 'New',
    navShowcase: 'Showcase',
    navServices: 'Services',
    navAbout: 'About',
    navContact: 'Contact',
    navAdmin: 'Admin',
    navAutomation: 'Automation',
    navWebDev: 'Web Development',
    navPricing: 'Pricing',
    navEcommerce: 'E-commerce',
    navCta: 'Get Started',
    heroTitleBrand: 'Omix Solutions',
    heroLine1: 'Digital Solutions That',
    heroLine2: 'Power Growth',
    heroSubtitle:
      'We help businesses build strong online presence through smart design, powerful development, and result-driven digital marketing.',
    heroPrimaryCta: 'Get Started',
    heroSecondaryCta: 'Contact Us',
    heroFeature1: 'Modern Design',
    heroFeature2: 'Result-Driven',
    heroFeature3: 'Skilled Team',
    heroFeature4: 'Transparent',
    heroVisualLabel: 'Digital Solutions',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive digital solutions to power your business growth',
    aboutTitle: 'About Us',
    aboutSubtitle: 'Learn more about our mission, vision, and team',
    aboutWhoWeAre: 'Who We Are',
    aboutWhoWeAreText1:
      'Omix Solutions is a full-service digital agency dedicated to helping brands succeed in the digital world. We combine creativity, technology, and strategy to deliver impactful results.',
    aboutWhoWeAreText2:
      'Based in Bangladesh, we serve clients globally with premium digital solutions that drive growth and success.',
    aboutMission: 'Our Mission',
    aboutMissionText:
      'To provide smart, affordable, and high-quality digital solutions that help businesses grow faster.',
    aboutVision: 'Our Vision',
    aboutVisionText:
      'To become a trusted digital solutions partner for businesses in Bangladesh and worldwide.',
    aboutTeamTitle: 'Our Team Structure',
    contactTitle: 'Contact Us',
    contactSubtitle: "Let's discuss how we can help grow your business",
    contactCall: 'Call Us',
    contactEmail: 'Email',
    contactAddress: 'Office Address',
    contactHours: 'Business Hours',
    contactFormName: 'Name',
    contactFormEmail: 'Email',
    contactFormMessage: 'Message',
    contactFormSubmit: 'Send Message',
    reviewsStories: 'CLIENT STORIES',
    reviewsTitle: 'What Our Clients Say',
    reviewsSubtitle: 'Real businesses, real results. Trusted by brands in Bangladesh and beyond.',
    showcaseHeroTitle: 'Omix Solutions',
    showcaseHeroSubtitle: 'Digital Solutions That Power Growth',
    showcaseHeroDescription: 'Redefining limits, fighting for excellence, bringing it all in all ways.',
    showcaseGetStarted: 'Get Started',
    showcaseLearnMore: 'Learn More',
    showcaseDigitalExcellence: 'Digital Excellence',
    showcaseExcellenceDesc: 'Redefining digital boundaries, delivering excellence, bringing innovation in all ways.',
    showcaseBeyondLimits: 'Beyond Limits',
    showcaseLimitsDesc: "It doesn't matter where you start, it's how you progress from there.",
    showcaseGrowthDriven: 'Growth Driven',
    showcaseGrowthDesc: "Since day one, we've worked tirelessly to make digital dreams come true.",
    showcaseProvenSuccess: 'Proven Success',
    showcaseSuccessDesc: 'Delivering measurable results that drive business growth and success.',
    showcaseWorkTitle: 'Our Work',
    showcaseWorkSubtitle: 'Showcasing excellence in every project',
    showcaseWebDevTitle: 'Web Development Excellence',
    showcaseWebDevDesc: 'Creating powerful, scalable web solutions that drive business growth.',
    showcaseDesignTitle: 'Design Innovation',
    showcaseDesignDesc: 'Crafting stunning visual experiences that captivate and convert.',
    showcaseMarketingTitle: 'Digital Marketing Success',
    showcaseMarketingDesc: 'Driving measurable results through strategic digital marketing campaigns.',
    newPageTagline: 'OMIX SOLUTIONS · DIGITAL SOLUTIONS THAT POWER GROWTH',
    newPageTitle: 'Digital Solutions That',
    newPageTitleHighlight: 'Power Your Business Growth',
    newPageDescription: 'We help businesses build strong online presence through smart design, powerful development, and result-driven digital marketing. No tech skills needed – just tell us your goal.',
    newPageBookCall: 'Book Free Strategy Call',
    newPageViewWork: 'View Selected Work',
    newPagePerfectFor: 'Perfect for:',
    newPageConversionSnapshot: 'Conversion snapshot',
    newPageDashboardTitle: 'Brand launch dashboard',
    newPageLeads: 'Leads this month',
    newPageSession: 'Avg. session',
    newPageConversion: 'Conversion',
    newPageTestimonial: '"Our new site from Omix paid for itself in the first month."',
    newPageTestimonialAuthor: '— Real client, e‑commerce brand',
    newPageDoneForYou: 'Done‑for‑you tech',
    newPageDoneForYouText: 'You focus on business, we handle design, dev & marketing.',
    newPageLaunch14: 'Launch in 14 days',
    newPageLaunch14Text: 'Fast sprints with clear milestones.',
    newPageWhatsApp: 'WhatsApp support',
    newPageWhatsAppText: 'Talk to a real person, not a ticket system.',
    newPageSelectedResults: 'SELECTED RESULTS',
    newPageResultsTitle: 'Websites that actually move the numbers.',
    newPageResultsDesc: 'Every project is designed to answer one question: "How does this website bring you more business?" Here are a few examples.',
    newPageEcommerce: 'E‑commerce',
    newPageFashionBrand: 'Dhaka fashion brand',
    newPageFashionResult: '+62% online sales in 90 days',
    newPageFashionDetails: 'New product pages, faster checkout, FB Pixel & tracking setup.',
    newPagePersonalBrand: 'Personal brand',
    newPageCoachTitle: 'Business coach website',
    newPageCoachResult: 'From 0 to 40+ leads / month',
    newPageCoachDetails: 'Landing pages + email capture + calendar booking integration.',
    newPageB2BSaaS: 'B2B SaaS',
    newPageSoftwareTitle: 'Global software startup',
    newPageSoftwareResult: '2.3x demo requests',
    newPageSoftwareDetails: 'Story‑driven homepage with clear value prop and pricing.',
    newPageSimpleProcess: 'SIMPLE PROCESS',
    newPageProcessTitle: 'From idea to live website in 3 clear steps.',
    newPageProcessDesc: 'No complex project management. No tech headaches. Just a guided process from first call to launch.',
    newPageStep1: 'Step 01',
    newPageStep1Title: 'Free strategy call',
    newPageStep1Text: 'We understand your business, customers, and goals. You get clear recommendations even if you don\'t hire us.',
    newPageStep2: 'Step 02',
    newPageStep2Title: 'Design & build',
    newPageStep2Text: 'We create the copy, design and development. You review via simple links – no technical feedback needed.',
    newPageStep3: 'Step 03',
    newPageStep3Title: 'Launch & grow',
    newPageStep3Text: 'We connect analytics, basic SEO and tracking so you can see real numbers from day one.',
    newPagePlanTitle: 'Let\'s plan your next 90 days of growth.',
    newPagePlanDesc: 'Share a bit about your business and goals. We\'ll come prepared with ideas, examples and a clear roadmap – even if we don\'t work together.',
    newPagePlanList1: '• 20–30 minute Zoom or WhatsApp call',
    newPagePlanList2: '• No pushy sales – just honest recommendations',
    newPagePlanList3: '• Perfect if you\'re redesigning or launching soon',
    newPageFormName: 'Your Name',
    newPageFormContact: 'Email or WhatsApp',
    newPageFormHelp: 'What do you need help with?',
    newPageFormSubmit: 'Request Free Strategy Call',
    newPageFormResponse: 'You\'ll hear back within 24 hours with available time slots.',
    newPageIndustry1: 'E‑commerce',
    newPageIndustry2: 'Personal Brands',
    newPageIndustry3: 'Agencies',
    newPageIndustry4: 'Startups',
    galleryWorkTitle: 'Our Work',
    galleryWorkSubtitle: 'Showcasing excellence in every project',
    adminPortal: 'Admin Portal',
    adminTitle: 'Omix Solutions Dashboard',
    adminDescription: 'Manage bookings, update website content, and prepare your next client launch. (Demo UI, no backend yet.)',
    adminNote: 'Note',
    adminNoteText: 'To make these changes live for all visitors, connect this UI to a backend (API + database).',
    adminBookings: 'Bookings',
    adminContent: 'Website Content',
    adminClientBookings: 'Client Bookings',
    adminAddBooking: '+ Add Demo Booking',
    adminClient: 'Client',
    adminProjectType: 'Project Type',
    adminBudget: 'Budget',
    adminStatus: 'Status',
    adminStatusNew: 'New',
    adminStatusProgress: 'In Progress',
    adminStatusCompleted: 'Completed',
    adminHomepageContent: 'Homepage Hero Content',
    adminContentDesc: 'Change this text to preview new content for the main hero section. To make it live, connect this form to an API and update your React components to read from that data source.',
    adminHeroTitle: 'Hero Title',
    adminHeroSubtitle: 'Hero Subtitle',
    adminLivePreview: 'Live Preview',
    adminPreviewDesc: 'To fully connect this preview to your real homepage, store these values in a database (e.g., Supabase, MongoDB) and load them in your `Hero` component via an API.',
    storexHeroTitle: 'Super Fast Website',
    storexHeroSubtitle: 'E-commerce Business Will Be Automated!',
    storexHeroDescription: 'If you can use Facebook, then you can also run an e-commerce business using Omix Solutions!',
    storexHeroCta: 'View Pricing',
    storexWhyTitle: 'Why Use Omix Solutions?',
    storexWhySubtitle: 'Trusted by 5000+ businesses like yours - Omix Digital Solutions',
    storexReadyTitle: 'Ready in Just a Few Clicks',
    storexReadySubtitle: 'Your Online Store',
    storexReadyCta: 'Make Your Store Ready',
    storexSystemTitle: 'What is Omix Digital Solutions System?',
    storexSystemSubtitle: 'All-in-One System for Worry-Free Online Business!',
    storexSystemDescription: 'Set up your online shop without coding skills and create unlimited landing pages. Sales will increase through powerful funnels and profit will be maximized.',
    storexViewFeatures: 'View All Features',
    storexFeature1Title: 'Landing Page Design',
    storexFeature1Desc: '30+ ready designs without coding, 2 second load time, site ready as soon as you add content!',
    storexFeature2Title: 'Product Management System',
    storexFeature2Desc: 'Upload product images with variations, pricing, category-brand, stock and alerts - everything!',
    storexFeature3Title: 'Order Management System',
    storexFeature3Desc: 'From order tracking to courier booking, invoice printing to reporting - all in one click, automated!',
    storexFeature4Title: 'Offer Management System',
    storexFeature4Desc: 'Manage dynamic coupons, offers, discounts, countdown and order-stock-courier easily!',
    storexFeature5Title: 'Marketing Automation',
    storexFeature5Desc: 'Facebook, Google, Meta, TikTok... omnichannel marketing friendly - full control in dashboard!',
    storexFeature6Title: 'Analytics & Reporting',
    storexFeature6Desc: 'Complete business control - everything in the dashboard!',
    storexStatsTitle: 'Reduce Fake Orders with Fraud Checker',
    storexStatsSubtitle: 'Using Only Fraud Checker to Reduce Fake Orders',
    storexStatsSave: 'Save Per Month',
    storexStatsCustomers: 'Real Customers Increase',
    storexStatsDesc: 'Many businesses have been able to prevent up to 3.5 lakh taka in losses from fake orders just by using our Fraud Checker. Omix detects which orders are real and which are fake in advance! As a result, you save time, money and stress on all three fronts!',
    storexLearnMore: 'Learn More →',
    storexTestimonialsTitle: 'There are thousands of entrepreneurs\' success stories at Omix',
    storexTestimonialsSubtitle: 'Now waiting to hear your success story in Bangladesh!',
    storexFinalCta: 'Start Now',
    storexFinalCtaDesc: 'Omix is with you all the time, from starting an online business to success...',
    storexStartNow: 'Start Now',
    webDevHeroTitle: 'Professional Web Development',
    webDevHeroSubtitle: 'Build Powerful Websites That Drive Results',
    webDevHeroDescription: 'We create modern, fast, and scalable websites that help your business grow. From simple landing pages to complex web applications.',
    webDevHeroCta: 'Get Started',
    webDevWhyTitle: 'Why Choose Our Web Development?',
    webDevWhySubtitle: 'Modern technology, proven results, expert team',
    webDevFeature1: 'Responsive Design',
    webDevFeature2: 'Fast Performance',
    webDevFeature3: 'SEO Optimized',
    webDevFeature4: 'Secure & Reliable',
    webDevFeature5: 'Easy to Manage',
    webDevFeature6: '24/7 Support',
    webDevProcessTitle: 'Our Development Process',
    webDevProcessStep1: 'Discovery & Planning',
    webDevProcessStep2: 'Design & Prototyping',
    webDevProcessStep3: 'Development & Testing',
    webDevProcessStep4: 'Launch & Support',
    webDevTechTitle: 'Technologies We Use',
    webDevTechSubtitle: 'Modern stack for modern solutions',
    pricingTitle: 'Choose Your Plan',
    pricingSubtitle: 'Transparent pricing for every business size',
    pricingPlan1Name: 'Starter',
    pricingPlan1Price: 'From $299',
    pricingPlan1Desc: 'Perfect for small businesses and startups',
    pricingPlan2Name: 'Professional',
    pricingPlan2Price: 'From $799',
    pricingPlan2Desc: 'Ideal for growing businesses',
    pricingPlan3Name: 'Enterprise',
    pricingPlan3Price: 'Custom',
    pricingPlan3Desc: 'Tailored solutions for large organizations',
    pricingFeature: 'Features',
    pricingCTA: 'Get Started',
    pricingContact: 'Contact Us for Custom Pricing',
  },
  bn: {
    navHome: 'হোম',
    navNew: 'নতুন',
    navShowcase: 'শোকেস',
    navServices: 'সার্ভিস',
    navAbout: 'আমাদের সম্পর্কে',
    navContact: 'কন্টাক্ট',
    navAdmin: 'অ্যাডমিন',
    navAutomation: 'অটোমেশন',
    navWebDev: 'ওয়েব ডেভেলপমেন্ট',
    navPricing: 'প্রাইসিং',
    navEcommerce: 'ই-কমার্স',
    navCta: 'শুরু করুন',
    heroTitleBrand: 'ওমিক্স সলিউশনস',
    heroLine1: 'ডিজিটাল সলিউশন,',
    heroLine2: 'যা আপনার ব্যবসা বাড়ায়',
    heroSubtitle:
      'আমরা আপনার ব্যবসার জন্য আধুনিক ওয়েবসাইট, ব্র্যান্ডিং এবং ডিজিটাল মার্কেটিং করি – যাতে আপনি বেশি কাস্টমার পান, টেকের ঝামেলা ছাড়াই।',
    heroPrimaryCta: 'ফ্রি স্ট্র্যাটেজি কল বুক করুন',
    heroSecondaryCta: 'আমাদের সাথে কথা বলুন',
    heroFeature1: 'আধুনিক ডিজাইন',
    heroFeature2: 'ফলাফল-ভিত্তিক',
    heroFeature3: 'দক্ষ টিম',
    heroFeature4: 'স্বচ্ছ',
    heroVisualLabel: 'ডিজিটাল সলিউশন',
    servicesTitle: 'আমাদের সার্ভিস',
    servicesSubtitle: 'আপনার ব্যবসার বৃদ্ধির জন্য সম্পূর্ণ ডিজিটাল সমাধান',
    aboutTitle: 'আমাদের সম্পর্কে',
    aboutSubtitle: 'আমাদের মিশন, ভিশন এবং টিম সম্পর্কে জানুন',
    aboutWhoWeAre: 'আমরা কারা',
    aboutWhoWeAreText1:
      'ওমিক্স সলিউশনস একটি সম্পূর্ণ ডিজিটাল এজেন্সি যা ব্র্যান্ডগুলিকে ডিজিটাল বিশ্বে সফল হতে সাহায্য করতে নিবেদিত। আমরা সৃজনশীলতা, প্রযুক্তি এবং কৌশলকে একত্রিত করে প্রভাবশালী ফলাফল প্রদান করি।',
    aboutWhoWeAreText2:
      'বাংলাদেশে অবস্থিত, আমরা বিশ্বব্যাপী ক্লায়েন্টদের প্রিমিয়াম ডিজিটাল সমাধান দিয়ে সেবা করি যা বৃদ্ধি এবং সাফল্য চালায়।',
    aboutMission: 'আমাদের মিশন',
    aboutMissionText:
      'স্মার্ট, সাশ্রয়ী এবং উচ্চ-মানের ডিজিটাল সমাধান প্রদান করা যা ব্যবসাগুলিকে দ্রুত বৃদ্ধি করতে সাহায্য করে।',
    aboutVision: 'আমাদের ভিশন',
    aboutVisionText:
      'বাংলাদেশ এবং বিশ্বব্যাপী ব্যবসার জন্য একটি বিশ্বস্ত ডিজিটাল সমাধান অংশীদার হয়ে উঠা।',
    aboutTeamTitle: 'আমাদের টিম স্ট্রাকচার',
    contactTitle: 'যোগাযোগ করুন',
    contactSubtitle: 'আপনার ব্যবসা বৃদ্ধিতে আমরা কীভাবে সাহায্য করতে পারি তা নিয়ে আলোচনা করি',
    contactCall: 'ফোন করুন',
    contactEmail: 'ইমেইল',
    contactAddress: 'অফিস ঠিকানা',
    contactHours: 'ব্যবসার সময়',
    contactFormName: 'নাম',
    contactFormEmail: 'ইমেইল',
    contactFormMessage: 'বার্তা',
    contactFormSubmit: 'বার্তা পাঠান',
    reviewsStories: 'ক্লায়েন্ট স্টোরিজ',
    reviewsTitle: 'আমাদের ক্লায়েন্টরা কী বলেন',
    reviewsSubtitle: 'আসল ব্যবসা, আসল ফলাফল। বাংলাদেশ এবং বিশ্বব্যাপী ব্র্যান্ডগুলির দ্বারা বিশ্বস্ত।',
    showcaseHeroTitle: 'ওমিক্স সলিউশনস',
    showcaseHeroSubtitle: 'ডিজিটাল সলিউশন, যা আপনার ব্যবসা বাড়ায়',
    showcaseHeroDescription: 'সীমা পুনর্ব্যাখ্যা করা, উৎকর্ষতার জন্য লড়াই করা, সব উপায়ে সবকিছু নিয়ে আসা।',
    showcaseGetStarted: 'শুরু করুন',
    showcaseLearnMore: 'আরও জানুন',
    showcaseDigitalExcellence: 'ডিজিটাল উৎকর্ষতা',
    showcaseExcellenceDesc: 'ডিজিটাল সীমানা পুনর্ব্যাখ্যা করা, উৎকর্ষতা প্রদান করা, সব উপায়ে উদ্ভাবন নিয়ে আসা।',
    showcaseBeyondLimits: 'সীমার বাইরে',
    showcaseLimitsDesc: 'আপনি কোথা থেকে শুরু করেন তা গুরুত্বপূর্ণ নয়, গুরুত্বপূর্ণ হল আপনি সেখান থেকে কীভাবে এগিয়ে যান।',
    showcaseGrowthDriven: 'বৃদ্ধি-চালিত',
    showcaseGrowthDesc: 'প্রথম দিন থেকেই, আমরা ডিজিটাল স্বপ্ন সত্যি করতে নিরলসভাবে কাজ করেছি।',
    showcaseProvenSuccess: 'প্রমাণিত সাফল্য',
    showcaseSuccessDesc: 'পরিমাপযোগ্য ফলাফল প্রদান করা যা ব্যবসার বৃদ্ধি এবং সাফল্য চালায়।',
    showcaseWorkTitle: 'আমাদের কাজ',
    showcaseWorkSubtitle: 'প্রতিটি প্রকল্পে উৎকর্ষতা প্রদর্শন',
    showcaseWebDevTitle: 'ওয়েব ডেভেলপমেন্ট উৎকর্ষতা',
    showcaseWebDevDesc: 'শক্তিশালী, স্কেলযোগ্য ওয়েব সমাধান তৈরি করা যা ব্যবসার বৃদ্ধি চালায়।',
    showcaseDesignTitle: 'ডিজাইন উদ্ভাবন',
    showcaseDesignDesc: 'চিত্তাকর্ষক ভিজ্যুয়াল অভিজ্ঞতা তৈরি করা যা আকর্ষণ করে এবং রূপান্তর করে।',
    showcaseMarketingTitle: 'ডিজিটাল মার্কেটিং সাফল্য',
    showcaseMarketingDesc: 'কৌশলগত ডিজিটাল মার্কেটিং প্রচারাভিযানের মাধ্যমে পরিমাপযোগ্য ফলাফল চালানো।',
    newPageTagline: 'ওমিক্স সলিউশনস · ডিজিটাল সলিউশন, যা আপনার ব্যবসা বাড়ায়',
    newPageTitle: 'ডিজিটাল সলিউশন,',
    newPageTitleHighlight: 'যা আপনার ব্যবসা বাড়ায়',
    newPageDescription: 'আমরা আপনার ব্যবসার জন্য আধুনিক ওয়েবসাইট, ব্র্যান্ডিং এবং ডিজিটাল মার্কেটিং করি – যাতে আপনি বেশি কাস্টমার পান, টেকের ঝামেলা ছাড়াই।',
    newPageBookCall: 'ফ্রি স্ট্র্যাটেজি কল বুক করুন',
    newPageViewWork: 'নির্বাচিত কাজ দেখুন',
    newPagePerfectFor: 'এর জন্য পারফেক্ট:',
    newPageConversionSnapshot: 'রূপান্তর স্ন্যাপশট',
    newPageDashboardTitle: 'ব্র্যান্ড লঞ্চ ড্যাশবোর্ড',
    newPageLeads: 'এই মাসে লিড',
    newPageSession: 'গড় সেশন',
    newPageConversion: 'রূপান্তর',
    newPageTestimonial: '"ওমিক্সের আমাদের নতুন সাইট প্রথম মাসেই নিজের ব্যয় পরিশোধ করেছে।"',
    newPageTestimonialAuthor: '— আসল ক্লায়েন্ট, ই-কমার্স ব্র্যান্ড',
    newPageDoneForYou: 'আপনার জন্য সম্পন্ন প্রযুক্তি',
    newPageDoneForYouText: 'আপনি ব্যবসায় ফোকাস করুন, আমরা ডিজাইন, ডেভেলপমেন্ট এবং মার্কেটিং হ্যান্ডেল করি।',
    newPageLaunch14: '১৪ দিনে চালু',
    newPageLaunch14Text: 'স্পষ্ট মাইলফলক সহ দ্রুত স্প্রিন্ট।',
    newPageWhatsApp: 'হোয়াটসঅ্যাপ সাপোর্ট',
    newPageWhatsAppText: 'একটি টিকিট সিস্টেম নয়, একজন আসল ব্যক্তির সাথে কথা বলুন।',
    newPageSelectedResults: 'নির্বাচিত ফলাফল',
    newPageResultsTitle: 'ওয়েবসাইট যা আসলে সংখ্যা সরায়।',
    newPageResultsDesc: 'প্রতিটি প্রকল্প একটি প্রশ্নের উত্তর দেওয়ার জন্য ডিজাইন করা হয়েছে: "এই ওয়েবসাইট কীভাবে আপনাকে আরও ব্যবসা এনে দেয়?" এখানে কয়েকটি উদাহরণ রয়েছে।',
    newPageEcommerce: 'ই-কমার্স',
    newPageFashionBrand: 'ঢাকা ফ্যাশন ব্র্যান্ড',
    newPageFashionResult: '৯০ দিনে +৬২% অনলাইন বিক্রয়',
    newPageFashionDetails: 'নতুন পণ্যের পৃষ্ঠা, দ্রুত চেকআউট, FB Pixel এবং ট্র্যাকিং সেটআপ।',
    newPagePersonalBrand: 'পার্সোনাল ব্র্যান্ড',
    newPageCoachTitle: 'বিজনেস কোচ ওয়েবসাইট',
    newPageCoachResult: '০ থেকে ৪০+ লিড / মাস',
    newPageCoachDetails: 'ল্যান্ডিং পেজ + ইমেইল ক্যাপচার + ক্যালেন্ডার বুকিং ইন্টিগ্রেশন।',
    newPageB2BSaaS: 'B2B SaaS',
    newPageSoftwareTitle: 'গ্লোবাল সফটওয়্যার স্টার্টআপ',
    newPageSoftwareResult: '২.৩x ডেমো অনুরোধ',
    newPageSoftwareDetails: 'স্পষ্ট মূল্য প্রস্তাব এবং মূল্য নির্ধারণ সহ গল্প-চালিত হোমপেজ।',
    newPageSimpleProcess: 'সরল প্রক্রিয়া',
    newPageProcessTitle: 'ধারণা থেকে লাইভ ওয়েবসাইট ৩টি স্পষ্ট ধাপে।',
    newPageProcessDesc: 'কোনো জটিল প্রকল্প ব্যবস্থাপনা নেই। কোনো টেক মাথাব্যথা নেই। শুধু প্রথম কল থেকে চালু পর্যন্ত একটি নির্দেশিত প্রক্রিয়া।',
    newPageStep1: 'ধাপ ০১',
    newPageStep1Title: 'ফ্রি স্ট্র্যাটেজি কল',
    newPageStep1Text: 'আমরা আপনার ব্যবসা, গ্রাহক এবং লক্ষ্য বুঝি। আপনি আমাদের নিয়োগ না করলেও স্পষ্ট সুপারিশ পাবেন।',
    newPageStep2: 'ধাপ ০২',
    newPageStep2Title: 'ডিজাইন এবং তৈরি',
    newPageStep2Text: 'আমরা কপি, ডিজাইন এবং ডেভেলপমেন্ট তৈরি করি। আপনি সহজ লিঙ্কের মাধ্যমে পর্যালোচনা করেন – কোনো প্রযুক্তিগত প্রতিক্রিয়ার প্রয়োজন নেই।',
    newPageStep3: 'ধাপ ০৩',
    newPageStep3Title: 'চালু এবং বৃদ্ধি',
    newPageStep3Text: 'আমরা অ্যানালিটিক্স, বেসিক SEO এবং ট্র্যাকিং সংযুক্ত করি যাতে আপনি প্রথম দিন থেকেই আসল সংখ্যা দেখতে পারেন।',
    newPagePlanTitle: 'আসুন আপনার পরবর্তী ৯০ দিনের বৃদ্ধি পরিকল্পনা করি।',
    newPagePlanDesc: 'আপনার ব্যবসা এবং লক্ষ্য সম্পর্কে একটু শেয়ার করুন। আমরা ধারণা, উদাহরণ এবং একটি স্পষ্ট রোডম্যাপ নিয়ে প্রস্তুত থাকব – এমনকি আমরা একসাথে কাজ না করলেও।',
    newPagePlanList1: '• ২০–৩০ মিনিটের জুম বা হোয়াটসঅ্যাপ কল',
    newPagePlanList2: '• কোনো জোরালো বিক্রয় নেই – শুধু সৎ সুপারিশ',
    newPagePlanList3: '• পারফেক্ট যদি আপনি পুনরায় ডিজাইন করছেন বা শীঘ্রই চালু করছেন',
    newPageFormName: 'আপনার নাম',
    newPageFormContact: 'ইমেইল বা হোয়াটসঅ্যাপ',
    newPageFormHelp: 'আপনার কী সাহায্য দরকার?',
    newPageFormSubmit: 'ফ্রি স্ট্র্যাটেজি কল অনুরোধ করুন',
    newPageFormResponse: 'আপনি ২৪ ঘন্টার মধ্যে উপলব্ধ সময় স্লট সহ ফিরে শুনবেন।',
    newPageIndustry1: 'ই-কমার্স',
    newPageIndustry2: 'পার্সোনাল ব্র্যান্ড',
    newPageIndustry3: 'এজেন্সি',
    newPageIndustry4: 'স্টার্টআপ',
    galleryWorkTitle: 'আমাদের কাজ',
    galleryWorkSubtitle: 'প্রতিটি প্রকল্পে উৎকর্ষতা প্রদর্শন',
    adminPortal: 'অ্যাডমিন পোর্টাল',
    adminTitle: 'ওমিক্স সলিউশনস ড্যাশবোর্ড',
    adminDescription: 'বুকিং পরিচালনা করুন, ওয়েবসাইট কন্টেন্ট আপডেট করুন এবং আপনার পরবর্তী ক্লায়েন্ট লঞ্চ প্রস্তুত করুন। (ডেমো UI, এখনও কোনো ব্যাকএন্ড নেই।)',
    adminNote: 'নোট',
    adminNoteText: 'সমস্ত দর্শকদের জন্য এই পরিবর্তনগুলি লাইভ করতে, এই UI-কে একটি ব্যাকএন্ডের সাথে সংযুক্ত করুন (API + ডাটাবেস)।',
    adminBookings: 'বুকিং',
    adminContent: 'ওয়েবসাইট কন্টেন্ট',
    adminClientBookings: 'ক্লায়েন্ট বুকিং',
    adminAddBooking: '+ ডেমো বুকিং যোগ করুন',
    adminClient: 'ক্লায়েন্ট',
    adminProjectType: 'প্রকল্পের ধরন',
    adminBudget: 'বাজেট',
    adminStatus: 'স্ট্যাটাস',
    adminStatusNew: 'নতুন',
    adminStatusProgress: 'চলমান',
    adminStatusCompleted: 'সম্পন্ন',
    adminHomepageContent: 'হোমপেজ হিরো কন্টেন্ট',
    adminContentDesc: 'মূল হিরো সেকশনের জন্য নতুন কন্টেন্ট প্রিভিউ করতে এই টেক্সট পরিবর্তন করুন। এটি লাইভ করতে, এই ফর্মটিকে একটি API-এর সাথে সংযুক্ত করুন এবং আপনার React কম্পোনেন্টগুলিকে সেই ডেটা সোর্স থেকে পড়ার জন্য আপডেট করুন।',
    adminHeroTitle: 'হিরো শিরোনাম',
    adminHeroSubtitle: 'হিরো সাবটাইটেল',
    adminLivePreview: 'লাইভ প্রিভিউ',
    adminPreviewDesc: 'এই প্রিভিউটিকে আপনার আসল হোমপেজের সাথে সম্পূর্ণরূপে সংযুক্ত করতে, এই মানগুলি একটি ডাটাবেসে (যেমন, Supabase, MongoDB) সংরক্ষণ করুন এবং একটি API-এর মাধ্যমে আপনার `Hero` কম্পোনেন্টে লোড করুন।',
    storexHeroTitle: 'সুপার ফাস্ট ওয়েবসাইট',
    storexHeroSubtitle: 'ই-কমার্স বিজনেস হবে অটোমেটেড!',
    storexHeroDescription: 'আপনি যদি ফেইসবুক চালাতে পারেন, তাহলে Omix Solutions ব্যাবহার করে ইকমার্স বিজনেস ও করতে পারবেন!',
    storexHeroCta: 'প্রাইসিং দেখুন',
    storexWhyTitle: 'কেন Omix Solutions ব্যবহার করবেন?',
    storexWhySubtitle: 'আপনার মতো ৫০০০+ ব্যবসায়ীর ভরসায় Omix Digital Solutions',
    storexReadyTitle: 'কয়েকটি ক্লিকেই রেডি',
    storexReadySubtitle: 'আপনার অনলাইন স্টোর',
    storexReadyCta: 'আপনার স্টোর রেডি করুন',
    storexSystemTitle: 'Omix Digital Solutions সিস্টেম কি?',
    storexSystemSubtitle: 'নিশ্চিন্তে অনলাইন ব্যবসার জন্য অল-ইন-ওয়ান সিস্টেম!',
    storexSystemDescription: 'কোডিং দক্ষতা ছাড়াই সাজিয়ে নিন নিজের অনলাইন শপ এবং তৈরি করুন আনলিমিটেড ল্যান্ডিং পেইজ। শক্তিশালি ফানেলের মাধ্যমে বাড়বে সেলস এবং ম্যাক্সিমাইজ হবে প্রফিট।',
    storexViewFeatures: 'সবগুলো ফিচার দেখুন',
    storexFeature1Title: 'ল্যান্ডিং পেইজ ডিজাইন',
    storexFeature1Desc: 'কোডিং ছাড়া ৩০+ রেডি ডিজাইন, ২ সেকেন্ডে লোড, কনটেন্ট দিলেই সাইট রেডি!',
    storexFeature2Title: 'প্রডাক্ট ম্যানেজমেন্ট সিস্টেম',
    storexFeature2Desc: 'ভেরিয়েশনসহ প্রোডাক্ট-ছবি আপলোড, প্রাইসিং, ক্যাটাগরি-ব্র্যান্ড, স্টক ও অ্যালার্ট সহ সবকিছু!',
    storexFeature3Title: 'অর্ডার ম্যানেজমেন্ট সিস্টেম',
    storexFeature3Desc: 'অর্ডার ট্র্যাকিং থেকে কুরিয়ার বুকিং, ইনভয়েস প্রিন্ট থেকে রিপোর্টিং সব এক ক্লিকে, অটোমেটেড!',
    storexFeature4Title: 'অফার ম্যানেজমেন্ট সিস্টেম',
    storexFeature4Desc: 'ডায়নামিক কুপন, অফার, ডিসকাউন্ট, কাউন্টডাউন ও অর্ডার-স্টক-কুরিয়ার সব কিছু ম্যানেজ সহজেই!',
    storexFeature5Title: 'মার্কেটিং অটোমেশন',
    storexFeature5Desc: 'ফেসবুক, গুগল, মেটা, টিকটক... omnichannel marketing friendly - পুরোটাই ড্যাশবোর্ড এ!',
    storexFeature6Title: 'অ্যানালিটিক্স ও রিপোর্টিং',
    storexFeature6Desc: 'সম্পূর্ণ বিজনেস কন্ট্রোল হবে পুরোটাই ড্যাশবোর্ড এ!',
    storexStatsTitle: 'শুধুমাত্র ফ্রড চেকার দিয়ে ফেক অর্ডার কমিয়ে এনে',
    storexStatsSubtitle: 'শুধুমাত্র ফ্রড চেকার দিয়ে ফেক অর্ডার কমিয়ে এনে',
    storexStatsSave: 'প্রতি মাসে সেভ',
    storexStatsCustomers: 'রিয়েল কাস্টমার বাড়ে',
    storexStatsDesc: 'শুধু আমাদের Fraud Checker ইউজ করেই অনেক ব্যাবসায়ী ৩.৫ লক্ষ টাকা পর্যন্ত ফেইক অর্ডারের ক্ষতি ঠেকাতে পেরেছেন। Omix আগেই ধরে ফেলে কোন অর্ডার আসল আর কোনটা ফেক! ফলে সময়, টাকা আর টেনশন তিনদিকেই সেভ!',
    storexLearnMore: 'বিস্তারিত জানুন →',
    storexTestimonialsTitle: 'এমন হাজারো উদ্যোক্তার স্বপ্নপূরণের গল্প রয়েছে Omix-এ',
    storexTestimonialsSubtitle: 'এবার আপনার সফলতার গল্প শোনার অপেক্ষায় বাংলাদেশ!',
    storexFinalCta: 'শুরু করুন',
    storexFinalCtaDesc: 'অনলাইন ব্যবসা শুরু থেকে সফলতা পর্যন্ত Omix আছে আপনার পাশে, সবসময়…',
    storexStartNow: 'শুরু করুন',
    webDevHeroTitle: 'পেশাদার ওয়েব ডেভেলপমেন্ট',
    webDevHeroSubtitle: 'শক্তিশালী ওয়েবসাইট তৈরি করুন যা ফলাফল দেয়',
    webDevHeroDescription: 'আমরা আধুনিক, দ্রুত এবং স্কেলযোগ্য ওয়েবসাইট তৈরি করি যা আপনার ব্যবসার বৃদ্ধিতে সাহায্য করে। সহজ ল্যান্ডিং পেজ থেকে জটিল ওয়েব অ্যাপ্লিকেশন পর্যন্ত।',
    webDevHeroCta: 'শুরু করুন',
    webDevWhyTitle: 'কেন আমাদের ওয়েব ডেভেলপমেন্ট বেছে নেবেন?',
    webDevWhySubtitle: 'আধুনিক প্রযুক্তি, প্রমাণিত ফলাফল, দক্ষ টিম',
    webDevFeature1: 'রেসপন্সিভ ডিজাইন',
    webDevFeature2: 'দ্রুত পারফরম্যান্স',
    webDevFeature3: 'SEO অপ্টিমাইজড',
    webDevFeature4: 'নিরাপদ ও নির্ভরযোগ্য',
    webDevFeature5: 'ব্যবস্থাপনা সহজ',
    webDevFeature6: '২৪/৭ সাপোর্ট',
    webDevProcessTitle: 'আমাদের ডেভেলপমেন্ট প্রক্রিয়া',
    webDevProcessStep1: 'ডিসকভারি ও পরিকল্পনা',
    webDevProcessStep2: 'ডিজাইন ও প্রোটোটাইপিং',
    webDevProcessStep3: 'ডেভেলপমেন্ট ও টেস্টিং',
    webDevProcessStep4: 'লঞ্চ ও সাপোর্ট',
    webDevTechTitle: 'আমরা যে প্রযুক্তি ব্যবহার করি',
    webDevTechSubtitle: 'আধুনিক সমাধানের জন্য আধুনিক স্ট্যাক',
    pricingTitle: 'আপনার প্ল্যান বেছে নিন',
    pricingSubtitle: 'প্রতিটি ব্যবসার আকারের জন্য স্বচ্ছ মূল্য',
    pricingPlan1Name: 'স্টার্টার',
    pricingPlan1Price: '$২৯৯ থেকে',
    pricingPlan1Desc: 'ছোট ব্যবসা এবং স্টার্টআপের জন্য পারফেক্ট',
    pricingPlan2Name: 'প্রফেশনাল',
    pricingPlan2Price: '$৭৯৯ থেকে',
    pricingPlan2Desc: 'বৃদ্ধিশীল ব্যবসার জন্য আদর্শ',
    pricingPlan3Name: 'এন্টারপ্রাইজ',
    pricingPlan3Price: 'কাস্টম',
    pricingPlan3Desc: 'বড় সংস্থার জন্য টেইলর করা সমাধান',
    pricingFeature: 'ফিচার',
    pricingCTA: 'শুরু করুন',
    pricingContact: 'কাস্টম মূল্যের জন্য আমাদের সাথে যোগাযোগ করুন',
  },
}

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'omix-language'

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with 'bn' to match SSR and prevent hydration mismatch
  const [lang, setLangState] = useState<Language>('bn')

  useEffect(() => {
    // Only access localStorage on client after mount
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
      if (stored === 'en' || stored === 'bn') {
        setLangState(stored)
      } else {
        // Set default language if none stored
        window.localStorage.setItem(STORAGE_KEY, 'bn')
      }
    }
  }, [])

  const setLang = (next: Language) => {
    setLangState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  const t = (key: TranslationKey): string => {
    return translations[lang]?.[key] ?? translations.en[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
      <LanguageSwitcherFloating />
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

function LanguageSwitcherFloating() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="rounded-full bg-dark-card/90 border border-white/10 px-3 py-1 flex items-center gap-2 text-[11px] text-dark-text/80 shadow-lg shadow-black/40">
        <span className="text-[10px] uppercase tracking-[0.2em] text-dark-text/60">Language</span>
        <button
          type="button"
          onClick={() => setLang('bn')}
          className={`px-2 py-0.5 rounded-full transition ${
            lang === 'bn' ? 'bg-brand-primary text-white' : 'hover:bg-white/5'
          }`}
        >
          বাংলা
        </button>
        <button
          type="button"
          onClick={() => setLang('en')}
          className={`px-2 py-0.5 rounded-full transition ${
            lang === 'en' ? 'bg-brand-primary text-white' : 'hover:bg-white/5'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )
}
