import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-traffic.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Powered by Advanced AI
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                AI Traffic Sign Recognition
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Harness the power of artificial intelligence to automatically identify and classify road signs in real-time. Our cutting-edge system ensures safer, smarter driving through intelligent sign detection.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/upload">
                    Try Demo
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-20 blur-3xl" />
              <img
                src={heroImage}
                alt="AI Traffic Sign Recognition System showing a modern car with traffic signs"
                className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-card border shadow-sm hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Detection</h3>
            <p className="text-muted-foreground">
              Advanced machine learning algorithms trained on thousands of traffic signs for accurate recognition.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-card border shadow-sm hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Processing</h3>
            <p className="text-muted-foreground">
              Instantaneous sign detection and classification with minimal latency for on-the-go applications.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-card border shadow-sm hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">High Accuracy</h3>
            <p className="text-muted-foreground">
              Industry-leading precision in sign recognition across various weather conditions and lighting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
