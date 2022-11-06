import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/appolo-connection";
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App min-vh-100">
        <ProSidebarProvider>
          <RouterProvider router={router} />
        </ProSidebarProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
