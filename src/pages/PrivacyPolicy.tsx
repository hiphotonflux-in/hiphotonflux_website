import PageLayout from "@/components/layout/PageLayout";

const PrivacyPolicy = () => (
  <PageLayout>
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">PhotonFlux Privacy Policy</h1>
        <p className="italic mb-4">Last updated: [Date]</p>
        <p>
          PhotonFlux is built for thinking, discussion, and exploration—not surveillance. This policy explains what data we collect, why we collect it, and how we treat it with restraint and respect.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. What We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Account information such as username, email address, or profile details if you choose to create an account.</li>
          <li>Content you intentionally submit, including posts, comments, or messages.</li>
          <li>Technical data such as IP address, device type, browser information, and interaction logs used for security and performance.</li>
          <li>Cookies or local storage used for authentication, preferences, and analytics.</li>
        </ul>
        <p>PhotonFlux does <strong>not</strong> collect sensitive personal data unless explicitly required and clearly disclosed.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. Why We Collect It</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Operate and improve PhotonFlux as a discussion and knowledge platform.</li>
          <li>Maintain system integrity, prevent abuse, and enforce community standards.</li>
          <li>Enable user features such as accounts, saved preferences, and content visibility.</li>
          <li>Analyze usage patterns in aggregate to improve performance and usability.</li>
        </ul>
        <p>We do not use your data for behavioral profiling or invasive tracking.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Cookies and Tracking</h2>
        <p>PhotonFlux uses minimal cookies:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Essential cookies for login and session management.</li>
          <li>Analytics cookies to understand how the platform is used at a high level.</li>
        </ul>
        <p>You can control cookies through your browser. Disabling them may limit some functionality.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Sharing</h2>
        <p>PhotonFlux does not sell personal data.</p>
        <p>Data may be shared only:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>When legally required.</li>
          <li>With infrastructure providers strictly for hosting, analytics, or security.</li>
          <li>To protect PhotonFlux, its users, or the public from harm or abuse.</li>
        </ul>
        <p>Any third parties are selected for necessity, not convenience.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Retention</h2>
        <p>We retain data only as long as it serves a legitimate purpose:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Account data remains while your account is active.</li>
          <li>Content remains unless deleted by you or removed for moderation reasons.</li>
          <li>Logs and technical data are retained for limited periods.</li>
        </ul>
        <p>You may request deletion of your account and associated data, subject to legal or operational constraints.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Security</h2>
        <p>PhotonFlux applies reasonable technical and organizational safeguards. No system is invulnerable, but we design defensively and update continuously.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">7. External Links</h2>
        <p>PhotonFlux may reference external resources. We are not responsible for the privacy practices or content of third-party sites.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">8. Policy Changes</h2>
        <p>As PhotonFlux evolves, this policy may change. Updates will be posted here with a revised date.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact</h2>
        <p>Privacy questions can be sent to: <a href="mailto:privacy@photonflux.io" className="text-primary underline">privacy@photonflux.io</a></p>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
