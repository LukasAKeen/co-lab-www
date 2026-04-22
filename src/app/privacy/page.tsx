import type { Metadata } from 'next'
import { Handshake, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Co-Lab',
  description: 'Privacy Policy for the Co-Lab AI-native digital sales room platform.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFF]">
      {/* Header */}
      <div className="border-b border-black/[0.05] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#6366F1] flex items-center justify-center">
              <Handshake size={16} className="text-white" />
            </div>
            <span className="font-semibold text-[15px] text-[#0D1117]">Co-Lab</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#34D399] bg-[#34D399]/10 px-2 py-0.5 rounded-full border border-[#34D399]/15">
              <Sparkles size={8} />
              AI
            </span>
          </a>
          <a href="/" className="text-sm text-[#6366F1] hover:text-[#4F46E5] font-medium transition-colors">
            Back to Home
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D1117] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#9BA3B8] mb-10">Last updated: April 8, 2026</p>

        <div className="prose prose-sm max-w-none text-[#3D4663] space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">1. Introduction</h2>
            <p>
              Co-Lab (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at colabapp.ai and our application at app.colabapp.ai (collectively, the &quot;Service&quot;).
            </p>
            <p>
              By using the Service, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">2. Information We Collect</h2>

            <h3 className="text-base font-semibold text-[#0D1117] mt-4 mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Account information:</strong> Name, email address, company name, and role when you register</li>
              <li><strong>Billing information:</strong> Payment details processed through our third-party payment processor</li>
              <li><strong>User content:</strong> Call transcripts, documents, presentations, and other materials you upload to the Service</li>
              <li><strong>Communications:</strong> Information you provide when contacting our support team</li>
            </ul>

            <h3 className="text-base font-semibold text-[#0D1117] mt-4 mb-2">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Usage data:</strong> Pages visited, features used, actions taken, and time spent on the Service</li>
              <li><strong>Device information:</strong> Browser type, operating system, device type, and screen resolution</li>
              <li><strong>Log data:</strong> IP address, access times, and referring URLs</li>
              <li><strong>Analytics:</strong> We use Vercel Analytics to collect anonymized page view and visitor data</li>
            </ul>

            <h3 className="text-base font-semibold text-[#0D1117] mt-4 mb-2">2.3 Buyer Engagement Data</h3>
            <p>
              When a buyer visits a Pod (deal room), we collect engagement data including visit timestamps, session duration, content blocks viewed, and device information. This data is used to generate intent scores and analytics for the Pod creator.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Provide, maintain, and improve the Service</li>
              <li>Process transactions and manage your subscription</li>
              <li>Generate AI-powered content suggestions, pod layouts, and intent scores</li>
              <li>Send transactional communications (account confirmations, billing notices)</li>
              <li>Provide customer support</li>
              <li>Monitor and analyze usage trends to improve the Service</li>
              <li>Detect and prevent fraud, abuse, and security incidents</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">4. AI and Your Data</h2>
            <p>
              <strong className="text-[#0D1117]">We do NOT train our foundational AI models on your proprietary sales calls, transcripts, or buyer data.</strong>
            </p>
            <p>
              Your content is processed by our AI features solely to provide the Service to you — for example, to analyze a call transcript and suggest Pod content blocks. This processing occurs in real time and your content is not retained for model training purposes.
            </p>
            <p>
              We may use aggregated, anonymized data to improve our AI algorithms and overall Service quality. This data cannot be used to identify you or any individual buyer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">5. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li><strong>Service providers:</strong> Third-party vendors who assist in operating the Service (hosting, payment processing, analytics, email delivery)</li>
              <li><strong>Integration partners:</strong> When you connect third-party tools (e.g., Salesforce, HubSpot, Gong), data is shared as necessary to enable the integration</li>
              <li><strong>Legal requirements:</strong> When required by law, subpoena, or government request</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With your consent:</strong> When you explicitly authorize sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li><strong>Encryption in transit:</strong> All data transmitted via TLS 1.3</li>
              <li><strong>Encryption at rest:</strong> All stored data encrypted with AES-256</li>
              <li><strong>Access controls:</strong> Role-based access controls and audit logging</li>
            </ul>
            <p className="mt-3">
              While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">7. Data Retention</h2>
            <p>
              We retain your account information and User Content for as long as your account is active or as needed to provide the Service. Upon account deletion, we will delete or anonymize your data within 90 days, except where retention is required by law or for legitimate business purposes (e.g., fraud prevention, resolving disputes).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request a machine-readable copy of your data</li>
              <li><strong>Objection:</strong> Object to certain processing of your data</li>
              <li><strong>Restriction:</strong> Request that we restrict processing of your data</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at privacy@colabapp.ai. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">9. Cookies and Tracking</h2>
            <p>
              We use essential cookies to maintain your session and preferences. We use Vercel Analytics for anonymized page view tracking. We do not use third-party advertising cookies or cross-site tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses where applicable.
            </p>
            <p>
              Data residency options (US / EU) are available for Enterprise customers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">11. Children&apos;s Privacy</h2>
            <p>
              The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">13. Contact</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-2">
              <strong className="text-[#0D1117]">Co-Lab</strong><br />
              Email: privacy@colabapp.ai
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
