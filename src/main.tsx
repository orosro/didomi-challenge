import React from "react";
import ReactDOM from "react-dom/client";

import { App, Providers } from "./app";

if (import.meta.env.MODE === "development" && import.meta.env.VITE_ENABLE_MSW) {
    import("../msw").then(({ initWorker }) => {
        const worker = initWorker();
        worker.start().then(initApp);
    });
} else {
    initApp();
}

function initApp() {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <Providers>
                <App />
            </Providers>
        </React.StrictMode>
    );
}
