export default function JsonLd() {
  const siteUrl = 'https://co-lab-www.vercel.app'
  const appUrl = 'https://app.colabapp.ai'

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Co-Lab',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description: 'AI-native digital sales room platform that builds personalized deal rooms from call transcripts.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      url: `${appUrl}/demo`,
    },
  }

  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Co-Lab',
    description:
      'AI-native digital sales room that analyzes call transcripts, auto-builds personalized pods with AI-suggested content blocks, and provides real-time buyer intent scoring.',
    url: siteUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '0',
        priceCurrency: 'USD',
        description: 'Up to 3 pods, visitor analytics, team collaboration',
        url: `${appUrl}/register`,
      },
      {
        '@type': 'Offer',
        name: 'Growth',
        price: '49',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '49',
          priceCurrency: 'USD',
          unitText: 'seat/month',
        },
        description: 'Up to 20 pods, Gong integration, CRM sync, priority support',
        url: `${appUrl}/register`,
      },
      {
        '@type': 'Offer',
        name: 'Accelerate',
        price: '99',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '99',
          priceCurrency: 'USD',
          unitText: 'seat/month',
        },
        description: 'Unlimited pods, AI Pod Builder, AI content generation, Salesforce & HubSpot',
        url: `${appUrl}/register`,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'AI Pod Builder from call transcripts',
      'Real-time buyer intent scoring',
      'AI-generated Mutual Action Plans',
      'White-label custom branding',
      'Salesforce & HubSpot integration',
      'DocuSign & PandaDoc e-signature',
      'Gong call transcript analysis',
      'Block-level engagement heatmaps',
      'Team collaboration & templates',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Co-Lab',
    url: siteUrl,
    description: 'AI-native digital sales rooms',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Co-Lab build a deal room with AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Co-Lab analyzes your Gong or Zoom call transcript, extracts buyer signals, timelines, and requirements, then auto-generates a complete deal room (Pod) with the exact content blocks, assets, and mutual action plan your buyer needs — ready to share in seconds.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a Pod in Co-Lab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Pod is a personalized digital sales room — an interactive, trackable space where you share proposals, demos, case studies, and next steps with your buyer. Each Pod includes real-time intent scoring so you know exactly when buyers engage.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does buyer intent scoring work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Co-Lab scores buyer intent in real time based on visits, session duration, blocks viewed, and re-engagement patterns. Every visit updates the intent score so you know exactly which deals are heating up and when to follow up.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Co-Lab train AI models on my sales data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Co-Lab does NOT train foundational AI models on your proprietary sales calls or buyer data. Your data is yours. Co-Lab is SOC 2 Type II compliant with end-to-end encryption.',
        },
      },
      {
        '@type': 'Question',
        name: 'What integrations does Co-Lab support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Co-Lab integrates with Salesforce, HubSpot, Gong, Slack, DocuSign, PandaDoc, and more. The platform connects your entire deal workflow from discovery call to signed contract.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Co-Lab cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Co-Lab offers three plans: Starter (Free) with up to 3 pods, Growth ($49/seat/mo) with up to 20 pods and CRM integrations, and Accelerate ($99/seat/mo) with unlimited pods and full AI features including AI Pod Builder, AI content generation, and AI chat agent.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
