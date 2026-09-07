export interface FAQData {
  question: string;
  answer: string;
  category: 'general' | 'amazon' | 'flipkart' | 'advertising' | 'seo';
}

export const faqsData: FAQData[] = [
  {
    question: 'How do you charge for your marketplace growth services?',
    answer: 'We offer a flexible engagement model combining a competitive monthly retainer with a small performance share based on marketplace growth, aligning our success with yours.',
    category: 'general'
  },
  {
    question: 'What marketplaces do you specialize in?',
    answer: 'We specialize in Amazon (Seller Central & Vendor Central) and Flipkart (Seller Hub), handling end-to-end account setups, SEO, PPC, and day-to-day operations.',
    category: 'general'
  },
  {
    question: 'What is your approach to reducing high Amazon ACoS?',
    answer: 'We conduct a keyword conversion audit to remove waste, structure campaigns with tight match types, implement daily negative keyword exclusions, and optimize bids based on conversion probability.',
    category: 'advertising'
  },
  {
    question: 'How does Flipkart QC optimization work?',
    answer: 'We analyze Flipkart seller guidelines, format catalog details to match strict parameters, verify image specifications, and submit files to resolve errors on the first try.',
    category: 'flipkart'
  },
  {
    question: 'Can you help reinstate suspended listings?',
    answer: 'Yes, our account health team audits policy compliance issues, drafts detailed Plans of Action (POAs), and coordinates with seller support to get listings reinstated quickly.',
    category: 'amazon'
  },
  {
    question: 'Do you write product listing copy and design brand storefronts?',
    answer: 'Yes, our creative copywriters and designers handle keyword-rich copy, custom infographic slides, and Amazon Brand Store layouts.',
    category: 'seo'
  }
];
