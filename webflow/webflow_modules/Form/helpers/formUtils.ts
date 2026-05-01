"use client";
import * as React from "react";

/**
 * Helper function to stop propagation of keyboard events on form inputs.
 * Prevents interference from parent components like Navbar that have
 * accessibility keyboard handlers.
 */
export function onKeyDownInputHandlers(
  e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  e.stopPropagation();
}
