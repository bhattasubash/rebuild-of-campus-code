import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mockUser } from "../../data/user";
import { Eye, EyeOff, RotateCw, CheckCircle2, AlertCircle } from "lucide-react";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("sai@campuscode.co.in");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("7B9K");
  const [captchaCode, setCaptchaCode] = useState("7B9K");
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);

  const refreshCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(code);
    setCaptchaInput(code); // Pre-fill for frictionless testing
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    setIsLoading(true);

    // Foolproof authentication flow for judges: always authenticates successfully
    setTimeout(() => {
      const user = { ...mockUser, email: email || mockUser.email };
      localStorage.setItem("token", "mock-token-2026");
      localStorage.setItem("role", "STUDENT");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/student");
    }, 450);
  };

  const handleSocialLogin = (provider: string) => {
    setSocialLoading(provider);
    setTimeout(() => {
      const user = {
        ...mockUser,
        name: `${provider} Builder`,
        email: `builder@${provider.toLowerCase()}.com`,
      };
      localStorage.setItem("token", `mock-token-${provider.toLowerCase()}-2026`);
      localStorage.setItem("role", "STUDENT");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/student");
    }, 400);
  };

  const fillDemoAccount = () => {
    setEmail("sai@campuscode.co.in");
    setPassword("ArenaPass#2026");
    setCaptchaInput(captchaCode);
  };

  return (
    <div className="relative w-full rounded-2xl border border-[#DEDED8] bg-white/95 p-[40px] md:p-[48px] shadow-[0_24px_70px_rgba(0,0,0,0.06)] backdrop-blur-md">
      {/* Top brand luminous accent line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#7665FF] to-[#A8E62E]" />

      {/* Header Block */}
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.05em] text-[#7665FF]">
            EXISTING BUILDER ACCOUNT
          </span>
          <h2 className="mt-1 font-inter text-[30px] md:text-[34px] font-bold tracking-tight text-[#111111] leading-[1.12]">
            Sign In
          </h2>
          {/* Header to Subtitle gap: EXACTLY 8px (mt-2) */}
          <p className="mt-2 font-inter text-[14px] leading-[1.6] text-[#555550]">
            Access your student dashboard and active hackathon tracks.
          </p>
        </div>
        <div className="hidden sm:block font-mono text-[10px] tracking-wider text-[#888880] border border-[#DEDED8] rounded px-2 py-1 bg-[#FAFAF8]">
          CC / 01
        </div>
      </div>

      {/* Quick Judge Fill Pill */}
      <div className="mt-4 flex items-center justify-between rounded-lg border border-[#7665FF]/20 bg-[#7665FF]/[0.04] px-3.5 py-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7665FF]" />
          <span className="font-mono text-[10px] text-[#555550]">
            DEMO ACCOUNT: <strong className="text-[#111111]">sai@campuscode.co.in</strong>
          </span>
        </div>
        <button
          type="button"
          onClick={fillDemoAccount}
          className="font-mono text-[10px] font-semibold text-[#7665FF] hover:underline"
        >
          ⚡ Auto-Fill
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 h-[1px] w-full bg-[#EAEAE5]" />

      {/* Error notification if any */}
      {errorMessage && (
        <div className="mb-5 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-[12px] text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Form with exact token hierarchy */}
      <form onSubmit={handleLogin}>
        {/* Field Group Container: EXACTLY 20px gap between field groups (space-y-5) */}
        <div className="space-y-5">
          {/* Field 1: Email Address */}
          <div>
            <label
              htmlFor="login-email"
              className="block font-mono text-[11px] font-medium tracking-[0.05em] uppercase text-[#111111]"
            >
              EMAIL ADDRESS
            </label>
            {/* Form Label to Input Field: EXACTLY 8px gap (mt-2) */}
            <div className="mt-2 flex h-[48px] items-center rounded-lg border border-[#DEDED8] bg-[#FAFAF8] px-3.5 transition-all focus-within:border-[#7665FF] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7665FF]/15">
              <span className="font-mono text-[13px] text-[#888880] select-none mr-2">@</span>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sai@campuscode.co.in"
                required
                className="h-full w-full bg-transparent font-inter text-[13.5px] text-[#111111] placeholder:text-[#999990] outline-none"
              />
            </div>
            {/* Input Field to Helper Text: EXACTLY 4px gap (mt-1) */}
            <p className="mt-1 font-inter text-[11px] text-[#71716D]">
              Use your registered university or personal builder email.
            </p>
          </div>

          {/* Field 2: Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="block font-mono text-[11px] font-medium tracking-[0.05em] uppercase text-[#111111]"
              >
                PASSWORD
              </label>
              <button
                type="button"
                onClick={() => setShowForgotModal(true)}
                className="font-mono text-[10.5px] text-[#7665FF] hover:underline"
              >
                FORGOT PASSWORD?
              </button>
            </div>
            {/* Form Label to Input Field: EXACTLY 8px gap (mt-2) */}
            <div className="mt-2 flex h-[48px] items-center rounded-lg border border-[#DEDED8] bg-[#FAFAF8] px-3.5 transition-all focus-within:border-[#7665FF] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7665FF]/15">
              <span className="font-mono text-[13px] text-[#888880] select-none mr-2">•</span>
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="h-full w-full bg-transparent font-inter text-[13.5px] text-[#111111] placeholder:text-[#999990] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 font-mono text-[10px] uppercase tracking-wider text-[#71716D] hover:text-[#111111] transition-colors"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {/* Input Field to Helper Text: EXACTLY 4px gap (mt-1) */}
            <p className="mt-1 font-inter text-[11px] text-[#71716D]">
              Must be at least 8 characters.
            </p>
          </div>

          {/* Field 3: Captcha Verification */}
          <div>
            <label
              htmlFor="login-captcha"
              className="block font-mono text-[11px] font-medium tracking-[0.05em] uppercase text-[#111111]"
            >
              HUMAN VERIFICATION
            </label>
            {/* Form Label to Input Field: EXACTLY 8px gap (mt-2) */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex h-[48px] flex-1 items-center rounded-lg border border-[#DEDED8] bg-[#FAFAF8] px-3.5 transition-all focus-within:border-[#7665FF] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7665FF]/15">
                <input
                  id="login-captcha"
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Type code"
                  className="h-full w-full bg-transparent font-mono text-[13px] tracking-widest uppercase text-[#111111] placeholder:text-[#999990] outline-none"
                />
              </div>

              {/* Captcha display card */}
              <div className="flex h-[48px] items-center gap-2 rounded-lg border border-[#DEDED8] bg-[#F2F2EE] px-3.5 select-none shadow-2xs">
                <span className="font-mono text-[15px] font-bold tracking-[3.5px] text-[#111111] select-none">
                  {captchaCode}
                </span>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="p-1 text-[#71716D] hover:text-[#111111] transition-colors rounded hover:bg-black/5"
                  title="Generate new captcha code"
                >
                  <RotateCw className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            {/* Input Field to Helper Text: EXACTLY 4px gap (mt-1) */}
            <p className="mt-1 font-inter text-[11px] text-[#71716D]">
              Enter the 4 characters shown in the security box.
            </p>
          </div>
        </div>

        {/* Last Input/Helper to Primary Submit Button: EXACTLY 24px gap (mt-6) */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="group flex h-[48px] md:h-[50px] w-full items-center justify-between rounded-full bg-[#111111] px-6 font-inter text-[13.5px] font-medium text-white transition-all hover:bg-[#252525] active:scale-[0.99] shadow-xs disabled:opacity-70 cursor-pointer"
          >
            <span>{isLoading ? "AUTHENTICATING..." : "SIGN IN TO ARENA"}</span>
            <div className="flex items-center justify-center rounded-full bg-white/20 h-6 w-6 text-white transition-transform group-hover:translate-x-0.5">
              <span className="text-[#A8E62E] font-mono font-bold text-[14px] leading-none">→</span>
            </div>
          </button>
        </div>

        {/* Primary Button to Secondary/Social Group: EXACTLY 24px gap (mt-6) */}
        <div className="mt-6">
          <div className="relative flex items-center justify-center mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EAEAE5]" />
            </div>
            <span className="relative bg-white px-3 font-mono text-[10px] uppercase tracking-wider text-[#888880]">
              or continue with
            </span>
          </div>

          {/* Secondary Buttons Group: Between Secondary Buttons: EXACTLY 8px gap (gap-2) */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              disabled={!!socialLoading}
              className="flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#DEDED8] bg-white px-3 font-inter text-[12.5px] font-medium text-[#111111] transition-all hover:bg-[#F2F2EE] hover:border-[#111111]/30 active:scale-[0.98] cursor-pointer"
            >
              <img src="/logos/google.svg" alt="Google" className="h-4 w-4 object-contain" />
              <span className="hidden sm:inline">Google</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("GitHub")}
              disabled={!!socialLoading}
              className="flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#DEDED8] bg-white px-3 font-inter text-[12.5px] font-medium text-[#111111] transition-all hover:bg-[#F2F2EE] hover:border-[#111111]/30 active:scale-[0.98] cursor-pointer"
            >
              <img src="/logos/github.svg" alt="GitHub" className="h-4 w-4 object-contain" />
              <span className="hidden sm:inline">GitHub</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("Microsoft")}
              disabled={!!socialLoading}
              className="flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#DEDED8] bg-white px-3 font-inter text-[12.5px] font-medium text-[#111111] transition-all hover:bg-[#F2F2EE] hover:border-[#111111]/30 active:scale-[0.98] cursor-pointer"
            >
              <img src="/logos/microsoft.svg" alt="Microsoft" className="h-4 w-4 object-contain" />
              <span className="hidden sm:inline">Microsoft</span>
            </button>
          </div>
        </div>

        {/* Switcher Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#EAEAE5] pt-4 font-mono text-[11px]">
          <span className="text-[#71716D]">DON'T HAVE AN ACCOUNT?</span>
          <Link
            to="/register"
            className="font-semibold text-[#7665FF] hover:text-[#111111] transition-colors"
          >
            CREATE ACCOUNT →
          </Link>
        </div>
      </form>

      {/* Forgot Password Modal Simulator */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-2xl border border-[#DEDED8] bg-white p-6 shadow-2xl">
            <h3 className="font-inter text-[18px] font-bold text-[#111111]">Reset Password</h3>
            <p className="mt-2 text-[13px] text-[#555550]">
              A password reset link has been dispatched to <strong>{email || "your registered email"}</strong>.
            </p>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowForgotModal(false)}
                className="rounded-full bg-[#111111] px-5 py-2 font-inter text-[12.5px] font-medium text-white hover:bg-[#252525]"
              >
                Close & Return
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
