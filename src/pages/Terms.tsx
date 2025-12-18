import PageLayout from "@/components/layout/PageLayout";

const Terms = () => (
  <PageLayout>
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
        <p>
          By accessing this website you agree to these Terms & Conditions (“Terms”). If you do not
          agree, do not use this website.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>All content, logos, and materials on this site are owned by PhotonFluxCapital.</li>
          <li>No reproduction without permission.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">User Conduct</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>No unlawful, harmful, or malicious activity.</li>
          <li>No automated data scraping or misuse.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Disclaimers</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Information is for general purposes only; not investment advice.</li>
          <li>Content may change without notice.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
        <p>
          PhotonFluxCapital is not liable for damages arising from use of this website, to the extent permitted by law.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Governing Law</h2>
        <p>This site and these terms are governed by Indian law.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
        <p>
          For questions about these Terms, contact info@photonfluxcapital.com.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default Terms;

