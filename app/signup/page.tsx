
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [accountType, setAccountType] = useState<"creator" | "brand">("creator");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const inputClass =
    "w-full rounded-xl border border-slate-200 !bg-white px-4 py-3 !text-slate-900 placeholder:!text-slate-400 caret-violet-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100";

  async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            account_type: accountType,
            company_name:
              accountType === "brand" ? companyName.trim() : null,
          },
        },
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (data.session) {
        setMessage("Account created successfully!");
        router.push("/login");
      } else {
        setMessage(
          "Registration started! Check your email for a confirmation link before logging in."
        );
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-violet-50 px-4 py-10">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl sm:p-10">
        <a href="/" className="text-2xl font-black tracking-tight text-slate-900">
          Linkster<span className="text-violet-600">’s.</span>
        </a>

        <div className="mt-8">
          <p className="text-sm font-semibold text-violet-600">
            YOUR JOURNEY STARTS HERE
          </p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">
            Create your account
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Join a community where creators and brands grow together.
          </p>
        </div>

        <div className="mt-7">
          <p className="mb-3 text-sm font-semibold text-slate-700">
            I want to join as a...
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setAccountType("creator")}
              className={`rounded-2xl border-2 p-3 text-left transition sm:p-4 ${
                accountType === "creator"
                  ? "border-violet-600 bg-violet-50"
                  : "border-slate-200 hover:border-violet-300"
              }`}
            >
              <span className="text-2xl">✨</span>
              <span className="mt-2 block font-bold text-slate-900">Creator</span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">
                Showcase your work and find collaborations.
              </span>
            </button>

            <button
              type="button"
              onClick={() => setAccountType("brand")}
              className={`rounded-2xl border-2 p-3 text-left transition sm:p-4 ${
                accountType === "brand"
                  ? "border-violet-600 bg-violet-50"
                  : "border-slate-200 hover:border-violet-300"
              }`}
            >
              <span className="text-2xl">🏢</span>
              <span className="mt-2 block font-bold text-slate-900">Brand</span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">
                Find creators and launch campaigns.
              </span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">
              {accountType === "creator" ? "Your full name" : "Your name"}
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Enter your name"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>

          {accountType === "brand" && (
            <div>
              <label htmlFor="companyName" className="mb-2 block text-sm font-semibold text-slate-700">
                Company name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                placeholder="Enter your company name"
                autoComplete="organization"
                required
                className={inputClass}
              />
            </div>
          )}

          <div>
            <label htmlFor="signupEmail" className="mb-2 block text-sm font-semibold text-slate-700">
              Email address
            </label>
            <input
              id="signupEmail"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="signupPassword" className="mb-2 block text-sm font-semibold text-slate-700">
              Create a password
            </label>

            <div className="relative">
              <input
                id="signupPassword"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                minLength={8}
                required
                className={`${inputClass} pr-16`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="absolute inset-y-0 right-3 flex items-center text-sm font-semibold text-violet-600 hover:text-violet-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Use at least 8 characters. Tap Show to check your password.
            </p>
          </div>

          {message && (
            <p
              role="status"
              aria-live="polite"
              className="rounded-xl bg-violet-50 p-3 text-sm text-violet-800"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-violet-600 py-3.5 font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Creating account..."
              : `Create ${accountType === "creator" ? "Creator" : "Brand"} account`}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <a href="/login" className="font-bold text-violet-600 hover:text-violet-800">
            Log in
          </a>
        </p>

        <p className="mt-5 text-center text-xs leading-5 text-slate-400">
          By creating an account, you agree to our{" "}
          <a href="/terms" className="underline">Terms</a> and{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>

        <a href="/" className="mt-6 block text-center text-sm text-slate-500 hover:text-violet-600">
          ← Back to home
        </a>
      </div>
    </main>
  );
}
