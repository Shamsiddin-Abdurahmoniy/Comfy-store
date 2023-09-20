// react
import { Outlet, useNavigation } from "react-router-dom";
// components
import { Header, Navbar } from "../components";
import Loading from "../components/Loading";
function HomeLayout() {
  let navigation = useNavigation();
  let isPageLoading = navigation.state == "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
    </>
  );
}

export default HomeLayout;
