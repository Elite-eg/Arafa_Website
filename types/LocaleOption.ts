interface LocaleOption {
  code: string;
  label: string;
  region: string; // for the flag
}

export const supportedLocales: LocaleOption[] = [
  { code: "en", label: "English", region: "GB" },
];
