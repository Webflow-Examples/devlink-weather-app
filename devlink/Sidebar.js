import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Sidebar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-61":{"id":"e-61","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-60":{"id":"e-60","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f4d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-44":{"id":"e-44","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-63":{"id":"e-63","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f4e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f4e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-74":{"id":"e-74","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-75"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|c3be69a4-e364-ebd4-5635-54756b1b9941","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|c3be69a4-e364-ebd4-5635-54756b1b9941","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186},"e-75":{"id":"e-75","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|c3be69a4-e364-ebd4-5635-54756b1b9941","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|c3be69a4-e364-ebd4-5635-54756b1b9941","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186},"e-76":{"id":"e-76","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-77"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|d1086867-4547-9a33-e1a9-7bd5691e4580","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|d1086867-4547-9a33-e1a9-7bd5691e4580","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186},"e-77":{"id":"e-77","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|d1086867-4547-9a33-e1a9-7bd5691e4580","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|d1086867-4547-9a33-e1a9-7bd5691e4580","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186},"e-78":{"id":"e-78","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|c3be69a4-e364-ebd4-5635-54756b1b9921","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|c3be69a4-e364-ebd4-5635-54756b1b9921","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186},"e-80":{"id":"e-80","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-81"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|d1086867-4547-9a33-e1a9-7bd5691e4580","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|d1086867-4547-9a33-e1a9-7bd5691e4580","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186},"e-82":{"id":"e-82","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-83"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|c3be69a4-e364-ebd4-5635-54756b1b9922","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|c3be69a4-e364-ebd4-5635-54756b1b9922","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186},"e-95":{"id":"e-95","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-96"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|09f3d2cc-b97f-6d26-994d-5e2742da15e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|09f3d2cc-b97f-6d26-994d-5e2742da15e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666844181994},"e-96":{"id":"e-96","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-95"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63d85500e0557a581f5a7602|09f3d2cc-b97f-6d26-994d-5e2742da15e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63d85500e0557a581f5a7602|09f3d2cc-b97f-6d26-994d-5e2742da15e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666844181995}},"actionLists":{"a-32":{"id":"a-32","title":"Sidebar Expand","actionItemGroups":[{"actionItems":[{"id":"a-32-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}},{"id":"a-32-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".logo-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65882"]},"value":"block"}},{"id":"a-32-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".collapse-icon-container","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d658b6"]},"value":"block"}},{"id":"a-32-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-logo-icon-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65889"]},"value":"none"}},{"id":"a-32-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-menu-collapsed-overlay","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d6588e"]},"value":"none"}}]},{"actionItems":[{"id":"a-32-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65896"]},"widthValue":300,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-32-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650904639417},"a-26":{"id":"a-26","title":"Sidebar Collapse","actionItemGroups":[{"actionItems":[{"id":"a-26-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-26-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".logo-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65882"]},"value":"none"}},{"id":"a-26-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":0,"target":{},"value":0,"unit":""}},{"id":"a-26-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-menu-collapsed-overlay","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d6588e"]},"value":"block"}}]},{"actionItems":[{"id":"a-26-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65896"]},"widthValue":46,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650904639417},"a-27":{"id":"a-27","title":"🍔 Sidebar Hamburger Menu - Opens 3","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"zValue":135,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-27-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-27-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"yValue":2,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636864366516},"a-25":{"id":"a-25","title":"🍔 Hamburger Menu - Closes 3","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-25-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-25-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-25-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636864667872},"a-31":{"id":"a-31","title":"Sidebar Nav Menu Mobile Height 3","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar-nav-menu","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65873"]},"heightValue":110,"widthUnit":"PX","heightUnit":"vh","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1651501735427},"a-38":{"id":"a-38","title":"🍔 Sidebar Hamburger Menu - Opens 4","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"zValue":135,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-38-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-38-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-38-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"yValue":2,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636864366516},"a-39":{"id":"a-39","title":"🍔 Hamburger Menu - Closes 4","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-39-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-39-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-39-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636864667872},"a-36":{"id":"a-36","title":"Sidebar Expand 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}},{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".logo-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65882"]},"value":"block"}},{"id":"a-36-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".collapse-icon-container","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d658b6"]},"value":"block"}},{"id":"a-36-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-logo-icon-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65889"]},"value":"none"}},{"id":"a-36-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-menu-collapsed-overlay","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d6588e"]},"value":"none"}}]},{"actionItems":[{"id":"a-36-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65896"]},"widthValue":300,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-36-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650904639417},"a-40":{"id":"a-40","title":"Sidebar Nav Menu Mobile Height 4","actionItemGroups":[{"actionItems":[{"id":"a-40-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar-nav-menu","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65873"]},"heightValue":110,"widthUnit":"PX","heightUnit":"vh","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1651501735427}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Sidebar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "sidebar-wrapper")}
      tag="div"
      config={{
        animation: "over-left",
        collapse: "medium",
        docHeight: true,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "brand-bar")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "brand-container")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "icon")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557aa5145a7616_Logo.svg"
          />
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "logo-wrapper")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block className={_utils.cx(_styles, "titlel")} tag="div">
              {"WeatherApp"}
            </_Builtin.Block>
          </_Builtin.NavbarBrand>
          <_Builtin.Block
            className={_utils.cx(_styles, "sidebar-logo-icon-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              loading="eager"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557a694f5a7618_sidebar-icon-dashboardly-webflow-template.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "sidebar-links")}
          tag="div"
        >
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "sidebar-nav-menu")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sidebar-menu-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sidebar-menu-content")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link-current")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557a84795a7624_home-icon.svg"
                  />
                  <_Builtin.Block tag="div">{"Dashboard"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557af1c95a7635_Like-icon.svg"
                  />
                  <_Builtin.Block tag="div">{"Favorites"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557a22ec5a7611_reporting-icon.svg"
                  />
                  <_Builtin.Block tag="div">{"Reporting"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557a063b5a761a_map-icon.svg"
                  />
                  <_Builtin.Block tag="div">{"Weather map"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557a2b3c5a7614_Calendar-icon.svg"
                  />
                  <_Builtin.Block tag="div">{"Calendar"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557abfdb5a7619_settings-icon.svg"
                  />
                  <_Builtin.Block tag="div">{"Settings"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sidebar-menu-collapsed-overlay")}
              tag="div"
            />
          </_Builtin.NavbarMenu>
          <_Builtin.Block
            className={_utils.cx(_styles, "collapse-icon-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "collapse-icon-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "arrow")}
                loading="lazy"
                width={10}
                height="auto"
                src="https://uploads-ssl.webflow.com/63d85500e0557a18cd5a7601/63d85500e0557a26395a7636_arrow.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "hamburger-menu-wrapper", "sidebar")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "hamburger-menu-bar",
                "top",
                "sidebar"
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "hamburger-menu-bar",
                "bottom",
                "sidebar"
              )}
              tag="div"
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
