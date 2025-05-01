
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 mb-6">Ready to Boost Your Creativity?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who use Inspired to break through creative blocks and find new directions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="btn-primary flex items-center gap-2">
              Start Free Trial <ArrowRight size={16} />
            </Link>
            <Link to="/login" className="btn-outline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
