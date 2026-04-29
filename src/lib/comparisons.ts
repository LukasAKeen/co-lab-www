export type ComparisonRow = {
  label: string
  coLab: string
  competitor: string
}

export type ComparisonDetail = {
  heading: string
  body: string
}

export type Comparison = {
  slug: string
  competitor: {
    name: string
    site: string
    description: string
    geography: string
  }
  metaTitle: string
  metaDescription: string
  intro: string
  chooseCoLabIf: string[]
  chooseCompetitorIf: string[]
  table: ComparisonRow[]
  details: ComparisonDetail[]
}

const PRICING_NOTE =
  'Pricing accurate as of April 2026 based on each vendor’s public site. Check vendor pages for current numbers.'

export const comparisons: Record<string, Comparison> = {
  'co-lab-vs-trumpet': {
    slug: 'co-lab-vs-trumpet',
    competitor: {
      name: 'Trumpet',
      site: 'sendtrumpet.com',
      description:
        'UK-based digital sales room platform. Pioneers of the "Pods" framing for buyer-facing micro-sites.',
      geography: 'UK / EMEA',
    },
    metaTitle: 'Co-Lab vs Trumpet — Digital Sales Rooms Compared',
    metaDescription:
      'Honest comparison of Co-Lab and Trumpet for B2B sales teams choosing a digital sales room. Pricing, features, AI capabilities, and integrations side by side.',
    intro:
      'Both Co-Lab and Trumpet sit in the digital sales room category — buyer-facing micro-sites where a deal lives between calls. The two diverge most on AI positioning and where the maturity curve is. This page lays out the differences honestly, in case you’re evaluating both.',
    chooseCoLabIf: [
      'You want AI positioned as a deal coach (drafts the first version, flags stalling deals) rather than the room’s primary feature.',
      'You’re US-based and prefer a vendor in the same time zone for support.',
      'You want a free Starter tier you can run real deals on without a credit card.',
      'You’d rather start at $35/seat than £36/seat (≈$45) and scale into AI features later.',
    ],
    chooseCompetitorIf: [
      'You’re EMEA-based and want a vendor with the same regulatory footprint.',
      'You need a more mature feature set with deeper integrations (DocuSign, PandaDoc, Gong on the Scale tier) right now.',
      'Proposals, quotes, and full e-signature inside the room are core to your sales motion today.',
      'You want a vendor with category-leading recognition (Trumpet was #28 on the 2026 Sifted 100).',
    ],
    table: [
      { label: 'Category', coLab: 'Digital sales room + AI deal coach', competitor: 'Digital sales room + revenue collaboration' },
      { label: 'Headquartered', coLab: 'United States', competitor: 'United Kingdom' },
      { label: 'Free tier', coLab: 'Yes (Starter, up to 3 pods)', competitor: 'Trial only' },
      { label: 'Entry price', coLab: '$35/seat/mo (Growth)', competitor: '£36/seat/mo (Pro, ≈$45)' },
      { label: 'Top tier list price', coLab: '$55/seat/mo (Accelerate); Enterprise custom', competitor: '£75/seat/mo (Scale, ≈$95)' },
      { label: 'AI framing', coLab: 'AI as deal coach — drafts, flags, suggests', competitor: 'AI built into pods + analytics' },
      { label: 'Mutual Action Plans', coLab: 'AI-drafted from call transcript', competitor: 'Built-in MAPs' },
      { label: 'Intent / engagement signals', coLab: 'Real-time intent score + live signal feed', competitor: 'Revenue intelligence on engagement' },
      { label: 'CRM integrations', coLab: 'Close (Growth); Salesforce + HubSpot (Accelerate)', competitor: 'Two-way CRM sync' },
      { label: 'White-label / custom domain', coLab: 'Yes', competitor: 'Yes' },
    ],
    details: [
      {
        heading: 'AI positioning',
        body:
          'Co-Lab leans into the "AI as a deal coach" framing — the rep is still the closer; AI drafts the first version of the pod from a call transcript, surfaces buyer signals, and flags stalling deals. Trumpet markets AI as one of the features inside its pods (templates, content, analytics), with a broader "Intelligent Revenue Collaboration" positioning. If you want the AI to feel like an explicit teammate, Co-Lab is closer to that frame; if you want a polished room with AI baked into the workflow, Trumpet is the more mature option.',
      },
      {
        heading: 'Maturity and integrations',
        body:
          'Trumpet is older, has more public customer logos, and ships with deeper third-party integrations on the Scale tier (DocuSign, PandaDoc, Gong, advanced analytics). Co-Lab is earlier-stage, with a leaner integration list — Close on Growth; Salesforce, HubSpot, and Zapier on Accelerate. If you need DocuSign or Gong in the room today, Trumpet has the head start.',
      },
      {
        heading: 'Pricing and entry',
        body:
          'Co-Lab starts free with up to 3 pods — useful for solo AEs trying it on a real deal. Growth is $35/seat/mo, Accelerate is $55/seat/mo, Enterprise is custom. Trumpet starts at £36/seat/mo (≈$45) on the Pro tier and £75/seat/mo (≈$95) on Scale. ' + PRICING_NOTE,
      },
      {
        heading: 'Geography and support',
        body:
          'Trumpet is UK-headquartered with strong EMEA presence. Co-Lab is US-based. For deals where time-zone overlap with support matters or where data residency is part of procurement, the geographic fit is a real factor.',
      },
    ],
  },

  'co-lab-vs-aligned': {
    slug: 'co-lab-vs-aligned',
    competitor: {
      name: 'Aligned',
      site: 'alignedup.com',
      description:
        'Collaborative deal workspace for sales and CS teams with AI agents that auto-build deal resources after calls.',
      geography: 'Israel / Global',
    },
    metaTitle: 'Co-Lab vs Aligned — Deal Workspace Comparison',
    metaDescription:
      'Side-by-side comparison of Co-Lab and Aligned. Honest take on AI positioning, security, pricing, and which is the right fit for B2B sales teams in 2026.',
    intro:
      'Co-Lab and Aligned both operate in the buyer-seller workspace category, but they prioritize different things. Aligned has a head start on enterprise security (SOC 2 Type II, SSO, SCIM) and AI agents that act on the workspace. Co-Lab leans into the AE’s daily workflow with an AI deal coach and a tighter pricing entry point. Both are worth evaluating; here’s a fair comparison.',
    chooseCoLabIf: [
      'Your sales team is mid-market and you want to start with one or two AEs before rolling wider.',
      'You like the "AI as deal coach" framing more than the "AI agents do work in your workspace" framing.',
      'You want a $35/seat/mo entry point on Growth without negotiating annual commitments.',
      'You don’t need SOC 2 Type II yet and would rather pay less for similar core capabilities.',
    ],
    chooseCompetitorIf: [
      'You’re selling to enterprise buyers who require SOC 2 Type II, GDPR posture, SSO, and SCIM at every tier.',
      'You want AI agents that auto-build deal resources, executive summaries, and action items after every call without manual triggering.',
      'You need 1TB of integrated content storage with deeper content management.',
      'You’re looking for a free plan that supports a full team running real deals.',
    ],
    table: [
      { label: 'Category', coLab: 'Digital sales room + AI deal coach', competitor: 'AI deal workspace for sales & CS' },
      { label: 'Free tier', coLab: 'Yes (Starter, up to 3 pods)', competitor: 'Yes (free plan, no credit card)' },
      { label: 'Entry price', coLab: '$35/seat/mo (Growth)', competitor: 'Multiple paid tiers; check vendor for current' },
      { label: 'AI capabilities', coLab: 'AI coach: drafts pods, flags stalling deals, scores intent', competitor: 'AI agents: auto-build executive summaries, content, action items' },
      { label: 'Security', coLab: 'Enterprise tier mentions SSO/SAML/SCIM + audit logs', competitor: 'SOC 2 Type II, GDPR, SSO, SCIM' },
      { label: 'Mutual Action Plans', coLab: 'AI-drafted from call transcript', competitor: 'Built-in MAPs' },
      { label: 'Content storage', coLab: 'Pod-scoped attachments', competitor: '1TB integrated content storage' },
      { label: 'White-label', coLab: 'Yes', competitor: 'Yes' },
    ],
    details: [
      {
        heading: 'Security and enterprise readiness',
        body:
          'Aligned has more public enterprise security posture today: SOC 2 Type II, GDPR, SSO, and SCIM are advertised on the platform. Co-Lab’s Enterprise tier lists the same capability set (SSO/SAML/SCIM, audit logs, dedicated CSM, SLA), but on a custom-pricing basis. For procurement-led buying motions, Aligned’s public security pages are easier to pass to security review out of the box.',
      },
      {
        heading: 'AI: coach vs agent',
        body:
          'The two products have different mental models for AI. Aligned’s AI agents do work inside the workspace — auto-building deal resources after calls, generating executive summaries, surfacing risk. Co-Lab’s AI is positioned as a coach: it drafts the first version of the pod from a transcript, scores buyer intent in real time, and flags deals that have gone quiet. If you want the AI to feel like a teammate that nudges you, Co-Lab; if you want autonomous agents that run when the call ends, Aligned.',
      },
      {
        heading: 'Pricing transparency',
        body:
          'Co-Lab publishes per-seat list prices on every paid tier (Starter free, Growth $35, Accelerate $55, Enterprise custom). Aligned advertises a free plan but lists its paid tiers as ranges supporting different team sizes. ' + PRICING_NOTE,
      },
      {
        heading: 'Where each product wins',
        body:
          'Aligned wins on enterprise security, content management depth, and full-team free plans. Co-Lab wins on transparent per-seat pricing, the AI deal-coach narrative for individual AEs, and a tighter feature set focused on the deal-room-plus-coach loop. Honest take: if you’re selling to Fortune 1000 with procurement, start with Aligned. If you’re mid-market and want a leaner tool that frames AI as your AE’s assistant, start with Co-Lab.',
      },
    ],
  },

  'co-lab-vs-dock': {
    slug: 'co-lab-vs-dock',
    competitor: {
      name: 'Dock',
      site: 'dock.us',
      description:
        'Client-facing workspace for revenue teams. Strong onboarding and CS angle; charges only for internal seats with unlimited free external collaborators.',
      geography: 'United States',
    },
    metaTitle: 'Co-Lab vs Dock — Client Workspace Comparison',
    metaDescription:
      'Co-Lab and Dock side by side: pricing, AI, integrations, and which is right for sales-only vs full revenue lifecycle workflows.',
    intro:
      'Co-Lab and Dock overlap in the buyer-facing workspace category but differ on scope and pricing model. Dock spans sales, onboarding, and renewals with a "Connected Workspaces" pattern; Co-Lab is sales-room-first with an AI deal coach. Dock’s pricing model — pay only for internal seats, unlimited free external collaborators — is genuinely interesting. Here’s a fair comparison.',
    chooseCoLabIf: [
      'Your immediate need is sales rooms with AI assistance, not a full revenue lifecycle workspace.',
      'You’d rather pay $35/seat/mo than $49–59/seat/mo (with a 5-seat minimum on Growth).',
      'You want AI that drafts the first pod from a call transcript and flags stalling deals.',
      'You don’t need to chain multiple workspaces (sales → onboarding → renewals) on day one.',
    ],
    chooseCompetitorIf: [
      'You need one platform for sales rooms, customer onboarding, and renewals with linked Connected Workspaces.',
      'You want unlimited free external collaborators (charge only for internal team seats).',
      'You’re past 5 seats and the per-seat math works in your favor on Growth.',
      'Your revenue motion includes heavy onboarding workflows that share infrastructure with deal rooms.',
    ],
    table: [
      { label: 'Category', coLab: 'Digital sales room + AI deal coach', competitor: 'Revenue enablement workspace (sales + CS + renewals)' },
      { label: 'Free tier', coLab: 'Yes (up to 3 pods)', competitor: 'Yes' },
      { label: 'Entry price', coLab: '$35/seat/mo (Growth)', competitor: '$49/seat/mo (Starter)' },
      { label: 'Mid tier', coLab: '$55/seat/mo (Accelerate)', competitor: '$59/seat/mo (Growth, 5-seat minimum)' },
      { label: 'External collaborators', coLab: 'Unlimited buyer access included', competitor: 'Unlimited free external collaborators' },
      { label: 'AI focus', coLab: 'Coach: drafts, flags, scores intent', competitor: 'Workflow automation + content embedding' },
      { label: 'Connected workspaces', coLab: 'Single pod per deal', competitor: 'Yes (Growth + Enterprise) — chain sales → onboarding → renewals' },
      { label: 'Best fit', coLab: 'Sales-led teams that want a tight AE workflow', competitor: 'Teams running sales + post-sale on one stack' },
    ],
    details: [
      {
        heading: 'Scope: sales-only vs full lifecycle',
        body:
          'Dock’s killer feature is Connected Workspaces — link a sales deal room to an onboarding plan to a renewal portal so the buyer’s experience is continuous from first demo through renewal. Co-Lab focuses on the deal-room moment: draft a pod from a call, watch buyer intent, close. Both directions are valid; the question is whether your team currently sells the way Dock’s pattern assumes (sales handing off to CS, CS handing off to renewal), or whether you’re still optimizing the deal-room loop itself.',
      },
      {
        heading: 'Pricing model',
        body:
          'Dock’s "pay only for internal seats" model is unusually buyer-friendly: external collaborators are unlimited and free. The flip side is the per-internal-seat numbers are higher ($49 Starter, $59 Growth with a 5-seat minimum). Co-Lab’s per-seat pricing is lower ($35 Growth, $55 Accelerate) and starts free without a seat minimum — but every plan includes external buyer access too. The math depends on your team size and how many deals you run concurrently. ' + PRICING_NOTE,
      },
      {
        heading: 'AI capabilities',
        body:
          'Dock embeds AI into workflow automation and content surfacing, with a focus on letting templates auto-personalize from CRM fields. Co-Lab’s AI specifically targets the deal-coach role: drafting the first version of a pod from a call transcript, scoring buyer intent in real time, and flagging deals that have gone cold. If your AEs are overwhelmed by the time it takes to assemble a room from scratch, Co-Lab’s draft-from-transcript loop is the differentiator.',
      },
      {
        heading: 'Honest verdict',
        body:
          'Dock is more mature and broader-scope; Co-Lab is leaner and more focused on the AE’s daily workflow. If you’re running sales + CS + renewals together and want a single workspace pattern across all three, Dock is the safer pick. If you’re sales-led and the bottleneck is "AEs spend hours assembling deal rooms," Co-Lab’s narrower focus and AI draft loop is the better fit.',
      },
    ],
  },

  'co-lab-vs-recapped': {
    slug: 'co-lab-vs-recapped',
    competitor: {
      name: 'Recapped',
      site: 'recapped.io',
      description:
        'Mutual Action Plan-first digital sales room with strong Salesforce integration and a deal engagement score.',
      geography: 'United States',
    },
    metaTitle: 'Co-Lab vs Recapped — Mutual Action Plans Compared',
    metaDescription:
      'Comparison of Co-Lab and Recapped for B2B sales teams. Both are digital sales rooms with mutual action plans; here’s how the two differ on AI, pricing, and scope.',
    intro:
      'Recapped pioneered Mutual Action Plans inside a digital sales room and has deep Salesforce integration. Co-Lab covers the same MAP territory but starts from a different angle — an AI deal coach that drafts the first version of the entire pod (not just the MAP) from a call transcript. If you’re comparing the two, the question is mostly about scope and AI framing.',
    chooseCoLabIf: [
      'You want the AI to draft the whole pod (blocks, ROI, MAP) from a call transcript — not just the action plan.',
      'You want a free Starter tier that supports up to 3 pods (Recapped’s free plan is 1 user).',
      'Your team isn’t Salesforce-native and you’d rather have HubSpot, Close, or Zapier as first-class options.',
      'You want a transparent per-seat ladder (Starter free → Growth $35 → Accelerate $55 → Enterprise custom).',
    ],
    chooseCompetitorIf: [
      'Mutual Action Plans are the centerpiece of your sales motion and you want the most established MAP product on the market.',
      'You’re fully on Salesforce and want deal stages, contacts, and engagement scores syncing in seconds.',
      'You need a Deal Engagement Score with a long track record (Recapped has been iterating on this for years).',
      'You’re comfortable negotiating pricing — Recapped’s list prices are typically negotiable.',
    ],
    table: [
      { label: 'Category', coLab: 'Digital sales room + AI deal coach', competitor: 'Mutual Action Plan + digital sales room' },
      { label: 'Free tier', coLab: 'Yes (Starter, up to 3 pods)', competitor: 'Yes (1 user, unlimited rooms + MAPs)' },
      { label: 'Entry price', coLab: '$35/seat/mo (Growth)', competitor: '$45/seat/mo (Collaborate)' },
      { label: 'AI focus', coLab: 'Drafts pods + MAPs + content from transcript', competitor: 'Engagement scoring + visibility' },
      { label: 'Mutual Action Plans', coLab: 'AI-drafted from call transcript', competitor: 'Collaborative roadmap (their core feature)' },
      { label: 'Engagement scoring', coLab: 'Real-time intent score', competitor: 'Deal Engagement Score (long-running feature)' },
      { label: 'Salesforce integration', coLab: 'Available on Accelerate', competitor: 'First-class — pulls deal stages and contacts in seconds' },
      { label: 'Buyer enablement', coLab: 'Pod-based content + MAP', competitor: 'Pilot management + onboarding workflows' },
    ],
    details: [
      {
        heading: 'Mutual Action Plan: pioneered vs reframed',
        body:
          'Recapped helped popularize Mutual Action Plans as a sales tool — their "Collaborative Roadmap" lets sales and buyers co-create timelines, assign owners, and track progress. They have years of customer feedback on this exact feature. Co-Lab also ships MAPs (auto-drafted from a call transcript), but inside a broader pod that includes the rest of the deal room — proposal blocks, ROI calculator, video, etc. The choice is mostly about whether the MAP is the spine of your motion (Recapped) or one feature inside the room (Co-Lab).',
      },
      {
        heading: 'Engagement scoring',
        body:
          'Both products track buyer engagement and surface a numeric score. Recapped’s Deal Engagement Score has the longer track record. Co-Lab’s real-time intent score works similarly — visits, session duration, blocks viewed — and shows a live signal feed in the workspace. Functionally similar; pick the one you trust more on track record (Recapped) or on integration with the rest of the deal room workflow (Co-Lab).',
      },
      {
        heading: 'Salesforce integration',
        body:
          'Recapped is Salesforce-native and ships fast SFDC sync (deal stages, contacts, engagement) on every paid tier. Co-Lab includes Salesforce on Accelerate ($55/seat/mo) and HubSpot too; if you’re running Salesforce and that’s a hard requirement at the entry tier, Recapped has the edge.',
      },
      {
        heading: 'Pricing reality',
        body:
          'Recapped’s Collaborate tier is $45/seat/mo, often negotiated down ~13% (per Vendr data, median annual spend ~$14,970 for 10 users). Co-Lab’s Growth tier is $35/seat/mo and Accelerate is $55/seat/mo at list. Both are negotiable at scale. ' + PRICING_NOTE,
      },
    ],
  },
}

export function getComparisonSlugs(): string[] {
  return Object.keys(comparisons)
}

export function getComparison(slug: string): Comparison | null {
  return comparisons[slug] ?? null
}
