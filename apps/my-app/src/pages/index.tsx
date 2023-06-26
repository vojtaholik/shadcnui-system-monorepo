import { theme } from "@/styles/theme";
import { Inter } from "next/font/google";
import { Button, Card, CardHeader, ThemeProvider } from "ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center space-y-16 p-24 ${inter.className}`}
    >
      <ThemeProvider theme={theme}>
        <div className="flex flex-col items-center gap-5">
          <span>ThemeProvider (unique per app)</span>
          <Button>Button</Button>
          <Card>
            <CardHeader>Card</CardHeader>
          </Card>
        </div>
      </ThemeProvider>
      <div className="flex flex-col items-center gap-5">
        <span>Fallback</span>
        <Button>Button</Button>
        <Card>
          <CardHeader>Card</CardHeader>
        </Card>
      </div>
    </main>
  );
}
