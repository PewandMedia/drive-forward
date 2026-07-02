import { useId } from "react";

export function InstagramLogoIcon({ className }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <radialGradient id={`${gradientId}-ig-radial`} cx="30%" cy="107%" r="140%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="8%" stopColor="#fdf497" />
          <stop offset="35%" stopColor="#fd5949" />
          <stop offset="62%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.6" fill={`url(#${gradientId}-ig-radial)`} />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
        d="M8.2 7.1h7.6c.6 0 1.1.2 1.5.6.4.4.6.9.6 1.5v5.6c0 .6-.2 1.1-.6 1.5-.4.4-.9.6-1.5.6H8.2c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5V9.2c0-.6.2-1.1.6-1.5.4-.4.9-.6 1.5-.6Z"
      />
      <circle cx="12" cy="12" r="3.05" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="16.1" cy="7.95" r=".85" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#25F4EE"
        d="M15.72 2.15v.33a5.2 5.2 0 0 0 3.22 4.8c.46.2.95.33 1.46.4v3.22a8.56 8.56 0 0 1-4.68-1.36v5.76a6.58 6.58 0 1 1-6.58-6.58c.28 0 .56.02.83.06v3.52a3.13 3.13 0 1 0 2.2 3V2.15h3.55Z"
        transform="translate(-1.05 .75)"
      />
      <path
        fill="#FE2C55"
        d="M15.72 2.15v.33a5.2 5.2 0 0 0 3.22 4.8c.46.2.95.33 1.46.4v3.22a8.56 8.56 0 0 1-4.68-1.36v5.76a6.58 6.58 0 1 1-6.58-6.58c.28 0 .56.02.83.06v3.52a3.13 3.13 0 1 0 2.2 3V2.15h3.55Z"
        transform="translate(.95 -.55)"
      />
      <path
        fill="currentColor"
        d="M15.72 2.15v.33a5.2 5.2 0 0 0 3.22 4.8c.46.2.95.33 1.46.4v3.22a8.56 8.56 0 0 1-4.68-1.36v5.76a6.58 6.58 0 1 1-6.58-6.58c.28 0 .56.02.83.06v3.52a3.13 3.13 0 1 0 2.2 3V2.15h3.55Z"
      />
    </svg>
  );
}
