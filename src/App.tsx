import { Header } from "./components/layout";
import { PokemonCatalog } from "./components/pokemon";
import { lazy, Suspense } from "react";

const PokemonDrawer = lazy(() => import("./components/pokemon/PokemonDrawer"));

function App() {
  return (
    <>
      <Header />
      <PokemonCatalog />
      <Suspense fallback={null}>
        <PokemonDrawer />
      </Suspense>
    </>
  );
}

export default App;
