import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms adn Condition",
  description: "Terms and condition page for YouthLink Network",
};

export default function Terms() {
  return (
    <div className="wrapper mt-8 mb-20">
      <h2 className="text-4xl mb-4">Terms and Conditions</h2>

      <div className="space-y-6 text-gray-700 leading-7">
        <p>
          By subscribing to any service provided by{" "}
          <strong>YouthLink Network</strong>, you acknowledge that you have
          read, understood, and agreed to the following terms and conditions.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Subscription & Payment
          </h2>
          <p>
            All subscription fees must be paid in advance. Service activation,
            renewal, and upgrades are subject to successful payment
            verification.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Refund Policy</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              For <strong>1-month packages</strong>, refund requests are
              accepted only within <strong>3 days</strong> of purchase. No
              refunds will be issued after this period.
            </li>
            <li>
              For subscriptions covering <strong>multiple months</strong>, any
              unused future months may be cancelled and refunded. The currently
              active month is non-refundable once the 3-day refund window has
              expired.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Customer Conduct</h2>
          <p>
            Customers are expected to communicate respectfully with our staff.
            Harassment, abuse, or inappropriate behavior toward employees will
            not be tolerated and may result in service restrictions where
            applicable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Complaints & Support
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Complaints regarding staff conduct or service quality must be
              submitted through our official <strong>Hotline</strong> or
              <strong> Email</strong>.
            </li>
            <li>
              <strong>WhatsApp is not an official complaint channel</strong> and
              complaints submitted there may not be processed.
            </li>
            <li>
              When submitting a complaint via email, please include any relevant
              screenshots, recordings, invoices, or other supporting attachments
              to help us investigate the matter efficiently.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Privacy</h2>
          <p>
            Your personal information and complaint details are handled
            confidentially. We do not share your personal data with third
            parties except where required by law or when necessary to resolve a
            service issue.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Service Availability
          </h2>
          <p>
            While we strive to provide uninterrupted internet service,
            occasional maintenance, upgrades, or unforeseen technical issues may
            result in temporary service interruptions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
          <p>
            YouthLink Network reserves the right to modify these Terms &
            Conditions at any time. Updated terms will become effective upon
            publication on our official platforms.
          </p>
        </div>

        <p className="pt-4 border-t text-sm text-gray-500">
          Last updated: July 2026
        </p>
      </div>
    </div>
  );
}
