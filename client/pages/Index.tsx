import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BrandsSlider from "@/components/BrandsSlider";
import InterventionZones from "@/components/InterventionZones";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Services />
      <BrandsSlider />
      <InterventionZones />
      <Testimonials />
      <ContactForm />
      <WhatsAppButton />
    </Layout>
  );
}
