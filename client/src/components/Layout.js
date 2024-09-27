import { Outlet } from "react-router-dom";
import React from 'react';

const Layout = () => {
    return (
        <main>
            <Outlet/> {/*Used when you want to have a layout (such as a header, footer, or sidebar) that stays the same across multiple routes, but the content inside the layout (the part that <Outlet /> renders) changes based on the current route. */}
        </main>
    )
}

export default Layout
