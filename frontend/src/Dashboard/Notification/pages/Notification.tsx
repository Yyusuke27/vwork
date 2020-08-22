import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import MainHeader from "../../../shared/components/Navigation/MainHeader";
import NotificationList from "../components/NotificationList";
import { Box } from "@material-ui/core";

const Notification = () => {
  return (
    <Container>
      <MainHeader title="受信ボックス" />
      <Box borderBottom={1} width="90%">
        <Typography variant="h5" component="h2">
          受信リスト
        </Typography>
      </Box>
      <NotificationList />
    </Container>
  );
};

export default Notification;
