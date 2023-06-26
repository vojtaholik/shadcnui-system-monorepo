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
            <pre className="text-xs overflow-auto w-96">
              <span className="">styles/theme.ts</span>
              <br />
              {JSON.stringify(
                {
                  ...theme,
                  variants: {
                    button: theme.variants.button(), //.slice(0, 150),
                  },
                },
                null,
                2
              )}
            </pre>
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
