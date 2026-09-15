"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { CgSpinner } from "react-icons/cg";
import { cn } from "@/lib/utils";

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "glass" | "subtle";
  showKbd?: boolean;
  shortcutKey?: string;
  enableShortcut?: boolean;
  isLoading?: boolean;
  onClear?: () => void;
}

const sizeClasses = {
  sm: "py-1.5 ps-9 pe-9 text-xs rounded-lg",
  md: "py-2.5 ps-10 pe-11 text-xs md:text-sm rounded-xl",
  lg: "py-3.5 ps-12 pe-12 text-sm md:text-base rounded-2xl",
};

const iconSizes = {
  sm: "w-3.5 h-3.5 start-2.5",
  md: "w-4 h-4 start-3.5",
  lg: "w-5 h-5 start-4",
};

const variantClasses = {
  default:
    "bg-body-alt/70 border-edge/80 text-primary placeholder:text-content-muted/60 focus:bg-white focus:border-accent/80 focus:ring-4 focus:ring-accent/10 shadow-2xs hover:border-edge",
  glass:
    "bg-white/60 backdrop-blur-md border-white/40 text-primary placeholder:text-content-muted/60 focus:bg-white/90 focus:border-accent/80 focus:ring-4 focus:ring-accent/15 shadow-soft hover:bg-white/70",
  subtle:
    "bg-edge/40 border-transparent text-primary placeholder:text-content-muted/60 focus:bg-white focus:border-accent/80 focus:ring-4 focus:ring-accent/10 hover:bg-edge/60",
};

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
  inputClassName,
  size = "md",
  variant = "default",
  showKbd = false,
  shortcutKey = "k",
  enableShortcut = false,
  isLoading = false,
  onClear,
  ...rest
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!enableShortcut) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd + K or / if active element is not another input/textarea
      const isInputActive = ["INPUT", "TEXTAREA"].includes(
        document.activeElement?.tagName || ""
      );

      if (
        (e.metaKey && e.key.toLowerCase() === shortcutKey.toLowerCase()) ||
        (!isInputActive && e.key === "/")
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enableShortcut, shortcutKey]);

  const handleClear = () => {
    onChange("");
    if (onClear) onClear();
    inputRef.current?.focus();
  };

  return (
    <div className={cn("relative w-full group", className)}>
      {/* Soft Ambient Focus Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/25 to-accent/0 rounded-xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex items-center w-full">
        {/* Search Icon or Loading Spinner */}
        {isLoading ? (
          <CgSpinner
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-accent animate-spin pointer-events-none z-10",
              iconSizes[size]
            )}
          />
        ) : (
          <HiOutlineMagnifyingGlass
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-content-muted group-focus-within:text-accent group-focus-within:scale-110 transition-all duration-300 pointer-events-none z-10",
              iconSizes[size]
            )}
          />
        )}

        {/* Text Input */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full border border-solid transition-all duration-300 focus:outline-none",
            sizeClasses[size],
            variantClasses[variant],
            inputClassName
          )}
          {...rest}
        />

        {/* Clear Button or Keyboard Shortcut Badge */}
        <div className="absolute end-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
          <AnimatePresence mode="wait">
            {value ? (
              <motion.button
                key="clear-btn"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                onClick={handleClear}
                type="button"
                className="p-1 rounded-lg text-content-muted hover:text-primary hover:bg-edge/60 active:scale-90 transition-all flex items-center justify-center"
                aria-label="Clear search query"
              >
                <HiOutlineXMark className="w-4 h-4" />
              </motion.button>
            ) : showKbd && enableShortcut ? (
              <motion.span
                key="kbd-badge"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] font-mono text-content-muted/60 border border-edge/80 bg-white/80 backdrop-blur-xs px-1.5 py-0.5 rounded-md pointer-events-none hidden sm:inline-block shadow-2xs font-semibold"
              >
                ⌘{shortcutKey.toUpperCase()}
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
