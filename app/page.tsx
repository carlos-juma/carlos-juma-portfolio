import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-20">
      <header className="mb-14">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">Freelance Web Developer</p>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Carlos Juma<span className="text-brand">.</span>
        </h1>
        <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
          Below are a few things I&apos;ve built.
        </p>
      </header>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <ul className="flex flex-col">
          {projects.map((project) => (
            <li key={project.title} className="border-t border-border last:border-b">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-5 transition-colors hover:text-foreground"
              >
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-foreground transition-colors group-hover:text-brand">
                    {project.title}
                    <ArrowUpRight
                      className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">{project.year}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
        <a
          href="mailto:carlosjuma821@gmail.com"
          className="underline decoration-border underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
        >
          carlosjuma821@gmail.com
        </a>
        <span aria-hidden="true" className="text-border">
          /
        </span>
        <a
          href="https://wa.me/0614303975"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-border underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
        >
          WhatsApp
        </a>
      </footer>
    </main>
  )
}
