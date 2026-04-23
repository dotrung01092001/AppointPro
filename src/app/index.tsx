import { AppProvider } from "./providers/app-provider";
import { AppRouterProvider } from "./providers/router-provider";


export default function App() {
    return (
        <AppProvider>
            <AppRouterProvider />
        </AppProvider>
    )
}
