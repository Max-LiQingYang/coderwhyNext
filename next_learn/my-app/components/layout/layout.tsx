import { memo, ReactElement } from "react";

function Layout(props) {
  const { children } = props;

  return <div>
    header
    {children}
    footer
  </div>;
}

Layout.displayname = "Layout";

export default memo(Layout);
