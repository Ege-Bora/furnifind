import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy - FurniFind',
  description: 'Learn about how FurniFind uses cookies and similar tracking technologies.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 27, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies help us understand how you use our website, remember your preferences, and improve your overall experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                FurniFind uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Essential Operations:</strong> To enable core website functionality</li>
                <li><strong>Analytics:</strong> To understand how visitors use our website and identify areas for improvement</li>
                <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                <li><strong>Affiliate Tracking:</strong> To track product clicks and purchases for commission purposes</li>
                <li><strong>Performance:</strong> To optimize website loading speed and performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Essential Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>Examples:</strong> Session management, security features, load balancing
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Duration:</strong> Session cookies (deleted when you close your browser)
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Duration:</strong> Up to 2 years
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Marketing/Affiliate Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies track your activity across websites to help advertisers deliver more relevant advertising and to track affiliate commissions.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>Examples:</strong> Affiliate network cookies, product click tracking, conversion tracking
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Duration:</strong> Up to 30 days
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Preference Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies allow the website to remember choices you make (such as your preferred language or region) to provide enhanced, personalized features.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>Examples:</strong> Language preferences, display settings, filter preferences
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Duration:</strong> Up to 1 year
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver advertisements.
              </p>
              <p className="text-gray-700 mb-4">
                Third-party services that may set cookies on our website include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Affiliate Networks:</strong> To track product clicks and purchases (e.g., Wayfair, IKEA, Article, West Elm, Pottery Barn)</li>
                <li><strong>Analytics Providers:</strong> To analyze website traffic and user behavior (e.g., Google Analytics)</li>
                <li><strong>Hosting Services:</strong> To provide website hosting and content delivery (e.g., Vercel)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These third parties have their own privacy policies governing their use of cookies. We recommend reviewing their policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Control Cookies</h2>
              <p className="text-gray-700 mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in the following ways:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Block all cookies</li>
                <li>Accept only first-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Alert you when a cookie is being set</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Here's how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6">
                <p className="text-gray-900 font-semibold mb-2">Note:</p>
                <p className="text-gray-700">
                  Blocking or deleting cookies may impact your experience on our website. Some features may not function properly without cookies.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Do Not Track (DNT)</h2>
              <p className="text-gray-700 mb-4">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activities tracked. We currently do not respond to DNT signals, as there is no industry standard for how to respond to such signals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">More Information</h2>
              <p className="text-gray-700 mb-4">
                For more information about how we process your personal data, please see our <a href="/privacy" className="text-purple-600 hover:text-purple-700 underline">Privacy Policy</a>.
              </p>
              <p className="text-gray-700 mb-4">
                For information about our affiliate relationships, please see our <a href="/terms" className="text-purple-600 hover:text-purple-700 underline">Terms of Service</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies, please contact us:
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
