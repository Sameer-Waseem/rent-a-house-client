import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import AddIcon from "../assets/add.png";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import * as Yup from "yup";

import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";

interface FormValues {
  type: string;
  area: number | null;
  rent: number | null;
  highlights: string;
  description: string;
  rooms: number | null;
  bathrooms: number | null;
  water_supply: string;
  gas_supply: string;
  electricity_supply: string;
}

interface FormFieldProps {
  name: string;
  label: string;
  type: "text" | "number";
  margin: string;
  padding: string;
}

interface FormRadioProps {
  name: string;
  label: string;
  children: ReactNode;
}

const AddHouse = () => {
  const [open, setOpen] = useState<boolean>(false);

  const initialValues: FormValues = {
    type: "appartement",
    area: 0,
    rent: 0,
    highlights: "",
    description: "",
    rooms: 0,
    bathrooms: 0,
    water_supply: "yes",
    gas_supply: "yes",
    electricity_supply: "yes",
  };

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSubmit = (values: FormValues) => {
    console.log("values:", values);
    handleClose();
  };

  return (
    <>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Card
          onClick={handleClickOpen}
          sx={{ height: "100%", alignContent: "center" }}
        >
          <CardActionArea sx={{ height: "100%" }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <img src={AddIcon} width={"80px"} />

              <Box marginLeft={"10px"}>
                <Typography variant={"h6"}>Add a new house</Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

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
          {() => (
            <Form>
              <DialogContent>
                <DialogContentText id={"add-house-dialog-description"}>
                  Please provide the house details.
                </DialogContentText>

                <FormRadio name={"type"} label={"Type"}>
                  <FormControlLabel
                    value={"appartement"}
                    control={<Radio />}
                    label={"Appartement"}
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
                      value={"yes"}
                      control={<Radio />}
                      label={"Yes"}
                    />
                    <FormControlLabel
                      value={"no"}
                      control={<Radio />}
                      label={"no"}
                    />
                  </FormRadio>

                  <FormRadio name={"gas_supply"} label={"Gas Supply"}>
                    <FormControlLabel
                      value={"yes"}
                      control={<Radio />}
                      label={"Yes"}
                    />
                    <FormControlLabel
                      value={"no"}
                      control={<Radio />}
                      label={"no"}
                    />
                  </FormRadio>

                  <FormRadio
                    name={"electricity_supply"}
                    label={"Electricity Supply"}
                  >
                    <FormControlLabel
                      value={"yes"}
                      control={<Radio />}
                      label={"Yes"}
                    />
                    <FormControlLabel
                      value={"no"}
                      control={<Radio />}
                      label={"no"}
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
                <Button type={"submit"} variant={"contained"} color={"primary"}>
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
  type: Yup.string().trim().default("appartement").required(),
  area: Yup.number().min(1).max(99999).required("Area is required."),
  rent: Yup.number().min(1).max(99999).required("Rent is required."),
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
