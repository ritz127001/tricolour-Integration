'use client';

interface VideoBackgroundProps {
  videoUrl?: string;
  fallbackImageUrl?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

export default function VideoBackground({
  videoUrl = '/videos/tech-background.mp4',
  fallbackImageUrl = '/images/hero-fallback.jpg',
  overlayOpacity = 0.7,
  children,
}: VideoBackgroundProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImageUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      {children && (
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-secondary/30 rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-secondary/20 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary rounded-full animate-float" />
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}
