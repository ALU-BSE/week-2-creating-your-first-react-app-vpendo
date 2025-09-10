## My first react app



### Prerequisites
- **Node.js and npm**: Node 16+ recommended. Verify:
```bash
node -v
npm -v
```


### Getting Started
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (default `http://localhost:5173/`).

### Project Structure (key files)
- `src/main.tsx`: App entry and render
- `src/App.tsx`: Renders the component and a counter
- `src/MyComponent.tsx`: Custom component accepting props
- `src/MyComponent.css`: Styles for `MyComponent`
- `src/App.css`: Optional layout styles

### Features Implemented
- `MyComponent` is a separate component with typed props:
  - `title` (string, required)
  - `text` (string, optional)
- Distinct CSS styling applied via `.my-component` class
- Counter in `App.tsx` with Increment and Decrement buttons

### How to Verify
1. App loads without errors in the browser
2. You see a styled title coming from `props`
3. The paragraph text is visible
4. Clicking buttons changes the counter value up and down


