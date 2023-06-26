import { theme } from "@/styles/theme";
import { Inter } from "next/font/google";
import { Button, Card, CardHeader, ThemeProvider } from "ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section
        className={`max-w-screen-md w-full mx-auto grid md:grid-cols-2 gap-10 items-start justify-center p-24 ${inter.className}`}
      >
        <ThemeProvider theme={theme}>
          <article className="flex flex-col items-center gap-5">
            <span>ThemeProvider (unique per app)</span>
            <Button>Button</Button>
            <Card>
              <CardHeader>Card</CardHeader>
            </Card>
          </article>
        </ThemeProvider>
        <article className="flex flex-col items-center gap-5">
          <span>Fallback</span>
          <Button>Button</Button>
          <Card>
            <CardHeader>Card</CardHeader>
          </Card>
        </article>
      </section>
    </main>
  );
}
