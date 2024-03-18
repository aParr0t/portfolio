type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "filled" | "outlined";
  className?: string;
};

export default function Button({
  children,
  variant = "filled",
  onClick,
  className,
}: Props) {
  let border = "";
  let bg = "bg-background";
  let text = "text-body";
  if (variant === "outlined") {
    border = "border-[1px]";
    bg = "bg-background";
  }

  if (variant === "filled") {
    bg = "bg-secondary";
    text = "text-background";
  }

  return (
    <button
      className={`${bg} ${border} ${text} px-6 py-3 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
