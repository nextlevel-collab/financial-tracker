"use client"

import dynamic from "next/dynamic"
import type { ComponentType } from "react"

// Helper function to create dynamic imports with loading fallbacks
export function dynamicImportClient<T>(
  componentImportFn: () => Promise<{ default: ComponentType<T> } | ComponentType<T>>,
  options = {},
) {
  return dynamic(componentImportFn, {
    loading: () => <div className="animate-pulse bg-muted rounded-md h-full w-full min-h-[200px]"></div>,
    ssr: false,
    ...options,
  })
}
