import { Header } from "./components/layout";
import { PokemonCatalog } from "./components/pokemon";
import { lazy, Suspense } from "react";
import { AppErrorBoundary } from "./components/AppErrorBoundary";

const PokemonDrawer = lazy(() => import("./components/pokemon/PokemonDrawer"));

function App() {
  return (
    <>
      <AppErrorBoundary>
        <Header />
        <PokemonCatalog />
        <Suspense fallback={null}>
          <PokemonDrawer />
        </Suspense>
      </AppErrorBoundary>
    </>
  );
}

export default App;
