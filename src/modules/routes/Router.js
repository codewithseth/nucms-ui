import { Appearance } from "../pages/cms/pages/appearance/components/Appearance";
import { Category } from "../pages/cms/pages/category/components/Category";
import { Comment } from "../pages/cms/pages/comment/components/Comment";
import { Media } from "../pages/cms/pages/media/components/Media";
import { MyHome } from "../pages/cms/pages/home/components/MyHome";
import { Page } from "../pages/cms/pages/page/components/Page";
import { Post } from "../pages/cms/pages/post/components/Post";
import SettingPage from "../pages/cms/pages/setting/SettingPage";
import { User } from "../pages/cms/pages/users/compontents/User";
import { Slider } from "../pages/cms/pages/slider/components/Slider";

const AuthRoutes = [
    {
        path: '/user-dashboard',
        element: <MyHome />
    },
    {
        path: 'user-dashboard/post',
        element: <Post />
    },
    {
        path: 'user-dashboard/category',
        element: <Category />
    },
    {
        path: 'user-dashboard/media',
        element: <Media />
    },
    {
        path: 'user-dashboard/slider',
        element: <Slider />
    },
    {
        path: 'user-dashboard/page',
        element: <Page />
    },
    {
        path: 'user-dashboard/comment',
        element: <Comment />
    },
    {
        path: 'user-dashboard/template',
        element: <Appearance />
    },
    {
        path: 'user-dashboard/user',
        element: <User />
    },
    {
        path: 'user-dashboard/setting/*',
        element: <SettingPage />
    },
]

export default AuthRoutes;