import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  console.log("CheckAuth location.pathname", location.pathname);
  console.log("CheckAuth isAuthenticated ", isAuthenticated);
  console.log("CheckAuth user ", user);

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    console.log("Redirecting to 1");
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    console.log("Redirecting to 2");
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // if (
  //   isAuthenticated &&
  //   user?.role === "admin" &&
  //   location.pathname.includes("shop")
  // ) {
  //   return <Navigate to="/admin/dashboard" />;
  // }

  return <>{children}</>;
}

export default CheckAuth;
