/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ApiResponse<T = any> {
  statusCode?: number;
  message?: string;
  errors?: string[];
  data?: T;
}

export interface ExtractedErrors {
  messageError?: string;
  errorList?: string[];
}

export function ExtractValidationErrors(error: unknown): ExtractedErrors {
  if (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "data" in error
  ) {
    const { data } = error as { status: unknown; data: any };

    if (data && typeof data === "object") {
      const api = data as ApiResponse<any>;
      return {
        messageError: api.message ?? "Something went wrong.",
        errorList: api.errors ?? [],
      };
    }
  }

  const fallback = typeof error === "string" ? error : "Network error";
  return { messageError: fallback };
}
