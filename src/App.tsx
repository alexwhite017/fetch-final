import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import WelcomePage from "./WelcomePage";
import Details from "./Components/Details";
import { DogSelection } from "./SelectedDogContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div>
      <DogSelection>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/search" element={<WelcomePage />} />

              <Route path="/" element={<LoginPage />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </DogSelection>
    </div>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("No container to render to!");
}
const root = createRoot(container);
root.render(<App />);
