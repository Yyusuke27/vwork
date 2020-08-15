import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VwDrawer from "../../shared/components/Common/VwDrawer";
import {
  selectInviteMemberClicked,
  toggleInviteMemberClicked,
  toggleLoading,
} from "../../appSlice";

import { Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TextField } from "formik-material-ui";
import { Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { selectWorkspace } from "../../Auth/authSlice";
import { fetchAsyncInviteMember } from "../dashboardSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    formArea: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "33vh",
    },
  })
);

const InviteMemberInAddIconDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const inviteMemberClicked = useSelector(selectInviteMemberClicked);
  const workspace = useSelector(selectWorkspace);

  return (
    <>
      <VwDrawer
        open={inviteMemberClicked}
        click={() => dispatch(toggleInviteMemberClicked(false))}
      >
        <Container>
          <Box mt={5} mb={2} borderBottom={1}>
            <Typography variant="h5">メンバー招待</Typography>
          </Box>
          <Formik
            initialValues={{
              invitations: [{ name: "", email: "" }],
            }}
            validationSchema={Yup.object().shape({
              invitations: Yup.array().of(
                Yup.object().shape({
                  email: Yup.string()
                    .email("有効なメールアドレスを入力してください。")
                    .required("emailは必須です。"),
                  name: Yup.string().required("氏名は必須です。"),
                })
              ),
            })}
            onSubmit={async (values) => {
              dispatch(toggleLoading(true));
              await dispatch(
                fetchAsyncInviteMember({
                  workspace,
                  invitations: values.invitations,
                })
              );
              dispatch(toggleLoading(false));
              dispatch(toggleInviteMemberClicked(false));
            }}
          >
            {({ values }) => (
              <Form className={classes.formArea}>
                <FieldArray
                  name="invitations"
                  render={(arrayHelpers) => (
                    <div>
                      {values.invitations.map((invitation, index) => (
                        <div key={index}>
                          <Grid container spacing={3}>
                            <Grid item xs={5}>
                              <Field
                                component={TextField}
                                label="氏名*"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id={`name.${index}`}
                                name={`invitations[${index}].name`}
                              />
                            </Grid>
                            <Grid item xs={5}>
                              <Field
                                component={TextField}
                                type="email"
                                label="メールアドレス*"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id={`email.${index}`}
                                name={`invitations[${index}].email`}
                              />
                            </Grid>
                            <Grid item xs={1}>
                              <Box
                                display="flex"
                                alignItems="center"
                                height="100%"
                              >
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Box>
                            </Grid>
                          </Grid>
                        </div>
                      ))}
                      <br />
                      <Button
                        color="primary"
                        onClick={() =>
                          arrayHelpers.push({ name: "", email: "" })
                        }
                      >
                        さらに追加
                      </Button>
                      <Box mt={3}>
                        <DialogActions>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                          >
                            招待する
                          </Button>
                        </DialogActions>
                      </Box>
                    </div>
                  )}
                />
              </Form>
            )}
          </Formik>
        </Container>
      </VwDrawer>
    </>
  );
};

export default InviteMemberInAddIconDrawer;
