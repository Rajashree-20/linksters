
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function CreatorDashboard() {
  const router = useRouter();
  const [name, setName] = useState("Creator");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      const { data, error } = await supabase.auth.getUser();

      if (!active) return;

      if (error || !data.user) {
        router.replace("/login");
        return;
      }

      const user = data.user;
      const accountType = user.user_metadata?.account_type;

      if (accountType === "brand") {
        router.replace("/brand-dashboard");
        return;
      }

      setName(
        user.user_metadata?.full_name ||
          user.email?.split("@")[0] ||
          "Creator"
      );
      setLoading(false);
    }

    loadProfile();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-700">
        Loading your dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b bg-white px-6 py-5 md:px-10">
        <h1 className="text-2xl font-bold text-violet-700">
          Linkster&apos;s
        </h1>

        <button
          onClick={handleLogout}
          className="rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-100"
        >
          Log out
        </button>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-violet-600">
          Creator Dashboard
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Welcome, {name}! 👋
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Your space to build your creator profile and connect with brands.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">👤</div>
            <h3 className="mt-4 text-xl font-semibold">My Profile</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Manage your name and creator information.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-violet-700">
              Coming soon
            </span>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🔎</div>
            <h3 className="mt-4 text-xl font-semibold">Discover Brands</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore brands you may want to collaborate with.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-violet-700">
              Coming soon
            </span>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🤝</div>
            <h3 className="mt-4 text-xl font-semibold">Collaborations</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Keep track of your brand collaboration opportunities.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-violet-700">
              Coming soon
            </span>
          </article>
        </div>
      </section>
    </main>
  );
}
