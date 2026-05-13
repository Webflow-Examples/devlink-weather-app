"use client";
import * as React from "react";
import { useIXEvent } from "../../interactions";
import { cj, useClickOut, KEY_CODES } from "../../utils";
import { NavbarContext } from "../../Navbar/helpers/navbarContext";
import { DropdownContext } from "../helpers/dropdownContext";
function getLinksList(root) {
  return root.querySelectorAll(".w-dropdown-list .w-dropdown-link");
}
const INITIAL_DROPDOWN_STATE = {
  isOpen: false,
  openingCount: 0,
};
function Dropdown({ tag = "div", className = "", children, ...props }) {
  const { root, setFocusedLink, hover, toggleOpen } =
    React.useContext(DropdownContext);
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
  const handleFocus = (e) => {
    const linkList = root.current ? Array.from(getLinksList(root.current)) : [];
    const linkAmount = linkList.length;
    switch (e.key) {
      case KEY_CODES.ARROW_LEFT:
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setFocusedLink((prev) => Math.max(prev - 1, 0));
        break;
      }
      case KEY_CODES.ARROW_RIGHT:
      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setFocusedLink((prev) => Math.min(prev + 1, linkAmount - 1));
        break;
      }
      case KEY_CODES.HOME: {
        e.preventDefault();
        setFocusedLink(0);
        break;
      }
      case KEY_CODES.END: {
        e.preventDefault();
        setFocusedLink(linkAmount - 1);
        break;
      }
      case KEY_CODES.TAB: {
        setTimeout(() => {
          setFocusedLink(
            linkList.findIndex((link) => link === document.activeElement)
          );
        }, 0);
        break;
      }
      case KEY_CODES.SPACE: {
        e.preventDefault();
        break;
      }
      default: {
        return;
      }
    }
  };
  return React.createElement(
    tag,
    {
      ...props,
      ref: root,
      onKeyDown: handleFocus,
      onMouseEnter: () => {
        if (hover) {
          toggleOpen();
        }
      },
      onMouseLeave: () => {
        if (hover) {
          toggleOpen();
        }
      },
      className: cj(
        className,
        "w-dropdown",
        isNavbarOpen && "w--nav-dropdown-open"
      ),
    },
    children
  );
}
const DropdownWrapper = React.forwardRef(function DropdownWrapper(
  { delay, hover, ...props },
  ref
) {
  const root = React.useRef(null);
  const [{ isOpen }, setIsOpen] = React.useState(INITIAL_DROPDOWN_STATE);
  const [focusedLink, setFocusedLink] = React.useState(-1);
  const closeTimeoutRef = React.useRef(undefined);
  React.useImperativeHandle(ref, () => root.current);
  React.useEffect(() => {
    return () => {
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);
  const toggleOpen = React.useCallback(() => {
    clearTimeout(closeTimeoutRef.current);
    setFocusedLink(-1);
    setIsOpen(({ openingCount, ...rest }) => ({
      ...rest,
      openingCount: openingCount + 1,
    }));
    if (delay > 0 && isOpen) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(({ openingCount }) => ({
          openingCount,
          isOpen: openingCount % 2 === 1,
        }));
      }, delay);
    } else {
      setIsOpen(({ openingCount }) => ({
        openingCount,
        isOpen: openingCount % 2 === 1,
      }));
    }
  }, [hover, isOpen, delay]);
  const closeDropdown = React.useCallback(
    () => setIsOpen(INITIAL_DROPDOWN_STATE),
    [setIsOpen]
  );
  useClickOut(root, closeDropdown);
  useIXEvent(root.current, isOpen);
  React.useEffect(() => {
    if (root.current) {
      const links = getLinksList(root.current);
      links[focusedLink ?? 0]?.focus();
    }
  }, [focusedLink]);
  return React.createElement(
    DropdownContext.Provider,
    {
      value: {
        root,
        isOpen,
        toggleOpen,
        setFocusedLink,
        hover,
      },
    },
    React.createElement(Dropdown, { ...props })
  );
});
export default DropdownWrapper;
