import { Outlet } from '@solidjs/router';
import { Suspense } from 'solid-js';
const Layout = () => {
    // const data = useSelector((state) => state.auth);
    // console.log(data);
    return (
        <div>
            <h2>Layout</h2>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default Layout;
