import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ForecastCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|e1de801e-655c-c09f-d0f5-101a21266574","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|e1de801e-655c-c09f-d0f5-101a21266574","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651505149230},"e-72":{"id":"e-72","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-73"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819338433},"e-84":{"id":"e-84","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-85"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"14c00b34-85e6-b001-1694-019459164c8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"14c00b34-85e6-b001-1694-019459164c8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666826948719},"e-86":{"id":"e-86","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-35","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-35-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":73,"restingState":50},{"continuousParameterGroupId":"a-35-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":73,"restingState":50}],"createdOn":1666826948719},"e-97":{"id":"e-97","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-98"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1667335164523},"e-98":{"id":"e-98","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-97"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1667335164523}},"actionLists":{"a":{"id":"a","title":"Fade in animation","actionItemGroups":[{"actionItems":[{"id":"a-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":0,"unit":""}},{"id":"a-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95"},"value":0,"unit":""}},{"id":"a-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|5770baaf-e603-65b1-8fab-218aa24894be"},"value":0,"unit":""}},{"id":"a-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|b0bef92a-2b78-9ac2-73c3-fb74bfe0d46b"},"value":0,"unit":""}},{"id":"a-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"value":0,"unit":""}},{"id":"a-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|18b32fbb-c384-b89b-d2c5-f9d4bc60fa14"},"value":0,"unit":""}},{"id":"a-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|c9b320e0-72ea-c32b-87f2-7744826d2ca8"},"value":0,"unit":""}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|e1de801e-655c-c09f-d0f5-101a21266664"},"value":0,"unit":""}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|e1de801e-655c-c09f-d0f5-101a21266664"},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":1,"unit":""}},{"id":"a-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":500,"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95"},"value":1,"unit":""}},{"id":"a-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|b0bef92a-2b78-9ac2-73c3-fb74bfe0d46b"},"value":1,"unit":""}},{"id":"a-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|5770baaf-e603-65b1-8fab-218aa24894be"},"value":1,"unit":""}},{"id":"a-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":700,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|150bd48f-4d38-214b-6274-da18015c2f6c"},"value":1,"unit":""}},{"id":"a-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|18b32fbb-c384-b89b-d2c5-f9d4bc60fa14"},"value":1,"unit":""}},{"id":"a-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|dc6b2600-5bca-e580-f744-dabc8782ef5d"},"value":1,"unit":""}},{"id":"a-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":900,"easing":"","duration":500,"target":{"id":"63d85500e0557a581f5a7602|ea1ffd23-f51a-00a1-ec03-c0b83538c62d"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637118496510},"a-35":{"id":"a-35","title":"Forecast card animation","continuousParameterGroups":[{"id":"a-35-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-35-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"63d85500e0557a581f5a7602|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"yValue":-15,"zValue":null,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":100,"actionItems":[{"id":"a-35-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"63d85500e0557a581f5a7602|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"yValue":15,"zValue":null,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]}]},{"id":"a-35-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-35-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"63d85500e0557a581f5a7602|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"xValue":15,"zValue":null,"xUnit":"deg","yUnit":"DEG","zUnit":"deg"}}]},{"keyframe":100,"actionItems":[{"id":"a-35-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"63d85500e0557a581f5a7602|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"xValue":-15,"zValue":null,"xUnit":"deg","yUnit":"DEG","zUnit":"deg"}}]}]}],"createdOn":1666809351933},"a-44":{"id":"a-44","title":"Move","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".temp-wrapper","selectorGuids":["0f1ed6a0-c758-1764-b496-a4beae2058b9"]},"zValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"px"}},{"id":"a-44-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-large","selectorGuids":["1f56689f-cfef-238f-1a43-5d713ffdc513"]},"zValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"px"}}]},{"actionItems":[{"id":"a-44-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.135,0.656,0.32,1],"duration":200,"target":{"useEventTarget":"CHILDREN","selector":".temp-wrapper","selectorGuids":["0f1ed6a0-c758-1764-b496-a4beae2058b9"]},"zValue":40,"xUnit":"PX","yUnit":"PX","zUnit":"px"}},{"id":"a-44-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.047,0.685,0.44,1],"duration":200,"target":{"useEventTarget":"CHILDREN","selector":".image-large","selectorGuids":["1f56689f-cfef-238f-1a43-5d713ffdc513"]},"zValue":70,"xUnit":"PX","yUnit":"PX","zUnit":"px"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1667248663265},"a-45":{"id":"a-45","title":"Move out","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.215,0.61,0.355,1],"duration":500,"target":{"useEventTarget":"CHILDREN","selector":".temp-wrapper","selectorGuids":["0f1ed6a0-c758-1764-b496-a4beae2058b9"]},"zValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"px"}},{"id":"a-45-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.215,0.61,0.355,1],"duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-large","selectorGuids":["1f56689f-cfef-238f-1a43-5d713ffdc513"]},"zValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"px"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1667248663265}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ForecastCard({
  as: _Component = _Builtin.Block,
  dayOfWeek = "Monday",
  iconImage = "https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557aa4fc5a7633_Group%201287.png",
  temp = "63º",
  weatherDesc = "Partially cloudy",
  high = (
    <>
      {"H: "}
      {"°"}
    </>
  ),
  low = (
    <>
      {"L: "}
      {"°"}
    </>
  ),
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "card-forecast")}
      id={_utils.cx(
        _styles,
        "w-node-_95ee82c6-38e8-5b6a-1c90-af0bc260ab95-c260ab95"
      )}
      data-w-id="95ee82c6-38e8-5b6a-1c90-af0bc260ab95"
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "forecast-day")} tag="div">
        <_Builtin.Block tag="div">{dayOfWeek}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "image-wrapper")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-large")}
          loading="lazy"
          width="auto"
          height="auto"
          src={iconImage}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "forecast-info")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "temp-wrapper")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "temp")} tag="div">
            {temp}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
          {weatherDesc}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "flex-horizontal")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "highest-temp")}
            tag="div"
          >
            {high}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lowest-temp")}
            tag="div"
          >
            {low}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
