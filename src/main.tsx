import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      alert(`Error Occurred in ${query.queryKey}: ${error.message}`);
    },
  }),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </QueryClientProvider>,
);
