# Team Spec-kit Standards

Follow these standards when contributing code and documentation.

**1 Naming**
- **Variables / Functions:** camelCase (example: `getUserData`).
- **Classes / Types:** PascalCase (example: `UserService`).
- **Files:** kebab-case (use consistent, descriptive names).

**2 Folder Structure**
- **Services:** place service implementations under `src/services/`.
- **API contracts:** author and update the canonical API contract at [specs/api.md](specs/api.md) before changing endpoints.

**3 Error Handling & Responses**
- **No raw throws:** do not use `throw new Error()` in business logic.
- **Use Result wrapper:** return errors with the project wrapper, e.g. `Result.fail(ErrorCode.VALIDATION_FAILED, "Message")`.
- **Response shape:** all API handlers must return an object matching `{ status: number, data: any, message: string }`.

**4 Verification Workflow**
- **Lint:** run `npm run lint` after changes and ensure CI enforces it.
- **Types sync:** if types change, update [src/types.ts](src/types.ts) and the API contract at [specs/api.md](specs/api.md).
- **Tests:** add or update unit/integration tests for changed logic.

**5 Testing (TDD)**
- **Approach:** Prefer Test-Driven Development for new features — write a failing test first, then implement minimal code to pass it.
- **Unit tests:** keep tests small, deterministic, and fast; mock external dependencies and avoid network/DB in unit tests.
- **Integration & e2e:** cover critical flows that span modules; use e2e for user-visible behavior.
- **Coverage & CI:** require tests to run in CI with a minimum coverage gate for key modules. Fail builds on regressions.

**6 Component Strategy & Styling (Tailwind)**
- **Utility-first:** use Tailwind CSS for component styling; prefer composing utility classes over bespoke CSS where practical.
- **Component structure:** place UI components under `src/components/`; components should expose minimal props and variants.
- **Design tokens:** centralize colors, spacing, and typography in `tailwind.config.js` and reference them via classes.
- **Responsiveness & accessibility:** build components mobile-first and ensure ARIA attributes and keyboard accessibility.
- **Visual tests:** add visual regression snapshots for key components when feasible.

