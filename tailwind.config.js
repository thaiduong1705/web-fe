module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    important: true,
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Roboto', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
            },
            fontSize: {
                14: '14px',
                16: '16px',
            },
            backgroundColor: {
                'main-bg': '#FAFBFB',
                'main-dark-bg': '#20232A',
                'secondary-dark-bg': '#33373E',
                'light-gray': '#F7F7F7',
                'half-transparent': 'rgba(0, 0, 0, 0.5)',
                'dark-gray': '#082031cc',
                'overlay-30': 'rgba(0,0,0,0.3)',
                'overlay-70': 'rgba(0,0,0,0.7)',
            },
            borderWidth: {
                1: '1px',
            },
            borderColor: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            width: {
                210: '200px',
                400: '400px',
                760: '760px',
                780: '780px',
                800: '800px',
                1024: '1024px',
                1000: '1000px',
                1200: '1200px',
                1400: '1400px',
            },
            height: {
                80: '80px',
                65: '65px',
            },
            minHeight: {
                590: '590px',
            },
            inset: { 210: '210px' },
            backgroundImage: {
                'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
            },
            flex: {
                2: '0 0 15%',
                8: '0 0 80%',
            },
        },
    },
    plugins: [],
};
