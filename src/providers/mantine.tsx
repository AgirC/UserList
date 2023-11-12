import { MantineProvider, createTheme } from "@mantine/core";
import { ReactNode } from "react";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "indigo",
});

interface MantineProviderProps {
  children: ReactNode;
}

export const MantineProv: React.FC<MantineProviderProps> = ({ children }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
