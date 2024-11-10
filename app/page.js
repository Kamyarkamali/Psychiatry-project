// components
import HomePage from "@/components/templates/HomePage";
import { AppProvider } from "@/context/AppContext";

export default function Home() {
  return (
    <main>
      <AppProvider>
        <HomePage />
      </AppProvider>
    </main>
  );
}
