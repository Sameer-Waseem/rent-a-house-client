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
import { useState } from "react";
import AddIcon from "../assets/add.png";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Field, FieldProps, Form, Formik } from "formik";

interface FormValues {
  area: number | null;
  type: string;
  rent: number | null;
  highlights: string;
  description: string;
  rooms: number | null;
  bathrooms: number | null;
  water_supply: string;
  gas_supply: string;
  electricity_supply: string;
}

const AddHouse = () => {
  const [open, setOpen] = useState<boolean>(false);

  const initialValues: FormValues = {
    area: null,
    type: "appartement",
    rent: null,
    highlights: "",
    description: "",
    rooms: null,
    bathrooms: null,
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
          variant={"h6"}
          sx={{ padding: "16px 24px" }}
        >
          Add a new house
        </DialogTitle>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <DialogContent>
              <DialogContentText id={"add-house-dialog-description"}>
                Please provide the house details.
              </DialogContentText>

              <FormControl margin={"dense"}>
                <FormLabel>Type</FormLabel>
                <Field name={"type"}>
                  {({ field }: FieldProps) => (
                    <RadioGroup
                      {...field}
                      aria-labelledby={"house-type"}
                      sx={{ flexDirection: "row" }}
                    >
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
                    </RadioGroup>
                  )}
                </Field>
              </FormControl>

              <Box display={"flex"}>
                <Field name={"area"}>
                  {({ field }: FieldProps) => (
                    <TextField
                      {...field}
                      id={"area"}
                      label={"Area"}
                      fullWidth
                      type={"number"}
                      sx={{ margin: "4px 4px 4px 0" }}
                    />
                  )}
                </Field>

                <Field name={"rent"}>
                  {({ field }: FieldProps) => (
                    <TextField
                      {...field}
                      id={"rent"}
                      label={"Rent"}
                      fullWidth
                      type={"number"}
                      sx={{ margin: "4px 0 4px 4px" }}
                    />
                  )}
                </Field>
              </Box>

              <Box display={"flex"}>
                <Field name={"highlights"}>
                  {({ field }: FieldProps) => (
                    <TextField
                      {...field}
                      id={"highlights"}
                      label={"Highlights"}
                      fullWidth
                      sx={{ margin: "4px 0" }}
                    />
                  )}
                </Field>
              </Box>

              <Box display={"flex"}>
                <Field name={"description"}>
                  {({ field }: FieldProps) => (
                    <TextField
                      {...field}
                      id={"description"}
                      label={"Description"}
                      fullWidth
                      sx={{ margin: "4px 0" }}
                    />
                  )}
                </Field>
              </Box>

              <Box display={"flex"}>
                <Field name={"rooms"}>
                  {({ field }: FieldProps) => (
                    <TextField
                      {...field}
                      id={"rooms"}
                      label={"Rooms"}
                      fullWidth
                      type={"number"}
                      sx={{ margin: "4px 4px 4px 0" }}
                    />
                  )}
                </Field>

                <Field name={"bathrooms"}>
                  {({ field }: FieldProps) => (
                    <TextField
                      {...field}
                      id={"bathrooms"}
                      label={"Bathrooms"}
                      fullWidth
                      type={"number"}
                      sx={{ margin: "4px 0 4px 4px" }}
                    />
                  )}
                </Field>
              </Box>

              <Box display={"flex"} justifyContent={"space-between"}>
                <FormControl margin={"dense"}>
                  <FormLabel>Water Supply</FormLabel>
                  <Field name={"water_supply"}>
                    {({ field }: FieldProps) => (
                      <RadioGroup {...field} aria-labelledby={"water-supply"}>
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
                      </RadioGroup>
                    )}
                  </Field>
                </FormControl>

                <FormControl margin={"dense"}>
                  <FormLabel>Gas Supply</FormLabel>
                  <Field name={"gas_supply"}>
                    {({ field }: FieldProps) => (
                      <RadioGroup {...field} aria-labelledby={"gas-supply"}>
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
                      </RadioGroup>
                    )}
                  </Field>
                </FormControl>

                <FormControl margin={"dense"}>
                  <FormLabel>Electricity Supply</FormLabel>
                  <Field name={"electricity_supply"}>
                    {({ field }: FieldProps) => (
                      <RadioGroup
                        {...field}
                        aria-labelledby={"electricity-supply"}
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
                      </RadioGroup>
                    )}
                  </Field>
                </FormControl>
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
        </Formik>
      </Dialog>
    </>
  );
};

export default AddHouse;
