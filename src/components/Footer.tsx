const Footer = () => <footer className="border-t border-foreground/15 px-6 py-6 md:px-10">
  <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
    <p>© {new Date().getFullYear()} Vansh Gupta</p>
    <div className="flex items-center gap-4">
      <a href="https://github.com/vanshgupta4452" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub" className="transition-colors hover:text-primary">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.16 3.9 1.54.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>
      </a>
      <a href="https://www.linkedin.com/in/vansh-gupta-0338422a5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn" className="transition-colors hover:text-primary">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.2h2.97v9.54ZM6.44 7.9a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.84h-2.96V14.1c0-1.1-.02-2.5-1.52-2.5-1.53 0-1.76 1.2-1.76 2.42v4.72H9.54V9.2h2.84v1.3h.04c.4-.75 1.36-1.53 2.8-1.53 3 0 3.56 1.97 3.56 4.53v5.24Z" /></svg>
      </a>
    </div>
    <p>Made with curiosity in India <span className="text-primary">✳</span></p>
  </div>
</footer>;

export default Footer;
