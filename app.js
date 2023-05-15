import { initViews } from "./view-router.js";
import { initAuth, signIn, signOutUser } from "./simple-auth.js";

window.addEventListener("load", initApp);

function initApp() {
    console.log("app.js is running 🎉");
    initViews();
    initAuth();
    document.querySelector("#form-signin").addEventListener("submit", signIn);
    document.querySelector("#btn-sign-out").addEventListener("click", signOutUser);
}
