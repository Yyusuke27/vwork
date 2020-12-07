import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import NotificationItem from "./NotificationItem";
import {
  fetchAsyncGetNotifications,
  selectNotifications,
} from "../notificationSlice";

const NotificationList = () => {
  const dispatch = useDispatch();

  const notifications = useSelector(selectNotifications);

  const getNotifications = useCallback(
    async () => {
      await dispatch(fetchAsyncGetNotifications());
    },
    [dispatch]
  );

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);

  return (
    <>
      <Box my={3}>
        {notifications &&
          notifications.map((notification, index) => {
            return <NotificationItem key={index} data={notification} />;
          })}
      </Box>
    </>
  );
};

export default NotificationList;
