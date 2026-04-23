import { AppProvider } from './app/providers/app-provider'
import { AppRouterProvider } from './app/providers/router-provider'

export default function App() {
    return (
        <AppProvider>
            <AppRouterProvider />
        </AppProvider>
    )
}