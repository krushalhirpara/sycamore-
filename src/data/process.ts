import { ProcessStep } from '@/types';

export const processData: ProcessStep[] = [
  {
    step: '01',
    title: 'Audit & Analysis',
    description: 'We perform a deep-dive audit of your active listings, keyword indexing, and historical ad spend efficiency.',
    details: [
      'Evaluate conversion rates and keyword rankings.',
      'Identify budget leakage in active ad campaigns.',
      'Benchmark performance against top 5 niche competitors.'
    ],
    iconName: 'ClipboardCheck'
  },
  {
    step: '02',
    title: 'Growth Strategy',
    description: 'We draft a customized 12-month expansion strategy containing inventory forecasts and PPC milestones.',
    details: [
      'Define targeted Cost per Acquisition (CPA) limits.',
      'Formulate organic keyword expansion roadmaps.',
      'Align listing updates with seasonal promotions.'
    ],
    iconName: 'Compass'
  },
  {
    step: '03',
    title: 'Listing Optimization',
    description: 'We craft high-converting listing copywriting, catalog configurations, and custom visual stores.',
    details: [
      'Write titles and key features optimized for search indices.',
      'Upload SEO-optimized A+ and Premium A+ content panels.',
      'Submit listing configurations that pass strict QC gates.'
    ],
    iconName: 'Edit3'
  },
  {
    step: '04',
    title: 'Smart Advertising',
    description: 'We run structured ad campaigns (Sponsored Products/PCA) utilizing conversion-based bid management.',
    details: [
      'Implement multi-tier campaign keyword targeting structures.',
      'Execute regular negative keyword exclusions to block waste.',
      'Optimize bidding patterns using historical performance data.'
    ],
    iconName: 'TrendingUp'
  },
  {
    step: '05',
    title: 'Health & Monitoring',
    description: 'We monitor seller metrics, policy warnings, and inventory health 24/7 to maintain active sales.',
    details: [
      'Monitor Account Health Rating (AHR) indices.',
      'Audit stock statuses to prevent shipping delay penalties.',
      'Resolve policy warnings and listing suppressions rapidly.'
    ],
    iconName: 'ShieldAlert'
  },
  {
    step: '06',
    title: 'Scale & Growth',
    description: 'We analyze ongoing traffic metrics to scale ad spend, launch items, and expand into markets.',
    details: [
      'Scale profitable campaigns to drive higher search ranks.',
      'Formulate plans for international marketplace launches.',
      'Optimize pricing points using conversion data tests.'
    ],
    iconName: 'Zap'
  }
];
