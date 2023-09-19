import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="container mx-auto">
        <ToastContainer />
        <Header />
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
