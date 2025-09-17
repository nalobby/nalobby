
import { MetaProvider, Title } from "@solidjs/meta";
// import { Router } from "@solidjs/router";
import { Suspense, onMount, createSignal } from "solid-js";

// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./app.css";

onMount(async () => {
  await import("bootstrap/dist/js/bootstrap.bundle.min.js");
});

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/index";
import Services from "./pages/services";
import Clients from "./pages/clients";
import News from "./pages/news";
import Team from "./pages/team";

export default function App() {
  const [path, setPath] = createSignal(window.location.pathname);

  window.addEventListener("popstate", () => setPath(window.location.pathname));

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setPath(to);
  };

  return (
      <MetaProvider>
        <Title>Solid Vite App</Title>
        <Navbar navigate={navigate}/>
        <Suspense>
          {(path().replace(/\/$/, "") === "/nalobby") && <Home />}
          {path().replace(/\/$/, "") === "/services" && <Services />}
          {path().replace(/\/$/, "") === "/clients" && <Clients />}
          {path().replace(/\/$/, "") === "/news" && <News />}
          {path().replace(/\/$/, "") === "/team" && <Team />}
        </Suspense>
        <Footer />
      </MetaProvider>
  );
}
