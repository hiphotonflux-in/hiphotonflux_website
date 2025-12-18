import PageLayout from "@/components/layout/PageLayout";

const PrivacyPolicy = () => (
  <PageLayout>
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p>
          PhotonFluxCapital (“we”, “our”, “us”) respects your privacy. This policy describes
          how we collect, use, and protect information through our website.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Information you provide in contact/career forms (e.g., name, email, resume, message)</li>
          <li>Analytics data and cookies (for improving the website)</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Respond to your inquiries or job applications</li>
          <li>Maintain and improve the website</li>
          <li>Comply with legal requirements</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Sharing Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Trusted service providers (cloud hosting, analytics)</li>
          <li>Legal authorities when required by law</li>
          <li>We do not sell your personal data</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Security</h2>
        <p>We use technical and organizational measures to protect your data.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Contact us to access, update, or delete your information</li>
          <li>Email: info@photonfluxcapital.com</li>
        </ul>
        <p className="mt-8 text-gray-500">
          This policy may be updated; please check back occasionally.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;

