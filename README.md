**Next.js Template Overview**

This Next.js template provides a solid foundation for building web apps. Let's break down the key technologies and folder structure:

### Core Technologies

1. **TypeScript**: Enhances JavaScript with static typing, improving code robustness.

2. **React**: A JavaScript library for building user interfaces.

3. **Next.js**: Enables server-side rendering and static site generation. It also offers a rich ecosystem of plugins.

### Styling

- **Tailwind CSS**: A utility-first CSS framework that provides base styles and utility classes for custom styling.

### Testing

- **Playwright**: For end-to-end testing as a user would interact with the app.

### Linting & Formatting

- **ESLint**: Checks for common errors and code smells in JavaScript code.

- **Prettier**: Automatically formats JavaScript code.

### Folder Structure

1. **`/public`**: Contains static assets (e.g., images) used by the app.

2. **`/src`**:
   - **`/components`**: Organized by Atomic Design (Atoms, Molecules, Organisms).
   - **`/constants`**: Holds app constants (theme, colors, API endpoints).
   - **`/contexts`**: React contexts for sharing data between components.
   - **`/hooks`**: Custom React hooks for shared logic.
   - **`/pages`**: Contains app pages (routed automatically by Next.js).
   - **`/styles`**: Global styles file (including Tailwind CSS).
   - **`/utils`**: Common utility functions.

### Naming Conventions

- Component files and folders: PascalCase (e.g., `Button/Button.tsx`).
- Helper functions: camelCase (e.g., `utils/formatDate/formatDate.ts`).

Remember to write tests for each component to ensure functionality and maintainability. Happy coding! 🚀
