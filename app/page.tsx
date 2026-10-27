
const creators = [
  { name: "Ananya Sharma", niche: "Fashion & Lifestyle", followers: "24.5K", color: "bg-rose-100", initials: "AS" },
  { name: "Rahul Verma", niche: "Tech & Gadgets", followers: "18.2K", color: "bg-sky-100", initials: "RV" },
  { name: "Meera Nair", niche: "Beauty & Skincare", followers: "32.8K", color: "bg-amber-100", initials: "MN" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-black tracking-tight">
            Linkster<span className="text-violet-600">’s.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#creators" className="hover:text-violet-600">Discover Creators</a>
            <a href="#campaigns" className="hover:text-violet-600">Find Campaigns</a>
            <a href="#creators-info" className="hover:text-violet-600">For Creators</a>
            <a href="#brands-info" className="hover:text-violet-600">For Brands</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="/login" className="hidden rounded-full px-4 py-2 text-sm font-semibold sm:block">
              Log in
            </a>
            <a href="/signup" className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700">
              Get started
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            ✨ Your next collaboration starts here
          </span>

          <h1 className="mt-7 max-w-xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Great brands.
            <br />
            Amazing creators.
            <br />
            <span className="text-violet-600">One connection.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Linkster’s brings creators and brands together to discover
            opportunities, build relationships, and create something meaningful.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#creators" className="rounded-full bg-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 hover:bg-violet-700">
              Explore creators →
            </a>
            <a href="#campaigns" className="rounded-full border border-slate-200 px-7 py-3.5 font-semibold hover:bg-slate-50">
              Find campaigns
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Made for creators, startups, and growing brands.
          </p>
        </div>

        <div className="rounded-3xl bg-violet-50 p-6 sm:p-10">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Your next big opportunity</p>
                <h2 className="mt-1 text-xl font-bold">Creator × Brand</h2>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Let’s connect
              </span>
            </div>

            <div className="my-7 flex items-center justify-center gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-rose-100 text-4xl">📸</div>
              <span className="text-3xl font-light text-violet-400">+</span>
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-sky-100 text-4xl">🏷️</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-semibold">A collaboration that clicks</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Find the right people, share ideas, and turn creative plans into real campaigns.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-white p-4">
              <p className="text-xl font-black text-violet-600">Discover</p>
              <p className="mt-1 text-xs text-slate-500">New talent</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <p className="text-xl font-black text-violet-600">Connect</p>
              <p className="mt-1 text-xs text-slate-500">Build trust</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <p className="text-xl font-black text-violet-600">Create</p>
              <p className="mt-1 text-xs text-slate-500">Great work</p>
            </div>
          </div>
        </div>
      </section>

      <section id="creators" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-violet-600">MEET THE CREATORS</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Creativity worth discovering.</h2>
              <p className="mt-3 text-slate-600">Get inspired by creators across different niches.</p>
            </div>
            <a href="/creators" className="font-semibold text-violet-600 hover:text-violet-800">View all creators →</a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creators.map((creator) => (
              <article key={creator.name} className="rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${creator.color} text-xl font-bold`}>
                  {creator.initials}
                </div>
                <h3 className="mt-5 text-xl font-bold">{creator.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{creator.niche}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="font-bold">{creator.followers}</p>
                    <p className="text-xs text-slate-500">Followers</p>
                  </div>
                  <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">Creator</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-400">These are sample profiles for the initial design, not verified real accounts.</p>
        </div>
      </section>

      <section id="campaigns" className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-semibold text-violet-600">OPPORTUNITIES AWAIT</p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">Find your next campaign.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Discover collaboration opportunities, connect with brands that match your style, and take your creative journey forward.
        </p>
        <a href="/campaigns" className="mt-6 inline-block rounded-full bg-violet-600 px-7 py-3.5 font-semibold text-white hover:bg-violet-700">
          Explore campaigns →
        </a>
      </section>

      <section className="bg-violet-700 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div id="creators-info">
            <p className="text-sm font-semibold text-violet-200">FOR CREATORS</p>
            <h2 className="mt-3 text-3xl font-black">Your creativity deserves opportunities.</h2>
            <p className="mt-4 leading-7 text-violet-100">Showcase your work, discover relevant campaigns, and build meaningful brand partnerships.</p>
            <a href="/signup?type=creator" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-violet-700 hover:bg-violet-50">
              Join as a creator →
            </a>
          </div>
          <div id="brands-info" className="border-t border-violet-500 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-sm font-semibold text-violet-200">FOR BRANDS</p>
            <h2 className="mt-3 text-3xl font-black">Meet people who move your brand.</h2>
            <p className="mt-4 leading-7 text-violet-100">Discover creative talent, publish campaign opportunities, and manage collaborations in one place.</p>
            <a href="/signup?type=brand" className="mt-6 inline-block rounded-full border border-white/60 px-6 py-3 font-semibold text-white hover:bg-white/10">
              Join as a brand →
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Linkster’s. Connecting creativity and opportunity.</p>
          <div className="flex flex-wrap gap-5">
            <a href="/about" className="hover:text-violet-600">About</a>
            <a href="/pricing" className="hover:text-violet-600">Pricing</a>
            <a href="/contact" className="hover:text-violet-600">Contact</a>
            <a href="/privacy" className="hover:text-violet-600">Privacy</a>
            <a href="/terms" className="hover:text-violet-600">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
