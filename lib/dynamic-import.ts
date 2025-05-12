// This is a server component that re-exports the client component function
// It doesn't directly use ssr: false
export { dynamicImportClient as dynamicImport } from "./dynamic-import-client"
