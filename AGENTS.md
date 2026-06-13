# AGENTS.md

## UI

- This project uses Tailwind CSS v4.
- This project uses Base UI, always see https://base-ui.com/llms.txt for docs before applying UI changes.
- Use Base UI components appropriately when building UI, and avoid writing native elements directly when a suitable Base UI component exists.
- The project does not keep a complete local copy of all Base UI components; use the Base UI documentation to find the available component list, then extract only the components needed into `src/components/ui`.
- Extract Base UI components into `src/components/ui` before using them elsewhere in the project.
- When extracting Base UI components into `src/components/ui`, name them `BaseUi<Name>`, for example `Button` should be named `BaseUiButton`.
- When extracting Base UI components into `src/components/ui`, use the Tailwind example styles from the official Base UI documentation exactly as shown, without custom style changes.
- When extracting Base UI components into `src/components/ui`, define appropriate props for the extracted component.

## Code Quality

- After modifying code files, run `pnpm lint:fix [PATH]...` to try to automatically fix lint issues in the modified files. If any issues cannot be fixed automatically, fix them manually.
- After modifying code files, run `pnpm fmt [PATH]...` to format the modified files.
- After modifying code files, run `pnpm typecheck` to check types.
- After modifying code files, you do not need to build the project or run the development server.
