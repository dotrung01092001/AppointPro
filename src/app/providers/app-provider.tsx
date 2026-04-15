import { AppRouterProvider } from "./router-provider";
import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./query-provider";

export function AppProvider() {
    return (
        <ThemeProvider>
            <QueryProvider>
                <AppRouterProvider />
            </QueryProvider>
        </ThemeProvider>
    )
}