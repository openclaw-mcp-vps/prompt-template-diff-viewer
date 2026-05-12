import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptDiff — Visual Diff Tool for AI Prompt Iterations',
  description: 'Compare prompt versions side-by-side with performance metrics. Built for AI product teams iterating fast.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b5f295f2-afb6-4bd4-b813-c98afe822e93"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
