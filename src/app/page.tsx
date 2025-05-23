import { ToastContainer } from "react-toastify";
import LogInPage from "./login/page";

export default function Home() {
  return (
    <>
    <LogInPage></LogInPage>
      <ToastContainer position="bottom-center" // "top-left", "top-center", "bottom-right", etc.
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // or "dark", "colored"
        limit={3}></ToastContainer>
        </>
  );
}
