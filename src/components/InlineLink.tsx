import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function InlineLink({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`text-secondary font-bold decoration-accent decoration-4 font-monospace ${className}`}
    >
      {children}
    </Link>
  );
}
