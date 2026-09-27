// Vitest global setup — runs before every test file.
// React 19 requires this flag before act() may be used outside a test renderer.
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
