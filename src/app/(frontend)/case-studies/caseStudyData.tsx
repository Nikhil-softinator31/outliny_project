import { FaRegBuilding } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoManOutline, IoEarthOutline } from 'react-icons/io5'

export const caseStudiesData = [
  {
    icon: <FaRegBuilding />,
    title: 'Case Study 1: Scaling Customer Communications for a Growing SaaS Company',
    client: 'FastTrack CRM (B2B SaaS Platform)',
    challenge: `FastTrack CRM needed a way to send branded onboarding emails, product updates, 
                and billing invoices without engineering delays. Managing templates across marketing,
                sales, and billing teams was chaotic and time-consuming.`,
    solution: [
      "Used Outliny's email editor to create a centralized gallery of CRM emails.",
      'Integrated Outliny’s API into their app for dynamic onboarding sequences.',
      'Automated PDF invoice generation for every subscription renewal.',
    ],
    results: [
      '50% faster onboarding email setup.',
      'Fully automated billing documentation (no manual invoices).',
      'Consistent branding across all customer communications.',
    ],
  },
  {
    icon: <HiOutlineShoppingCart />,
    title: 'Case Study 2: Automating Invoices and Labels for an E-commerce Brand',
    client: 'TrendyGoods Online Store',
    challenge: `TrendyGoods needed customized packing slips, shipping labels, and monthly customer invoices
                — all dynamically branded and integrated with WooCommerce.`,
    solution: [
      "Installed Outliny's WordPress plugin for WooCommerce.",
      'Customized PDF templates for shipping and billing.',
      'Used parameters to automatically inject order IDs, barcodes, and customer info.',
    ],
    results: [
      'Saved 10+ hours per week in manual document generation.',
      'Achieved 100% brand consistency across packages and emails.',
      'Increased post-purchase customer satisfaction (fewer support tickets).',
    ],
  },
  {
    icon: <IoManOutline />,
    title: 'Case Study 3: Modernizing Internal HR Communications',
    client: 'GlobalConsult HR Solutions',
    challenge: `The HR department needed to automate internal offer letters, employee onboarding packs, 
                and policy updates without overwhelming their IT team.`,
    solution: [
      'Created modular email templates for HR updates.',
      'Built dynamic multi-page PDFs for offer letters and contracts.',
      'Integrated Outliny with their internal HRMS via the API.',
    ],
    results: [
      '75% reduction in time spent preparing new hire paperwork.',
      'Seamless employee communication with customized templates.',
      'Enhanced HR branding and employee experience.',
    ],
  },
  {
    icon: <IoEarthOutline />,
    title: 'Case Study 4: Secure Document Delivery for a Fintech Startup',
    client: 'FinPro Lending',
    challenge: `FinPro needed highly secure, compliant document generation for sensitive loan offers,
                approval notices, and customer correspondence.`,
    solution: [
      "Leveraged Outliny's encrypted API for PDF generation.",
      'Turned off logs for full compliance with internal policies.',
      'Customized access control for templates and API keys.',
    ],
    results: [
      'Full compliance with internal and regulatory security policies.',
      'Automated personalized loan documents without manual work.',
      '99.9% uptime with secure document delivery to clients.',
    ],
  },
]
