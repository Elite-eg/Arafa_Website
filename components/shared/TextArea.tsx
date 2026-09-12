import { cn } from "@/lib/utils";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Visible label text */
  label: string;
  /** Unique id for the textarea (also links the label) */
  id: string;
  /** Extra wrapper classes */
  className?: string;
}

export default function TextArea({
  label,
  id,
  className,
  ...rest
}: TextAreaProps) {
  return (
    <div className={cn(className)}>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-wider text-content-muted mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        {...rest}
        className={cn(
          "w-full px-4 py-3 rounded-xl border border-edge bg-body text-content text-sm",
          "placeholder:text-content-muted resize-none",
          "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent",
          "transition-all duration-200"
        )}
      />
    </div>
  );
}
