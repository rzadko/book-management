module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ["Arial", "Helvetica", "sans-serif"],
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
};
