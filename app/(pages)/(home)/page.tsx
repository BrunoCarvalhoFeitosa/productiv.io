import { PreHeader } from "@/app/components/common/pre-header"
import { Header } from "@/app/components/common/header"
import { HeroSection } from "@/app/components/home/hero-section"
import { CustomersSection } from "@/app/components/home/customers-section"
import { FeaturesSection } from "@/app/components/home/features-section"
import { PricingSection } from "@/app/components/home/pricing-section"
import { TestimonialsSection } from "@/app/components/home/testimonials-section"
import { SignUpSection } from "@/app/components/home/sign-up-section"
import { Footer } from "@/app/components/common/footer"

const HomePage = () => {
  return (
    <div>
      <PreHeader />
      <Header />
      <main>
        <HeroSection />
        <CustomersSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <SignUpSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
