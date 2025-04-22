
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const API_URL= 'http://localhost:3000/auth/signup';
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // Demo registration simulation
    try {
      setIsLoading(true);
      
      // Simulate API call
      //await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await axios.post(API_URL, {
        name, email, password
      })
      const { message } = response.data;
      console.log(message);
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left side - image/decoration */}
        <div className="hidden md:block md:flex-1 bg-secondary/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYyaC0ydi00aDJ6bTAgMTBoLTJ2MmgydjJoMnYtNGgtMnptMTAgMGgtMnYyaDJ2LTJ6bS0yLTJoMnYtMmgtMnYyem0tNCAxMGgydjJoLTJ2LTJ6bTItMmgydi0yaC0ydjJ6bS0yLTR6TTQwIDQwdjJoMnYtMmgtMnptLTEwLTI1djFoMXYtMWgtMXptLTMgMGgxdjFoLTF2LTF6bTUtNGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tNCA0aDF2MWgtMXYtMXptLTIgMWgxdjFoLTF2LTF6bTktOGgxdjFoLTF2LTF6bS02IDBoMnYxaC0ydi0xem0tMiAwaDJ2MWgtMnYtMXptLTIgNGgydjFoLTJ2LTF6bTkgOGgydjFoLTJ2LTF6bS00IDBoMXYxaC0xdi0xem0yIDBoMXYxaC0xdi0xem0tOSAwaDJ2MWgtMnYtMXptMC00aDJ2MWgtMnYtMXptNC0xNmgxdjFoLTF2LTF6bTAgMmgxdjJoLTF2LTJ6bTAgMmgxdjFoLTF2LTF6TTIwIDQwdjJoMnYtMmgtMnptLTQtMjV2MWgxdi0xaC0xem0tMiAxdjFoLTF2LTFoMXptLTIgMXYxaC0xdi0xaDF6bTEgMnYxaC0xdi0xaDF6bS0yLTJ2MWgtMXYtMWgxem0tMi0xaDR2MWgtNHYtMXptMiA1djJoLTJ2LTJoMnptMjAgMHYyaC0ydi0yaDJ6bS0yIDNoLTJ2LTJoNHYyaC0yem0tMTUgMTJoMXYxaC0xdi0xem0tMiAwaDJ2MmgtMnYtMnptLTItMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="glass-card max-w-md text-center animate-float">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Sparkles size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Start Your Creative Journey</h3>
              <p className="text-muted-foreground">
                Join thousands of creators who use our platform to unlock their creative potential.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - form */}
        <div className="flex-1 flex flex-col justify-center p-4 md:p-10 lg:p-16">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Link>
              <h1 className="text-3xl font-bold mb-2">Create an account</h1>
              <p className="text-muted-foreground">Sign up to get started with Inspired</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                leftIcon={<User size={18} />}
                required
              />
              
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftIcon={<Mail size={18} />}
                required
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                leftIcon={<Lock size={18} />}
                helperText="Must be at least 8 characters"
                required
              />
              
              <Input
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                leftIcon={<Lock size={18} />}
                required
              />
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-input text-primary focus:ring-primary/20"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isLoading ? "Creating account..." : "Create account"}
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-primary hover:opacity-80 transition-opacity">
                  Sign in
                </Link>
              </p>
            </div>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-background text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <SocialButton icon="google" />
                <SocialButton icon="github" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon }: { icon: 'google' | 'github' }) => {
  return (
    <button
      type="button"
      className="w-full inline-flex justify-center items-center py-2.5 border border-input rounded-lg shadow-sm bg-background hover:bg-secondary/50 transition-colors"
    >
      {icon === 'google' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
          <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="currentColor" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" />
        </svg>
      )}
      <span className="text-sm font-medium">
        {icon === 'google' ? 'Google' : 'GitHub'}
      </span>
    </button>
  );
};

const Sparkles = ({ size = 24 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 3v4m5.6 2.8-3.3 2.2m3.4 5.8-3.5-2.1M12 21v-4M6.3 5.4l3.3 2.6M6.2 17.9l3.5-2.1" />
  </svg>
);

export default Register;
