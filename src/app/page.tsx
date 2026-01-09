import Link from 'next/link';
import businessData from '../data/business_details.json';
import ContactForm from '../components/ContactForm';
import VideoBackground from '../components/VideoBackground';

// Icons for services
const ServiceIcon = ({ type }: { type: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    integration: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    shield: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    aircraft: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    automation: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    consulting: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    support: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  };
  return <>{icons[type] || icons.integration}</>;
};

export default function Home() {
  return (
    <>
      {/* Hero Section with Contact Form and Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background with Video/Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary-dark to-dark">
          {/* Background Image Overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-secondary/10 rounded-full animate-spin-slow" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2394a3b8%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="relative section-container z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="max-w-xl">
                {/* Company Badge */}
                <div className="inline-flex items-center space-x-2 bg-dark-lighter/80 backdrop-blur border border-gray-700 rounded-full px-4 py-2 mb-6 animate-fade-in">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-text-muted text-sm">Trusted Technology Partner Since 2009</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-light mb-4 leading-tight animate-fade-in-up">
                  {businessData.companyName}
                  <span className="block gradient-text mt-2">{businessData.tagline}</span>
                </h1>

                <p className="text-base md:text-lg text-text-muted mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {businessData.description.slice(0, 150)}...
                </p>

                {/* Contact Form */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <ContactForm compact />
                </div>
              </div>
            </div>

            {/* Right Side - Video Background */}
            <div className="order-1 lg:order-2 h-[400px] lg:h-[600px] animate-slide-in-right">
              <VideoBackground 
                videoUrl="/videos/tech-background.mp4"
                fallbackImageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
                overlayOpacity={0.5}
              >
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <span className="text-4xl font-bold gradient-text">TI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-light mb-2">Innovation in Motion</h3>
                  <p className="text-text-muted text-sm">Watch our technology at work</p>
                  
                  {/* Play button for video hint */}
                  <div className="mt-6 animate-bounce-subtle">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto border-2 border-secondary/50 hover:bg-secondary/30 transition-all cursor-pointer">
                      <svg className="w-8 h-8 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </VideoBackground>
            </div>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-800 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {businessData.stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text group-hover:animate-bounce-subtle">{stat.value}</div>
                <div className="text-text-muted text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-dark-lighter relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">About Us</h2>
              <h3 className="section-title">Pioneering Technology Solutions for a Better Tomorrow</h3>
              <p className="section-subtitle mb-6">
                {businessData.description}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {businessData.values.slice(0, 4).map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-text-light font-semibold">{value.title}</h4>
                      <p className="text-text-muted text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-secondary">
                Discover Our Story
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-primary-light rounded-2xl overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-secondary/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-secondary/30 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-secondary">TI</span>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-dark-lighter border border-gray-700 rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-text-light font-semibold">ISO 9001:2015</div>
                    <div className="text-text-muted text-xs">Certified</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dark-lighter border border-gray-700 rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-text-muted text-xs">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">Our Expertise</h2>
            <h3 className="section-title">Comprehensive Technology Solutions</h3>
            <p className="section-subtitle mx-auto">
              We offer a wide range of services designed to meet the evolving needs of modern enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessData.services.map((service, index) => (
              <div
                key={service.id}
                className="card group animate-fade-in-up hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-dark group-hover:animate-bounce-subtle transition-all duration-300">
                  <ServiceIcon type={service.icon} />
                </div>
                <h4 className="text-xl font-semibold text-text-light mb-3">{service.title}</h4>
                <p className="text-text-muted text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-text-muted text-sm">
                      <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-secondary hover:text-yellow-400 font-medium text-sm transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-dark-lighter relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="section-container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">Our Certifications</h2>
            <h3 className="section-title">Committed to Quality & Excellence</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {businessData.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-dark border border-gray-700 rounded-lg px-8 py-4 text-text-light font-medium hover:border-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-6 animate-fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let&apos;s discuss how {businessData.companyName} can help you achieve your technology goals. Our team of experts is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300">
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
