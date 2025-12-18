import PageLayout from "@/components/layout/PageLayout";

const Terms = () => (
  <PageLayout>
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">PhotonFlux Terms & Conditions</h1>
        <p className="italic mb-4">Last updated: [Date]</p>
        <p>
          PhotonFlux exists to encourage thoughtful discussion, experimentation, and exchange of ideas. By using the platform, you agree to the following terms.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
        <p>Accessing or using PhotonFlux means you agree to these Terms and all applicable laws. If you disagree, do not use the platform.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. Purpose of the Platform</h2>
        <p>PhotonFlux is a discussion-oriented environment. It is not a source of professional, legal, medical, or financial advice. Content represents the views of individual users, not PhotonFlux.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. User Responsibilities</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Harass, abuse, or threaten others.</li>
          <li>Post illegal, deceptive, or malicious content.</li>
          <li>Attempt to disrupt or exploit the platform.</li>
          <li>Misrepresent your identity or affiliations.</li>
        </ul>
        <p>Curiosity is welcome. Bad faith is not.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. User-Generated Content</h2>
        <p>You retain ownership of content you submit.</p>
        <p>By posting on PhotonFlux, you grant us a non-exclusive, worldwide license to host, display, and distribute your content solely for operating and promoting the platform.</p>
        <p>We reserve the right to remove content that violates these Terms or community standards.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Intellectual Property</h2>
        <p>PhotonFlux branding, design, software, and original content are protected intellectual property. You may not copy, reverse-engineer, or reuse them without permission.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Moderation and Enforcement</h2>
        <p>PhotonFlux may:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Remove content.</li>
          <li>Suspend or terminate accounts.</li>
          <li>Limit access to features.</li>
        </ul>
        <p>These actions may be taken with or without prior notice when necessary to protect the platform or its users.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">7. Availability</h2>
        <p>PhotonFlux is provided “as is.” We do not guarantee uninterrupted access, permanent availability, or error-free operation.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">8. Limitation of Liability</h2>
        <p>PhotonFlux is not liable for:
          <ul className="list-disc ml-6">
            <li>User-generated content.</li>
            <li>Decisions made based on platform discussions.</li>
            <li>Data loss, downtime, or indirect damages.</li>
          </ul>
        </p>
        <p>Use the platform thoughtfully.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to Terms</h2>
        <p>Terms may evolve as PhotonFlux grows. Continued use constitutes acceptance of updated Terms.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">10. Governing Law</h2>
        <p>These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">11. Contact</h2>
        <p>Questions about these Terms can be sent to: <a href="mailto:legal@photonflux.io" className="text-primary underline">legal@photonflux.io</a></p>
      </div>
    </section>
  </PageLayout>
);

export default Terms;
