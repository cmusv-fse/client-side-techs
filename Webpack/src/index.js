import "./index.less";
import Navigo from "navigo";
import Home from "./view/home.html";
import ErrorPage from "./view/error.html";
import AnotherPage from "./view/another-page.html";

const app = document.getElementById("app");
const router = new Navigo("/");

router
  .on("/", () => {
    app.innerHTML = Home;
  })
  .on("/another-page", () => {
    app.innerHTML = AnotherPage;
  })
  .notFound(() => {
    app.innerHTML = ErrorPage;
  })
  .resolve();
