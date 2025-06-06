import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikHelpers,
} from "formik";
import { ReactNode, useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
import HouseAddedContext from "../../contexts/HouseAddedContext";
import useNotify from "../../hooks/useNotify";
import axiosInstance from "../../services/apiClient";

interface FormValues {
  type: string;
  area: number | null;
  rent: number | null;
  highlights: string;
  description: string;
  rooms: number | null;
  bathrooms: number | null;
  water_supply: boolean;
  gas_supply: boolean;
  electricity_supply: boolean;
}

const AddHouse = () => {
  const { notifySuccess, notifyError } = useNotify();
  const { setHouseAdded } = useContext(HouseAddedContext);
  const [open, setOpen] = useState<boolean>(false);

  const initialValues: FormValues = {
    type: "apartment",
    area: 0,
    rent: 0,
    highlights: "",
    description: "",
    rooms: 0,
    bathrooms: 0,
    water_supply: true,
    gas_supply: true,
    electricity_supply: true,
  };

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true);

    try {
      await axiosInstance.post<FormValues>("/house", values);
      setHouseAdded(true);
      handleClose();
      notifySuccess("House added successfully.");
    } catch (error: any) {
      notifyError(error?.response?.data?.error);
    }

    setSubmitting(false);
  };

  return (
    <>
      <ToastContainer position={"bottom-right"} />

      <Button onClick={handleClickOpen} color={"warning"} variant={"contained"}>
        Add house
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={"add-house-dialog-title"}
        aria-describedby={"add-house-dialog-description"}
      >
        <DialogTitle
          id={"add-house-dialog-title"}
          variant={"h5"}
          sx={{ padding: "16px 24px" }}
        >
          Add a new house
        </DialogTitle>

        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <DialogContent>
                <DialogContentText id={"add-house-dialog-description"}>
                  Please provide the house details.
                </DialogContentText>

                <FormRadio name={"type"} label={"Type"}>
                  <FormControlLabel
                    value={"apartment"}
                    control={<Radio />}
                    label={"Apartment"}
                  />
                  <FormControlLabel
                    value={"plot"}
                    control={<Radio />}
                    label={"Plot"}
                  />
                </FormRadio>

                <Box display={"flex"}>
                  <FormField
                    name={"area"}
                    label={"Area (sq. mt)"}
                    type={"number"}
                    margin={"4px 4px 4px 0"}
                    padding={"0 4px 0 0"}
                  />

                  <FormField
                    name={"rent"}
                    label={"Rent (PKR)"}
                    type={"number"}
                    margin={"4px 0 4px 4px"}
                    padding={"0 4px"}
                  />
                </Box>

                <Box display={"flex"}>
                  <FormField
                    name={"highlights"}
                    label={"Highlights"}
                    type={"text"}
                    margin={"4px 0"}
                    padding={"0 4px"}
                  />
                </Box>

                <Box display={"flex"}>
                  <FormField
                    name={"description"}
                    label={"Description"}
                    type={"text"}
                    margin={"4px 0"}
                    padding={"0 4px"}
                  />
                </Box>

                <Box display={"flex"}>
                  <FormField
                    name={"rooms"}
                    label={"Rooms"}
                    type={"number"}
                    margin={"4px 4px 4px 0"}
                    padding={"0 4px"}
                  />

                  <FormField
                    name={"bathrooms"}
                    label={"Bathrooms"}
                    type={"number"}
                    margin={"4px 0 4px 4px"}
                    padding={"0 4px"}
                  />
                </Box>

                <Box display={"flex"} justifyContent={"space-between"}>
                  <FormRadio name={"water_supply"} label={"Water Supply"}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={"Yes"}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={"no"}
                    />
                  </FormRadio>

                  <FormRadio name={"gas_supply"} label={"Gas Supply"}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={"Yes"}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={"No"}
                    />
                  </FormRadio>

                  <FormRadio
                    name={"electricity_supply"}
                    label={"Electricity Supply"}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label={"Yes"}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label={"No"}
                    />
                  </FormRadio>
                </Box>
              </DialogContent>

              <DialogActions sx={{ padding: "0 28px 16px" }}>
                <Button
                  onClick={handleClose}
                  variant={"contained"}
                  color={"error"}
                >
                  Close
                </Button>
                <Button
                  type={"submit"}
                  variant={"contained"}
                  color={"primary"}
                  loading={isSubmitting}
                >
                  Add
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

interface FormFieldProps {
  name: string;
  label: string;
  type: "text" | "number";
  margin: string;
  padding: string;
}

const FormField = ({ name, label, type, margin, padding }: FormFieldProps) => {
  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"}>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <TextField
            {...field}
            id={name}
            label={label}
            fullWidth
            type={type}
            sx={{ margin }}
          />
        )}
      </Field>

      <ErrorMessage
        name={name}
        render={(err) => (
          <Typography variant={"caption"} color={"error"} padding={padding}>
            {err}
          </Typography>
        )}
      />
    </Box>
  );
};

interface FormRadioProps {
  name: string;
  label: string;
  children: ReactNode;
}

const FormRadio = ({ name, label, children }: FormRadioProps) => {
  return (
    <FormControl margin={"dense"}>
      <FormLabel>{label}</FormLabel>

      <Field name={name}>
        {({ field }: FieldProps) => (
          <RadioGroup
            {...field}
            aria-labelledby={"house-type"}
            sx={{ flexDirection: "row" }}
          >
            {children}
          </RadioGroup>
        )}
      </Field>
    </FormControl>
  );
};

const validation = Yup.object().shape({
  type: Yup.string().trim().default("apartment").required(),
  area: Yup.number().min(1).max(99999).required("Area is required."),
  rent: Yup.number().min(1).max(999999).required("Rent is required."),
  highlights: Yup.string()
    .trim()
    .min(3)
    .max(55)
    .required("Highlights is required."),
  description: Yup.string()
    .trim()
    .min(10)
    .max(1055)
    .required("Description is required."),
  rooms: Yup.number().min(1).max(255).required("Rooms are required."),
  bathrooms: Yup.number().min(1).max(255).required("Bathrooms are required."),
  water_supply: Yup.string().default("yes").required(),
  gas_supply: Yup.string().default("yes").required(),
  electricity_supply: Yup.string().default("yes").required(),
});

export default AddHouse;
