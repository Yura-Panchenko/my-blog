import { Routes as ReactRoutes, Route } from "react-router-dom";

function Routes() {
  return (
    <ReactRoutes>
        <Route index element={"Home"}/>
        <Route path="/review" element={"Rewiev"}/>
        <Route path="/tips" element={"Tips"}/>
        <Route path="/alerts" element={"Alerts"}/>
        <Route path="/blog" element={"Blog"}/>
        <Route path="*" element="404"/>
    </ReactRoutes>
  )
}

export default Routes