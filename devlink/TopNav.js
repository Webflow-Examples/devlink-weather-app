import React from "react";
import * as _Builtin from "./_Builtin";
import { LocationForm } from "./LocationForm";
import * as _utils from "./utils";
import _styles from "./TopNav.module.css";

export function TopNav({ as: _Component = _Builtin.Block, locationForm }) {
  return (
    <_Component className={_utils.cx(_styles, "top-nav-container")} tag="div">
      <_Builtin.Block tag="div">
        {locationForm ?? <LocationForm />}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-nav-container")}
        tag="div"
      >
        <_Builtin.DropdownWrapper
          className={_utils.cx(_styles, "dropdown")}
          tag="div"
          data-hover={false}
          data-delay={0}
        >
          <_Builtin.DropdownToggle
            className={_utils.cx(_styles, "dropdown-toggle")}
            tag="div"
          >
            <_Builtin.Icon
              className={_utils.cx(_styles, "arrow-down")}
              widget={{
                type: "icon",
                icon: "dropdown-toggle",
              }}
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "title-large")}
              tag="div"
            >
              {"San Francisco"}
            </_Builtin.Block>
          </_Builtin.DropdownToggle>
          <_Builtin.DropdownList
            className={_utils.cx(_styles, "dropdown-list")}
            tag="nav"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "dropdown-card")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-highlight")}
                  tag="div"
                >
                  {"Atlanta - Mostly Cloudy"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "label")}
                  tag="div"
                >
                  {"2:17pm"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "temp-small")}
                tag="div"
              >
                {"74º"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "dropdown-card", "middle")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-highlight")}
                  tag="div"
                >
                  {"New York - Drizzle"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "label")}
                  tag="div"
                >
                  {"2:17pm"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "temp-small")}
                tag="div"
              >
                {"65º"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "dropdown-card", "middle")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-highlight")}
                  tag="div"
                >
                  {"Amsterdam - Severe storms"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "label")}
                  tag="div"
                >
                  {"8:17pm"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "temp-small")}
                tag="div"
              >
                {"80º"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.DropdownList>
        </_Builtin.DropdownWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
