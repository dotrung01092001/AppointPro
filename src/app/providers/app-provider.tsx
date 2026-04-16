
import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./query-provider";
import type { PropsWithChildren } from "react";

export function AppProvider({ children }: PropsWithChildren) {
    return (
        <ThemeProvider>
            <QueryProvider>
                {children}
            </QueryProvider>
        </ThemeProvider>
    )
}