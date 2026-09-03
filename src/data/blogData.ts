export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-critical-take-off-mistakes-that-cost-subcontractors-contracts",
    title: "5 Critical Take-Off Mistakes That Cost Subcontractors Contracts",
    excerpt:
      "Learn how inaccurate material quantities and rushed take-offs cause subcontractors to lose bids or end up underpaid on commercial jobs.",
    category: "Estimating Tips",
    date: "November 5, 2025",
    readTime: "5 min read",
    author: {
      name: "David M.",
      role: "Lead Estimator, Muvad Consults",
      avatar: "/images/testimonial-avatar.jpg",
    },
    image: "/images/hero-bg.jpg",
    content: [
      "In commercial construction, winning contracts is only half the battle — winning them at the right price is what keeps subcontractors profitable. Yet, thousands of trade contractors lose tens of thousands of dollars each year due to avoidable take-off inaccuracies.",
      "1. Overlooking Revision Clouds: General Contractors frequently distribute addenda and revision sheets during the bidding period. Bidding on outdated plan sheets is the fastest way to underestimate scope.",
      "2. Failing to Factor in Waste Percentages: Theoretical square footage differs from practical installation. Without standard waste allowances for drywall cuts, paint overspray, or electrical line runs, profit disappears quickly.",
      "3. Inaccurate Scaling on Digital PDF Sets: Relying on automatic scale calibrations without checking known door openings or grid lines can skew linear measurements by 15% to 30%.",
      "4. Neglecting Trade Specific Scope Inclusions: Missing demo details, primer requirements, or scaffolding specs in General Conditions can devastate your margin.",
      "5. Rushing Deadlines Without Quality Audits: Submitting a last-minute quote without a peer quantity check often leads to either overpricing yourself out of the bid or underpricing into a financial trap.",
      "At Muvad Consults, our dedicated Quantity Surveyors audit every line item against project specifications, guaranteeing rigorous accuracy with zero upfront financial risk."
    ],
  },
  {
    slug: "how-to-choose-the-right-itb-projects-for-your-trade",
    title: "How To Choose The Right ITB Projects For Your Property",
    excerpt:
      "A strategic breakdown of how painting, drywall, electrical, and concrete subcontractors can filter high-probability ITBs from low-margin time sinks.",
    category: "Bidding Strategy",
    date: "November 5, 2025",
    readTime: "6 min read",
    author: {
      name: "Marcus Vance",
      role: "Director of Outbound Sales",
      avatar: "/images/testimonial-avatar.jpg",
    },
    image: "/images/next.jpg",
    content: [
      "Not every Invitation to Bid (ITB) deserves your time. Subcontractors who bid on every project that lands in their inbox spread their estimating resources thin and win fewer contracts.",
      "To build a sustainable pipeline, trade contractors must qualify general contractors and project specifications before investing hours into cost calculations.",
      "1. Evaluate the GC's Track Record: Does the general contractor have a history of paying on time? How many other subcontractors are invited to bid? If 15 subcontractors are bidding the same trade, your probability drops exponentially.",
      "2. Match Your Crew Capacity: Bidding on a project 3x larger than your workforce capacity strains cash flow, payroll, and equipment reserves.",
      "3. Review Schedule of Values & Payment Terms: Scrutinize retainage percentages (typically 5-10%) and billing cycles. Ensure milestone disbursements align with material purchases.",
      "Our team helps subcontractors filter the most profitable, high-probability projects in their region, submitting standout proposals directly to decision makers."
    ],
  },
  {
    slug: "top-maintenance-tips-to-keep-your-cash-flow-healthy",
    title: "Top Maintenance Tips To Keep Your Cash Flow Healthy",
    excerpt:
      "Essential financial and operational workflows to ensure subcontractors protect their cash reserves while waiting on GC disbursements.",
    category: "Tips & Tricks",
    date: "November 5, 2025",
    readTime: "4 min read",
    author: {
      name: "Sarah Jenkins",
      role: "Construction Financial Strategist",
      avatar: "/images/testimonial-avatar.jpg",
    },
    image: "/images/testimonial-avatar.jpg",
    content: [
      "Cash flow is the lifeblood of any subcontracting business. Even with full order books, delayed payments from general contractors can create severe liquidity bottlenecks.",
      "1. Standardize Change Order Pre-Approvals: Never execute extra scope on a verbal agreement. Always get written sign-offs before buying extra material or committing labor hours.",
      "2. Leverage No-Upfront-Cost Estimating Services: By utilizing pay-on-award estimating partners like Muvad Consults, you eliminate fixed monthly overhead for in-house estimators when bid volumes fluctuate.",
      "3. Submit AIA G702 Billing Accurately: Errors on percentage-of-completion applications trigger payment delays that can push disbursement back 30 to 60 days.",
      "4. Track Schedule Milestones: Keep clear daily photo logs and time stamps of work completed to eliminate pushback during GC inspections."
    ],
  },
];
