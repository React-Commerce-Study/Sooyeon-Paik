module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
   ],
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script',
         },
      },
      {
         env: {
            jest: true,
         },
         files: ['__tests__/**/*.{ts,tsx}'],
         parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            project: './tsconfig.json',
            tsconfigRootDir: __dirname,
         },
      },
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint', 'react'],
   rules: {
      indent: ['error', 3],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'react/prop-types': 'off',
      'import/no-commonjs': 'off',
      '@typescript-eslint/no-var-requires': 'off',
   },
   'globals': {
      '__dirname': true,
   },
   
};
