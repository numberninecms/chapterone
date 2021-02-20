module.exports = {
    purge: [],
    theme: {
        screens: {
            sm: '425px',
            md: '768px',
            lg: '1280px',
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary)',
                    100: 'hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) + 30%))',
                    200: 'hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) + 24%))',
                    300: 'hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) + 18%))',
                    400: 'hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) + 12%))',
                    500: 'hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) + 6%))',
                    600: 'var(--color-primary)',
                    700: 'hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) - 6%))',
                    800: 'hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) - 12%))',
                    900: 'hsl(var(--color-primary-h), var(--color-primary-s), calc(var(--color-primary-l) - 18%))',
                },
                
                secondary: {
                    DEFAULT: 'var(--color-secondary)',
                    100: 'hsl(var(--color-secondary-h), var(--color-secondary-s), calc(var(--color-secondary-l) + 30%))',
                    200: 'hsl(var(--color-secondary-h), var(--color-secondary-s), calc(var(--color-secondary-l) + 24%))',
                    300: 'hsl(var(--color-secondary-h), var(--color-secondary-s), calc(var(--color-secondary-l) + 18%))',
                    400: 'hsl(var(--color-secondary-h), var(--color-secondary-s), calc(var(--color-secondary-l) + 12%))',
                    500: 'hsl(var(--color-secondary-h), var(--color-secondary-s), calc(var(--color-secondary-l) + 6%))',
                    600: 'var(--color-secondary)',
                    700: 'hsl(var(--color-secondary-h), var(--color-secondary-s), calc(var(--color-secondary-l) - 6%))',
                    800: 'hsl(var(--color-secondary-h), var(--color-secondary-s), calc(var(--color-secondary-l) - 12%))',
                    900: 'hsl(var(--color-secondary-h), var(--color-secondary-s), calc(var(--color-secondary-l) - 18%))',
                },
                
                tertiary: {
                    DEFAULT: 'var(--color-tertiary)',
                    100: 'hsl(var(--color-tertiary-h), var(--color-tertiary-s), calc(var(--color-tertiary-l) + 30%))',
                    200: 'hsl(var(--color-tertiary-h), var(--color-tertiary-s), calc(var(--color-tertiary-l) + 24%))',
                    300: 'hsl(var(--color-tertiary-h), var(--color-tertiary-s), calc(var(--color-tertiary-l) + 18%))',
                    400: 'hsl(var(--color-tertiary-h), var(--color-tertiary-s), calc(var(--color-tertiary-l) + 12%))',
                    500: 'hsl(var(--color-tertiary-h), var(--color-tertiary-s), calc(var(--color-tertiary-l) + 6%))',
                    600: 'var(--color-tertiary)',
                    700: 'hsl(var(--color-tertiary-h), var(--color-tertiary-s), calc(var(--color-tertiary-l) - 6%))',
                    800: 'hsl(var(--color-tertiary-h), var(--color-tertiary-s), calc(var(--color-tertiary-l) - 12%))',
                    900: 'hsl(var(--color-tertiary-h), var(--color-tertiary-s), calc(var(--color-tertiary-l) - 18%))',
                },

                quaternary: {
                    DEFAULT: 'var(--color-quaternary)',
                    100: 'hsl(var(--color-quaternary-h), var(--color-quaternary-s), calc(var(--color-quaternary-l) + 30%))',
                    200: 'hsl(var(--color-quaternary-h), var(--color-quaternary-s), calc(var(--color-quaternary-l) + 24%))',
                    300: 'hsl(var(--color-quaternary-h), var(--color-quaternary-s), calc(var(--color-quaternary-l) + 18%))',
                    400: 'hsl(var(--color-quaternary-h), var(--color-quaternary-s), calc(var(--color-quaternary-l) + 12%))',
                    500: 'hsl(var(--color-quaternary-h), var(--color-quaternary-s), calc(var(--color-quaternary-l) + 6%))',
                    600: 'var(--color-quaternary)',
                    700: 'hsl(var(--color-quaternary-h), var(--color-quaternary-s), calc(var(--color-quaternary-l) - 6%))',
                    800: 'hsl(var(--color-quaternary-h), var(--color-quaternary-s), calc(var(--color-quaternary-l) - 12%))',
                    900: 'hsl(var(--color-quaternary-h), var(--color-quaternary-s), calc(var(--color-quaternary-l) - 18%))',
                },
            },
        },
    },
    variants: {},
    plugins: [],
}
