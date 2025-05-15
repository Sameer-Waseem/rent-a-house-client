import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  return (
    <Box
      display={"flex"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {isRouteError ? (
        <>
          <Typography variant={"h6"}>404</Typography>
          <Typography variant={"body1"} color={"textDisabled"}>
            &nbsp;|&nbsp;
          </Typography>
          <Typography variant={"body1"} color={"textDisabled"}>
            Page not found
          </Typography>
        </>
      ) : (
        <Typography variant={"body1"} color={"textDisabled"}>
          Something went wrong!
        </Typography>
      )}
    </Box>
  );
};

export default ErrorPage;
