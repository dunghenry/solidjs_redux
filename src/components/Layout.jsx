import { Outlet } from '@solidjs/router';
import { Suspense } from 'solid-js';
const Layout = () => {
    return (
        <div>
            <h2>Layout</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default Layout;
