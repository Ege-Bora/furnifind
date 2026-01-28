import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - FurniFind',
  description: 'Learn how FurniFind collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 27, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                FurniFind ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Contact information (name, email address) when you use our contact form</li>
                <li>Images you upload for furniture matching (processed temporarily and not stored permanently)</li>
                <li>Feedback and correspondence if you contact us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, interactions)</li>
                <li>IP address and geographic location</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Providing and maintaining our AI-powered furniture matching service</li>
                <li>Processing your uploaded images to find similar furniture products</li>
                <li>Improving and optimizing our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Communicating with you about your inquiries</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate Disclosure</h2>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
                <p className="text-gray-900 font-semibold mb-2">Important Notice:</p>
                <p className="text-gray-700">
                  This website uses affiliate links and may earn commission from purchases made through links to third-party retailers. When you click on product links and make a purchase, we may receive a commission at no additional cost to you. This helps support our free service.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">We work with third-party services including:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Affiliate Networks:</strong> To provide product links and earn commissions</li>
                <li><strong>Analytics Services:</strong> To understand how visitors use our website</li>
                <li><strong>Hosting Providers:</strong> To host our website and services</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These third parties have their own privacy policies. We encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. We use:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our website</li>
                <li><strong>Marketing Cookies:</strong> Used for affiliate tracking and personalization</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings. See our <a href="/cookie-policy" className="text-purple-600 hover:text-purple-700 underline">Cookie Policy</a> for more details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights (GDPR)</h2>
              <p className="text-gray-700 mb-4">If you are in the European Economic Area (EEA), you have the following rights:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> Opt out of certain data processing</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, contact us at privacy@furnifind.org
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none mb-4 text-gray-700 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:privacy@furnifind.org" className="text-purple-600 hover:text-purple-700 underline">privacy@furnifind.org</a></li>
                <li><strong>General Inquiries:</strong> <a href="mailto:hello@furnifind.org" className="text-purple-600 hover:text-purple-700 underline">hello@furnifind.org</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
