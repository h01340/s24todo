import App from "./App";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
/**
 * wrap the component in a router provider, 
 * such as MemoryRouter from react-router-dom, 
 * when rendering it in the test. 
 * This provides the necessary context for the component.
 */
//https://v5.reactrouter.com/web/guides/testing
//https://medium.com/@vitalismutwiri/securing-react-router-dom-routes-with-vitest-and-testing-tools-a3c364f14e67
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

describe('testing routes.... ', () => {
    test("Check h6 text", () => {
        // Wrap App with MemoryRouter to provide routing context
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(screen.findByText("My Todos")).toBeDefined();
    });

});