import { CaseStudyData } from '@/types';

// NOTE: These represent structured case-study templates using realistic placeholder data.
export const caseStudiesData: CaseStudyData[] = [
  {
    slug: 'lumina-wellness-amazon-growth',
    clientName: 'Lumina Wellness',
    marketplace: 'amazon',
    tagline: 'How a premium D2C wellness brand reduced ACoS by 38% and scaled monthly revenue.',
    challenge: 'Lumina Wellness had high-quality products but suffered from an unoptimized listing layout and a high ad cost of sales (ACoS) exceeding 52%. Their organic rankings were declining due to aggressive competitor bidding.',
    solution: 'Sycamore executed a complete catalog optimization, designed custom Amazon A+ Content, and restructured their PPC campaigns. We segmented branded search traffic and automated negative keyword filters to block non-converting ad traffic.',
    result: 'Within 90 days, ad-generated sales increased, organic search rankings for target terms transitioned to page one, and the total ACoS dropped to a sustainable level.',
    metrics: [
      { label: 'Revenue Growth', value: '+140%', accent: true },
      { label: 'ACoS Reduction', value: '-38%', accent: false },
      { label: 'Organic Rankings', value: 'Top 5', accent: false }
    ],
    fullStory: 'Lumina Wellness, a challenger brand in the competitive supplements category, partnered with Sycamore to address escalating ad spend and stagnant organic sales. Our audit revealed that 30% of their PPC budget was being wasted on broad-match terms that did not convert. Furthermore, their product listings lacked the visual trust cues needed to convert high-value traffic. We initiated a catalog overhaul, beginning with SEO keyword mapping and copy rewrite. We then designed custom Premium A+ Content modules, incorporating responsive comparison charts that effectively cross-sold their entire line. Simultaneously, we migrated their ad accounts into a structured exact-match keyword setup, redirecting resources to high-intent terms. This dual approach of on-page optimization and targeted PPC management resulted in a rapid increase in organic indexing and a sharp decline in average advertising costs.',
    deliverables: [
      'Keyword Mapping & Catalog SEO Copywriting',
      'Custom A+ Content Panel Design & Layouts',
      'Exact-Match PPC Restructuring & Automation',
      'Competitor Conversion Tracking Setup'
    ]
  },
  {
    slug: 'novafit-flipkart-scale',
    clientName: 'NovaFit Gear',
    marketplace: 'flipkart',
    tagline: 'Scaling listing visibility and resolving QC rejections to drive seasonal sales.',
    challenge: 'NovaFit struggled to list new fitness gear due to recurring Flipkart QC rejections. Their active listings lacked tag optimization, resulting in low organic search impressions on the Flipkart Seller Hub.',
    solution: 'We updated their product titles to match Flipkart search attributes, resolved listing metadata blockages, and configured Smart ROI ad campaigns to build visibility in search results.',
    result: 'All listing rejections were resolved on the first submission, traffic grew steadily, and promotional sales spikes were achieved during national festival events.',
    metrics: [
      { label: 'Listing Traffic', value: '+180%', accent: true },
      { label: 'QC Pass Rate', value: '100%', accent: false },
      { label: 'Order Volume', value: '3.2x', accent: false }
    ],
    fullStory: 'NovaFit Gear wanted to capture the high-volume fitness market on Flipkart but faced major operational bottlenecks. Frequent QC rejections from incorrect catalog mapping kept their best products offline for weeks. Additionally, their active items were buried on page four of search grids. Sycamore stepped in to streamline their Flipkart Seller Hub operations. We audit-checked all rejected items, aligning dimensions, images, and descriptions with Flipkart guidelines. After successfully getting the entire catalog live, we optimized search tags and attributes to maximize relevance in Flipkart filters. Finally, we launched Smart ROI campaign groups to capture seasonal shopping traffic, driving a major spike in weekly orders.',
    deliverables: [
      'Flipkart Seller Hub Catalog Sync',
      'QC Error Diagnostics & Re-submissions',
      'Search Tag & Attribute Optimization',
      'Smart ROI Campaign Setup'
    ]
  },
  {
    slug: 'aurora-home-multi-channel',
    clientName: 'Aurora Home Decors',
    marketplace: 'amazon',
    tagline: 'Establishing brand authority and catalog cross-sells to boost average order values.',
    challenge: 'Aurora Home was losing market share to low-priced competitors. Their listings lacked brand identity, and shoppers rarely purchased more than a single item per transaction.',
    solution: 'We built a high-end Amazon Brand Store, designed responsive listing layouts, and restructured ad targeting to focus on product cross-sells and bundle offers.',
    result: 'Average Order Value (AOV) increased, catalog visibility grew across all variations, and the brand established itself as a category leader.',
    metrics: [
      { label: 'AOV Increase', value: '+35%', accent: true },
      { label: 'Store Traffic', value: '+220%', accent: false },
      { label: 'Return Rate', value: '-15%', accent: false }
    ],
    fullStory: 'Aurora Home Decors suffered from low brand loyalty and high customer acquisition costs. Competitors listing cheaper variations were stealing clicks. We focused on building a premium brand presence. We designed a cohesive Amazon Brand Store, using modular layout grids to showcase themed collections. We updated individual listings with high-end infographics, visual comparison grids, and bundle discounts. This structure encouraged shoppers to browse related catalog items. Combined with Sponsored Brand video ads, this strategy drove high-converting traffic directly to the storefront, boosting average transaction sizes and organic ranks.',
    deliverables: [
      'Amazon Brand Store Design & Setup',
      'Sponsored Brands Video Ad Campaigns',
      'Product Comparison Chart Configurations',
      'Infographic Content Coordination'
    ]
  }
];
