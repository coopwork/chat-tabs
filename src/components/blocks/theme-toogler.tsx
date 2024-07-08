import { Button } from "@/components/ui/button"
import {useTheme} from "@/store/theme-provider.tsx";
import {DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.tsx";
import {AccessibilityIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";


const ThemeToogler = () => {
	const { theme, setTheme } = useTheme()
	return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className='ms-auto' variant="secondary" size="icon">
							{theme === 'light' ? <SunIcon/>: theme === "dark"? <MoonIcon/>: <AccessibilityIcon/>}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>Цветовая схема</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup value={theme}>
						<DropdownMenuRadioItem value='light' onClick={() => setTheme("light")}>
							Светлая
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value='dark' onClick={() => setTheme("dark")}>
							Тёмная
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value='system' onClick={() => setTheme("system")}>
							Системная
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
	);
};

export default ThemeToogler;