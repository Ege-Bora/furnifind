import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - FurniFind',
  description: 'Terms and conditions for using FurniFind services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 27, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using FurniFind ("Service," "we," "our," or "us"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                FurniFind is an AI-powered furniture discovery platform that helps users find similar furniture products from third-party retailers by uploading images. Our Service provides:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Image upload and AI-powered furniture recognition</li>
                <li>Product recommendations from partner retailers</li>
                <li>Links to third-party retailer websites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Affiliate Disclosure</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mb-4">
                <p className="text-gray-900 font-semibold mb-2">IMPORTANT DISCLOSURE:</p>
                <p className="text-gray-700 mb-2">
                  This site contains affiliate links to third-party retailers. We may earn a commission when you make a purchase through these links, at no additional cost to you.
                </p>
                <p className="text-gray-700">
                  FurniFind is a participant in affiliate programs via AWIN and CJ Affiliate networks, partnering with retailers including Wayfair, Maisons du Monde, La Redoute, Etsy, Joss & Main, AllModern, Birch Lane, and specialty European furniture brands. When you click on product links and complete a purchase, we may receive compensation.
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                This affiliate relationship does not influence the products displayed or our recommendations. Our AI algorithm suggests products based solely on visual similarity and user preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Use License</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Use</h3>
              <p className="text-gray-700 mb-4">You are granted a limited, non-exclusive, non-transferable license to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Use the Service for personal, non-commercial purposes</li>
                <li>Upload images to find similar furniture products</li>
                <li>Browse product recommendations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Use</h3>
              <p className="text-gray-700 mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Upload images containing inappropriate, offensive, or copyrighted content</li>
                <li>Attempt to reverse engineer, copy, or extract our AI algorithms</li>
                <li>Use automated tools (bots, scrapers) to access the Service</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or store personal data of other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Content</h2>
              <p className="text-gray-700 mb-4">
                When you upload images to our Service:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>You retain all rights to your uploaded images</li>
                <li>You grant us a temporary license to process images for furniture matching</li>
                <li>Images are processed in real-time and not permanently stored</li>
                <li>You represent that you have the right to upload the images</li>
                <li>You will not upload images that violate any laws or third-party rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Links and Services</h2>
              <p className="text-gray-700 mb-4">
                Our Service contains links to third-party websites and retailers. Please note:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>We are not responsible for the content, policies, or practices of third-party websites</li>
                <li>Purchases are made directly with third-party retailers, not FurniFind</li>
                <li>Product availability, pricing, and shipping are controlled by retailers</li>
                <li>Third-party websites have their own terms of service and privacy policies</li>
                <li>We do not warrant or guarantee products sold by third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Accuracy, reliability, or completeness of product recommendations</li>
                <li>Uninterrupted or error-free operation of the Service</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We do not guarantee that AI-generated product matches will perfectly meet your needs or preferences. Results may vary based on image quality and available products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FURNIFIND SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or use</li>
                <li>Damages resulting from purchases made through affiliate links</li>
                <li>Issues with products purchased from third-party retailers</li>
                <li>Service interruptions, errors, or inaccuracies</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Our total liability shall not exceed the amount you paid to use the Service (currently $0, as the Service is free).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold FurniFind harmless from any claims, damages, losses, liabilities, and expenses arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Content you upload to the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of the Service (including but not limited to text, graphics, logos, icons, images, and software) are the exclusive property of FurniFind and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend your access to the Service immediately, without prior notice, for any reason, including if you breach these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none mb-4 text-gray-700 space-y-2">
                <li><strong>Legal Inquiries:</strong> <a href="mailto:legal@furnifind.org" className="text-purple-600 hover:text-purple-700 underline">legal@furnifind.org</a></li>
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
