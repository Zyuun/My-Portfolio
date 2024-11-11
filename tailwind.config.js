/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#141313",
                    text: "#212122",
                    "base-100": "#FFFFFF" /* background image */,
                },
            },
            "dark",
        ],
    },
    theme: {
        container:{
            padding:{
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            }
        },
        extend: {
            fontSize: {
                xs: "14px",
                base: "16px",
                lg: "18px",
                xl: "20px",
                "2xl": "24px",
                "3xl": "32px",
                "4xl": "36px",
                "5xl": "40px",
                "6xl": "48px",
                "7xl": "64px",
                "8xl": "92px",
            },
            colors: {
                primary: "#141313",
                text: "#212122",
                secondary: "#EEA849"
            },
            backgroundImage: {
                "text-gradient":
                    'linear-gradient(71deg, rgba(184, 106, 223, 1) 0%, rgba(255, 147, 15, 1) 52%, rgba(244, 107, 69, 1) 71%)',
            },
        },
    },
    plugins: [require("daisyui")],
};
