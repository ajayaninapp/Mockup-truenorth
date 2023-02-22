import { styled } from "@mui/system";
import { TableCell } from "@mui/material";
import { Typography } from "@mui/material";
import { Box, Button, TextField } from "@mui/material";

export const CustomTableCell = styled(TableCell)({
  padding: "14px",
  fontSize: "12px",
});
export const CustomTableHeadCell = styled(TableCell)({
  padding: "12px",
  fontWeight: "bold",
});

export const CustomListItemTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "300",
  color: "#1c1a1a",
  margin: "0 5px 0 5px",
});

export const FormEmail = styled(TextField)({
  color: "darkslategray",
});
export const CustomButton = styled(Button)({
  background: "#1890ff",
  marginTop: 20,
  color: "white",
  fontWeight: 600,
  height: "50px",
  borderRadius: "50px",
  "&:hover": {
    backgroundColor: "#bae7ff",
    color: "black",
  },
});

export const ThemedBox = styled(Box)({
  background: "linear-gradient(to right, #096dd9 0%, #096dd9 100%)",
  color: "white",
});
