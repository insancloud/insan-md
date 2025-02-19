import { BROWSERS_DISPLAY } from "../Defaults";

// macOS, Ubuntu or Anystring
export const setBrowsers = (name: string = "WaApi") => {
  BROWSERS_DISPLAY.BROWSERS = name;
};
