import { ReactElement } from "react";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "react-auth-kit";

const queryClient = new QueryClient();

const ProviderConfig = ({ children }: { children: ReactElement }) => {
  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Modals /> {children}
        </Provider>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default ProviderConfig;
