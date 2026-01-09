import type { Metadata } from 'next';
import Link from 'next/link';
import businessData from '../../data/business_details.json';

export const metadata: Metadata = {
  title: `About Us | ${businessData.companyName}`,
  description: businessData.mission,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-primary-dark to-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2394a3b8%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">About Us</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
              Our Story of
              <span className="gradient-text block mt-2">Innovation & Excellence</span>
            </h1>
            <p className="text-lg text-text-muted">
              {businessData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-dark">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-light mb-4">Our Mission</h3>
              <p className="text-text-muted leading-relaxed">
                {businessData.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="card">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-light mb-4">Our Vision</h3>
              <p className="text-text-muted leading-relaxed">
                {businessData.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">Our Foundation</h2>
            <h3 className="section-title">Core Values That Drive Us</h3>
            <p className="section-subtitle mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessData.values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-dark border border-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-secondary transition-colors">
                  <span className="text-3xl font-bold gradient-text">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold text-text-light mb-3">{value.title}</h4>
                <p className="text-text-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-24 bg-dark">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">Our Journey</h2>
            <h3 className="section-title">Milestones in Our History</h3>
            <p className="section-subtitle mx-auto">
              From our humble beginnings to becoming a trusted technology partner.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-secondary via-secondary/50 to-transparent hidden md:block" />

            <div className="space-y-12">
              {businessData.history.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="card">
                      <span className="text-secondary font-bold text-lg">{milestone.year}</span>
                      <h4 className="text-xl font-semibold text-text-light mt-2 mb-3">{milestone.title}</h4>
                      <p className="text-text-muted">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-secondary rounded-full hidden md:block" />

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {businessData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-text-muted text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">Quality Assurance</h2>
            <h3 className="section-title">Certifications & Standards</h3>
            <p className="section-subtitle mx-auto">
              Our commitment to excellence is validated by internationally recognized certifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {businessData.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-dark border border-gray-700 rounded-xl p-8 text-center hover:border-secondary transition-colors group"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-text-light">{cert}</h4>
                <p className="text-text-muted text-sm mt-1">Certified</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10">
            Join the growing list of organizations that trust Tricolour Integration for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Contact Us Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-4">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
