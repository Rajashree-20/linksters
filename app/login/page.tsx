
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const inputClass =
    "block w-full rounded-xl border border-gray-300 !bg-white px-4 py-3 !text-gray-900 placeholder:!text-gray-500 shadow-sm outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200";

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setMessage(
          error.message === "Invalid login credentials"
            ? "Incorrect email or password. Please check your details."
            : error.message
        );
        return;
      }

      router.push("/dashboard");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10 text-gray-900">
      <div className="w-full max-w-md">
        <a
          href="/"
          className="mb-8 block text-center text-3xl font-extrabold text-violet-700"
        >
          Linkster’s
        </a>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
          <h1 className="text-center text-3xl font-bold">
            Welcome back!
          </h1>

          <p className="mt-2 text-center text-gray-600">
            Log in to your Linkster’s account.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Email address
              </label>

              <input
                id="email"
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
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className={`${inputClass} pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  title={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-3 flex items-center justify-center text-violet-700 hover:text-violet-900"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 3l18 18" />
                      <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
                      <path d="M9.88 5.09A10.94 10.94 0 0 1 12 4.9c5 0 9 5.1 10 7.1a11.8 11.8 0 0 1-4.1 4.8" />
                      <path d="M6.6 6.6C3.8 8.2 2 12 2 12s4 7.1 10 7.1c1 0 2-.2 2.9-.6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm font-medium text-violet-700 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {message && (
              <p
                role="alert"
                aria-live="polite"
                className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-violet-700 hover:underline"
            >
              Sign up
            </a>
          </p>

          <a
            href="/"
            className="mt-5 block text-center text-sm text-gray-500 hover:text-violet-700"
          >
            ← Back to Home
          </a>
        </section>

        <p className="mt-6 text-center text-sm text-gray-500">
          © 2026 Linkster’s
        </p>
      </div>
    </main>
  );
}
