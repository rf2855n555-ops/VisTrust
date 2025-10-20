
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { CTASection } from '@/components/cta-section'
import { TrustSection } from '@/components/trust-section'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <CTASection />
    </div>
  )
}
