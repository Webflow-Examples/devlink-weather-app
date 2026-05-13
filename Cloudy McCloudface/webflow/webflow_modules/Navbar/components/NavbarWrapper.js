"use client";
import * as React from "react";
import {
  EASING_FUNCTIONS,
  KEY_CODES,
  cj,
  debounce,
  extractElement,
  isServer,
  useLayoutEffect,
  useResizeObserver,
} from "../../utils";
import { NavbarContext, BREAKPOINTS } from "../helpers/navbarContext";
import NavbarMenu from "./NavbarMenu";
function getLinksList(root) {
  return root.querySelectorAll(".w-nav-menu .w-nav-link");
}
function getAnimationKeyframes({ axis = "Y", start, end }) {
  const t = `translate${axis}`;
  return [{ transform: `${t}(${start}px)` }, { transform: `${t}(${end}px)` }];
}
const maybeExtractChildMenu = (children, isOpen) => {
  if (!isOpen) return { childMenu: null, rest: children };
  const { extracted, tree } = extractElement(
    React.Children.toArray(children),
    NavbarMenu
  );
  return { childMenu: extracted, rest: tree };
};
function NavbarOverlay({ children }) {
  const { isOpen, getOverlayHeight, toggleOpen } =
    React.useContext(NavbarContext);
  const overlayToggleOpen = React.useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        toggleOpen();
      }
    },
    [toggleOpen]
  );
  const overlayHeight = getOverlayHeight();
  return React.createElement(
    "div",
    {
      className: "w-nav-overlay",
      id: "w-nav-overlay",
      style: {
        display: isOpen ? "block" : "none",
        height: overlayHeight ? overlayHeight : undefined,
        width: isOpen ? "100%" : 0,
      },
      onClick: overlayToggleOpen,
      onKeyDown: overlayToggleOpen,
    },
    children
  );
}
function Navbar({ tag = "div", className = "", children, config, ...props }) {
  const { root, collapse, setFocusedLink } = React.useContext(NavbarContext);
  const [shouldExtractMenu, setShouldExtractMenu] = React.useState(true);
  const extractMenuCallback = React.useCallback(
    (entry) => {
      setShouldExtractMenu(entry.contentRect.width <= BREAKPOINTS[collapse]);
    },
    [setShouldExtractMenu]
  );
  const bodyRef = React.useRef(
    typeof document !== "undefined" ? document.body : null
  );
  useResizeObserver(bodyRef, extractMenuCallback);
  const { childMenu, rest } = React.useMemo(
    () => maybeExtractChildMenu(children, shouldExtractMenu),
    [children, shouldExtractMenu]
  );
  const handleFocus = (e) => {
    const inputFocused =
      document.activeElement?.tagName.toLowerCase() === "input";
    const linkList = root.current ? Array.from(getLinksList(root.current)) : [];
    const linkAmount = linkList.length;
    switch (e.key) {
      case KEY_CODES.ARROW_LEFT:
      case KEY_CODES.ARROW_UP:
        if (!inputFocused) {
          e.preventDefault();
          setFocusedLink((prev) => Math.max(prev - 1, 0));
        }
        break;
      case KEY_CODES.ARROW_RIGHT:
      case KEY_CODES.ARROW_DOWN:
        if (!inputFocused) {
          e.preventDefault();
          setFocusedLink((prev) => Math.min(prev + 1, linkAmount - 1));
        }
        break;
      case KEY_CODES.HOME:
        e.preventDefault();
        setFocusedLink(0);
        break;
      case KEY_CODES.END:
        e.preventDefault();
        setFocusedLink(linkAmount - 1);
        break;
      case KEY_CODES.TAB:
        setTimeout(() => {
          setFocusedLink(
            linkList.findIndex((link) => link === document.activeElement)
          );
        }, 0);
        break;
      case KEY_CODES.SPACE:
        if (!inputFocused) e.preventDefault();
        break;
      default:
        return;
    }
  };
  return React.createElement(
    tag,
    {
      ...props,
      className: cj(className, "w-nav"),
      "data-collapse": config.collapse,
      "data-animation": config.animation,
      ref: root,
      onKeyDown: handleFocus,
    },
    React.createElement(
      React.Fragment,
      null,
      rest,
      React.createElement(NavbarOverlay, null, childMenu)
    )
  );
}
const NavbarWrapper = React.forwardRef(function NavbarWrapper(
  { config, tag, ...props },
  ref
) {
  const { animation, docHeight, easing, easing2, duration, noScroll } = config;
  const root = React.useRef(null);
  const menu = React.useRef(null);
  const animOver = /^over/.test(animation);
  const animDirect = /left$/.test(animation) ? -1 : 1;
  const [focusedLink, setFocusedLink] = React.useState(-1);
  React.useImperativeHandle(ref, () => root.current);
  const getBodyHeight = React.useCallback(() => {
    if (isServer) return;
    return docHeight
      ? document.documentElement.scrollHeight
      : document.body.scrollHeight;
  }, [docHeight]);
  const getOverlayHeight = React.useCallback(() => {
    if (isServer || !root.current) return;
    let height = getBodyHeight();
    if (!height) return;
    const style = getComputedStyle(root.current);
    if (!animOver && style.position !== "fixed") {
      height -= root.current.offsetHeight;
    }
    return height;
  }, [animOver, getBodyHeight]);
  const getOffsetHeight = React.useCallback(() => {
    if (!root.current || !menu.current) return 0;
    return root.current.offsetHeight + menu.current.offsetHeight;
  }, []);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = debounce(() => {
    if (!menu.current) return;
    if (isOpen) {
      const keyframes = animOver
        ? getAnimationKeyframes({
            axis: "X",
            start: 0,
            end: animDirect * menu.current.offsetWidth,
          })
        : getAnimationKeyframes({ start: 0, end: -getOffsetHeight() });
      const anim = menu.current.animate(keyframes, {
        easing: EASING_FUNCTIONS[easing2] ?? "ease",
        duration,
        fill: "forwards",
      });
      anim.onfinish = () => setIsOpen(!isOpen);
      return;
    }
    setFocusedLink(-1);
    setIsOpen(!isOpen);
  });
  useLayoutEffect(() => {
    if (!menu.current) return;
    if (isOpen) {
      const keyframes = animOver
        ? getAnimationKeyframes({
            axis: "X",
            start: animDirect * menu.current.offsetWidth,
            end: 0,
          })
        : getAnimationKeyframes({ start: -getOffsetHeight(), end: 0 });
      menu.current.animate(keyframes, {
        easing: EASING_FUNCTIONS[easing] ?? "ease",
        duration,
        fill: "forwards",
      });
    }
  }, [
    animDirect,
    animOver,
    duration,
    easing,
    getBodyHeight,
    getOffsetHeight,
    isOpen,
  ]);
  useLayoutEffect(() => {
    if (isOpen && noScroll) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen, noScroll]);
  const closeOnResize = React.useCallback(() => setIsOpen(false), [setIsOpen]);
  useResizeObserver(root, closeOnResize, { onlyWidth: true });
  React.useEffect(() => {
    if (root.current) {
      const links = getLinksList(root.current);
      links[focusedLink ?? 0]?.focus();
    }
  }, [focusedLink]);
  return React.createElement(
    NavbarContext.Provider,
    {
      value: {
        ...config,
        root,
        menu,
        animOver,
        animDirect,
        getBodyHeight,
        getOverlayHeight,
        isOpen,
        toggleOpen,
        navbarMounted: true,
        setFocusedLink,
      },
    },
    React.createElement(Navbar, { config: config, tag: tag, ...props })
  );
});
export default NavbarWrapper;
