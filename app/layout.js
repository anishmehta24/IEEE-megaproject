
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";
import Provider from "./provider";
import Header from "@/components/ui/custom/Header";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ConvexClientProvider>
        <Provider>
          <Header/>
          {children}
        </Provider>
        </ConvexClientProvider>
        
      </body>
    </html>
  );
}
