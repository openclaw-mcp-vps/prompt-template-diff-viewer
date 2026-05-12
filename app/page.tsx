export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visual Diff for{' '}
          <span className="text-[#58a6ff]">AI Prompt Iterations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Compare prompt versions side-by-side with syntax highlighting and performance metrics.
          Stop guessing which prompt works best — see exactly what changed and why it matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $25/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        {/* Mock diff preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden text-left">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#0d1117]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-3 text-xs text-[#8b949e] font-mono">prompt-diff — v2 vs v3</span>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#30363d] font-mono text-xs">
            <div className="p-4">
              <p className="text-[#8b949e] mb-2 text-[10px] uppercase tracking-wide">v2 — Accuracy 71%</p>
              <p className="text-[#ffa657]">- You are a helpful assistant.</p>
              <p className="text-[#c9d1d9]">  Answer the user question.</p>
              <p className="text-[#ffa657]">- Be concise.</p>
            </div>
            <div className="p-4">
              <p className="text-[#8b949e] mb-2 text-[10px] uppercase tracking-wide">v3 — Accuracy 89%</p>
              <p className="text-[#3fb950]">+ You are an expert assistant.</p>
              <p className="text-[#c9d1d9]">  Answer the user question.</p>
              <p className="text-[#3fb950]">+ Think step by step before responding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Unlimited prompt versions</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Side-by-side diff with Monaco Editor</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Performance metrics per version</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Team collaboration & history</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Export diffs as reports</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">What models and prompt formats are supported?</h3>
            <p className="text-[#8b949e] text-sm">PromptDiff works with any text-based prompt — OpenAI, Anthropic, Gemini, or custom formats. Paste any prompt and start comparing.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How are performance metrics tracked?</h3>
            <p className="text-[#8b949e] text-sm">You attach metrics (accuracy, latency, cost, custom scores) to each prompt version. PromptDiff visualizes them alongside the diff so you can correlate changes with outcomes.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} PromptDiff. All rights reserved.
      </footer>
    </main>
  )
}
