import type { Metadata } from 'next'
import { Handshake, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service — Co-Lab',
  description: 'Terms of Service for the Co-Lab AI-native digital sales room platform.',
}

export default function TermsPage() {
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D1117] mb-2">Terms of Service</h1>
        <p className="text-sm text-[#9BA3B8] mb-10">Last updated: April 8, 2026</p>

        <div className="prose prose-sm max-w-none text-[#3D4663] space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Co-Lab platform (&quot;Service&quot;), operated by Co-Lab (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Service, including the website at colabapp.ai and the application at app.colabapp.ai.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">2. Description of Service</h2>
            <p>
              Co-Lab is an AI-native digital sales room platform that enables users to create personalized deal rooms (&quot;Pods&quot;), analyze call transcripts using artificial intelligence, track buyer engagement and intent, and manage the sales process through an interactive, collaborative workspace.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">3. Account Registration</h2>
            <p>
              To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
            </p>
            <p>
              You must be at least 18 years of age to create an account and use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">4. Subscriptions and Billing</h2>
            <p>
              Co-Lab offers multiple subscription tiers, including a free Starter plan and paid Growth and Accelerate plans. Paid subscriptions are billed on a per-seat, per-month basis unless otherwise stated.
            </p>
            <p>
              By subscribing to a paid plan, you authorize us to charge the applicable fees to your designated payment method. Fees are non-refundable except as expressly stated in these Terms or required by applicable law.
            </p>
            <p>
              We reserve the right to modify pricing with at least 30 days&apos; written notice. Continued use of the Service after a price change constitutes acceptance of the new pricing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">5. User Content</h2>
            <p>
              You retain ownership of all content you upload, create, or share through the Service (&quot;User Content&quot;), including but not limited to call transcripts, documents, presentations, and deal room materials.
            </p>
            <p>
              By uploading User Content, you grant Co-Lab a limited, non-exclusive, worldwide license to process, store, and display your content solely for the purpose of providing and improving the Service. We do not use your User Content to train our foundational AI models.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">6. AI Features</h2>
            <p>
              The Service includes artificial intelligence features that analyze call transcripts, suggest content blocks, generate deal room layouts, and provide buyer intent scoring. AI-generated outputs are provided as suggestions and should be reviewed by users before sharing with buyers.
            </p>
            <p>
              We do not guarantee the accuracy, completeness, or reliability of AI-generated content. You are solely responsible for reviewing and approving any AI-generated content before it is shared or published.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">7. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
              <li>Upload content that is defamatory, obscene, or infringes on the rights of others</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Use the Service to send unsolicited communications or spam</li>
              <li>Resell, sublicense, or redistribute the Service without our written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">8. Intellectual Property</h2>
            <p>
              The Service, including its original content, features, functionality, design, and underlying technology, is and will remain the exclusive property of Co-Lab and its licensors. The Service is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              &quot;Co-Lab,&quot; the Co-Lab logo, and &quot;Pod&quot; are trademarks of Co-Lab. You may not use these marks without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">9. Data Privacy</h2>
            <p>
              Your use of the Service is also governed by our <a href="/privacy" className="text-[#6366F1] hover:text-[#4F46E5] underline">Privacy Policy</a>, which describes how we collect, use, and protect your information. By using the Service, you consent to the practices described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
            </p>
            <p>
              You may cancel your account at any time through your account settings. Upon cancellation, your right to use the Service will cease immediately. We may retain certain data as required by law or for legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">11. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">12. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CO-LAB, ITS DIRECTORS, EMPLOYEES, PARTNERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SERVICE.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Co-Lab and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the state or federal courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">15. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1117] mb-3">16. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              <strong className="text-[#0D1117]">Co-Lab</strong><br />
              Email: legal@colabapp.ai
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
