import React, { useState, useEffect, memo, Fragment } from "react";
import clsx from 'clsx';
import { UserDropdown } from "../../../../components/shared/UserDropdown/UserDropdown";
// import { NotificationDropdown } from "../../../../components/dropdowns/NotificationDropdown/NotificationDropdown";
// import { HelpDropdown } from "../../../../../../../../../../../shipping_tendersv1/resources/js/components/shared/dropdowns/HelpDropdown/HelpDropdown";
// import { CompanyLinks } from "../../../../../../../../../../../shipping_tendersv1/resources/js/components/shared/dropdowns/UserDropdown/CompanyLinks";
import { HeaderNavigationStyle } from "./HeaderNavigationStyle";
import LanguageSwitch from "@/components/shared/LangSwitch/LanguageSwitch";

export const HeaderNavigation = () => {

    const classes = HeaderNavigationStyle();

    // const { auth } = usePage().props;

    // const { user } = auth;

    const [notifications, setNotifications] = useState([]);

    const [totalNotifications, setTotalNotifications] = useState(0);

    // useEffect(() => {

    //     Echo.private(`notification.${auth.user.id}.${auth.user.type}`)
    //     .listen('.Notifications', (res) => {
    //         setNotifications((prev) => [res.notification, ...prev.slice(0, -1)]);
    //         setTotalNotifications((prev) => prev+1);
    //     })
    //     .subscribed(() => {
    //         console.log('Subscribed to notification channel');
    //     });
    // }, []);

    // useEffect(() => {
    //     if (user.notifications) {
    //         setNotifications(user.notifications.notifications);
    //         setTotalNotifications(user.notifications.total_notifications_count);
    //     }
    // }, [user.notifications]);

    return (
        <div className={classes.nav}>
            <div className={classes.right}>
                <div className={classes.MenuItem}>
                    <LanguageSwitch />
                </div>
                <div className={classes.MenuItem}>
                    {/* <NotificationDropdown notifications={notifications} totalNotifications={totalNotifications} setNotifications={setNotifications} /> */}
                </div>
                <div className={classes.MenuItem}>
                    <UserDropdown links={[]} />
                </div>
            </div>
        </div>
    );
};
