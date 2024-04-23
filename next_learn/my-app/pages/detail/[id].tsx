import { useRouter } from "next/router";
import { memo } from "react";
import type { FC, ReactElement } from 'react';

export interface IProps {
    children?: ReactElement;
}

const Profile: FC<IProps> = function (props) {
    const { children } = props;
    const router = useRouter();
    const { id } = router.query; // 不仅可以拿到 query，也可以拿到 动态路由，如果冲突优先动态路由的参数

    return (
        <div className="Profile">
            <div>Profile {id}</div>
        </div>
    )
};

Profile.displayName = 'Profile';

export default memo(Profile);
