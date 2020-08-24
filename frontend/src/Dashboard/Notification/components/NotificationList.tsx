import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import NotificationItem from "./NotificationItem";
import {
  fetchAsyncGetNotifications,
  selectNotifications,
} from "../notificationSlice";
import { selectWorkspace } from "../../../Auth/authSlice";

const NotificationList = () => {
  const dispatch = useDispatch();

  const workspaceId = useSelector(selectWorkspace);

  const notifications = useSelector(selectNotifications);

  const getNotifications = useCallback(
    async (workspaceId) => {
      await dispatch(fetchAsyncGetNotifications(workspaceId));
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspaceId) {
      getNotifications(workspaceId);
    }
  }, [workspaceId, getNotifications]);

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
