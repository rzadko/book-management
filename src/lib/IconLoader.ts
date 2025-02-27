"use client";
import { useEffect } from "react";

export default function IconLoader() {
    useEffect(() => {
        if (!document.querySelector("#google-icons")) {
            const link = document.createElement("link");
            link.id = "google-icons";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
            link.crossOrigin = "anonymous";
            document.head.appendChild(link);
        }
    }, []);

    return null;
}
