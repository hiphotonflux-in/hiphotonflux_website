import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import PageLayout from "@/components/layout/PageLayout";
import aboutHero from "@/assets/online-school-equipment-home.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | PhotonFlux Capital</title>
        <meta
          name="description"
          content="Get in touch with PhotonFlux Capital. Contact us for career inquiries, partnership opportunities, or general questions."
        />
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <img
              src={aboutHero}
              alt="Quantitative trading visualization with data streams and financial charts"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/85" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Have a question or want to learn more about PhotonFlux Capital? 
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Contact Info */}
              <div className="flex flex-col justify-center items-center lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6 w-full max-w-lg">
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Office Location</h3>
                      <p className="text-muted-foreground">
                        123 Finance District<br />
                        Pune, Maharashtra 411001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 20 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <strong>General:</strong> info@PhotonFlux Capital.com<br />
                        <strong>Careers:</strong> careers@PhotonFlux Capital.com<br />
                        <strong>Support:</strong> support@PhotonFlux Capital.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Contact;
