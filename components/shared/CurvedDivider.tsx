import React from "react";

interface CurvedDividerProps extends React.SVGProps<SVGSVGElement> {
  containerClassName?: string;
}

export default function CurvedDivider({
  className = "w-full h-[50px] sm:h-[60px] md:h-[80px]",
  containerClassName = "absolute bottom-0 start-0 end-0 pointer-events-none z-10",
  fill = "var(--bg)",
  ...props
}: CurvedDividerProps) {
  return (
    <div className={containerClassName}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
