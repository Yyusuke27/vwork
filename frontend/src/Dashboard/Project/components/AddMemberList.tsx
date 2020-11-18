import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Field, FieldArray, Form, Formik } from "formik";
import { Box } from "@material-ui/core";
import { CheckboxWithLabel } from "formik-material-ui";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {
  fetchAsyncAddMembers,
  fetchAsyncGetProject,
  selectNewMembers,
  selectProject,
} from "../projectSlice";
import { toggleAddMemberButton, toggleLoading } from "../../../appSlice";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: "50%",
    },
  })
);

const AddMemberList = () => {
  const classes = useStyles();
  const newMembers = useSelector(selectNewMembers);
  const project = useSelector(selectProject);

  const dispatch = useDispatch();

  interface NewMemberFormValues {
    members: string[];
  }

  const initialValues: NewMemberFormValues = {
    members: [],
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          members: Yup.array().required("メンバーを選択してください"),
        })}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(false);
          dispatch(toggleLoading(true));
          await dispatch(
            fetchAsyncAddMembers({
              projectId: project.id,
              members: values.members,
            })
          );
          await dispatch(fetchAsyncGetProject(project.id));
          dispatch(toggleLoading(false));
          dispatch(toggleAddMemberButton(false));
        }}
      >
        {({ values, errors }) => (
          <Form>
            <FieldArray
              name="members"
              render={(arrayHelpers) => (
                <div>
                  {newMembers &&
                    newMembers.map((member, index) => (
                      <div key={`newMember-${index}`}>
                        <Field
                          component={CheckboxWithLabel}
                          Label={{ label: member.name }}
                          name="tasks"
                          type="checkbox"
                          value={member.id}
                          checked={values.members.includes(member.id)}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            if (e.target.checked) {
                              arrayHelpers.push(member.id);
                            } else {
                              const idx = values.members.indexOf(member.id);
                              arrayHelpers.remove(idx);
                            }
                          }}
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                        />
                      </div>
                    ))}
                  <FormHelperText error={true}>{errors.members}</FormHelperText>
                  <DialogActions>
                    <Box
                      mt={5}
                      width="100%"
                      display="flex"
                      justifyContent="center"
                    >
                      <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="primary"
                      >
                        追加
                      </Button>
                    </Box>
                  </DialogActions>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddMemberList;
