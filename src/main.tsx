import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import UsersStore from "@/store/UsersStore.tsx";
import {ThemeProvider} from "@/store/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <UsersStore>
        <App />
      </UsersStore>
    </ThemeProvider>
,
)
