## Daemonhive Frontend

Modern frontend built with Next.js, React, TypeScript, Tailwind CSS, and Radix UI.

### Tech Stack

- **Framework**: Next.js `16.1.6`
- **Language**: TypeScript
- **UI**: React `^19`, Radix UI, Tailwind CSS
- **Package manager**: Recommended `pnpm` (a `pnpm-lock.yaml` file is present)

All commands below work the same in macOS, Linux, and Windows (PowerShell or CMD).

### Prerequisites

- **Node.js**: Install the latest LTS version (Node 18+ recommended).
- **pnpm** (recommended):

```bash
npm install -g pnpm
```

You can also use **npm** or **yarn** if you prefer; equivalent commands are listed below.

### 1. Get the project code

Place or clone the project into a folder on your machine, then open a terminal in the `frontend` directory:

If your path is different, adjust the `cd` command accordingly.

### 2. Install dependencies

- **Using pnpm (recommended)**:

```bash
pnpm install
```

- **Using npm**:

```bash
npm install
```

- **Using yarn**:

```bash
yarn install
```

### 3. Run the app in development

This uses the `dev` script from `package.json` (`next dev`).

- **Using pnpm**:

```bash
pnpm dev
```

- **Using npm**:

```bash
npm run dev
```

- **Using yarn**:

```bash
yarn dev
```

Then open your browser and go to:

```text
http://localhost:3000
```

### 4. Build the app for production

This uses the `build` script from `package.json` (`next build`).

- **Using pnpm**:

```bash
pnpm build
```

- **Using npm**:

```bash
npm run build
```

- **Using yarn**:

```bash
yarn build
```

### 5. Run the production build locally

After a successful build, you can start the production server using the `start` script (`next start`).

- **Using pnpm**:

```bash
pnpm start
```

- **Using npm**:

```bash
npm run start
```

- **Using yarn**:

```bash
yarn start
```

The app will again be available at:

```text
http://localhost:3000
```

### 6. Lint the codebase

This uses the `lint` script (`eslint .`).

- **Using pnpm**:

```bash
pnpm lint
```

- **Using npm**:

```bash
npm run lint
```

- **Using yarn**:

```bash
yarn lint
```

### 7. Command reference (summary)

- **Install dependencies**:
  - **pnpm**: `pnpm install`
  - **npm**: `npm install`
  - **yarn**: `yarn install`
- **Run dev server**:
  - **pnpm**: `pnpm dev`
  - **npm**: `npm run dev`
  - **yarn**: `yarn dev`
- **Build for production**:
  - **pnpm**: `pnpm build`
  - **npm**: `npm run build`
  - **yarn**: `yarn build`
- **Start production server**:
  - **pnpm**: `pnpm start`
  - **npm**: `npm run start`
  - **yarn**: `yarn start`
- **Run linting**:
  - **pnpm**: `pnpm lint`
  - **npm**: `npm run lint`
  - **yarn**: `yarn lint`
