import { DrawerProps } from "@fluentui/react-components";
import * as React from "react";
import {
  Hamburger,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavSectionHeader,
} from "@fluentui/react-nav-preview";

import {
  Tooltip,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

import { CalendarDataBar16Filled,Home12Filled, SelectAllOff16Filled } from '@fluentui/react-icons';
import { LinkNavBar } from "../LinkNavBar";

type DrawerType = Required<DrawerProps>["type"];

export const NavBar = (props: Partial<NavDrawerProps>) => {
  const styles = useStyles();

  const [isOpen, setIsOpen] = React.useState(true);
  const [type, setType] = React.useState<DrawerType>("inline");
  const [isMultiple, setIsMultiple] = React.useState(true);

  const renderHamburgerWithToolTip = () => {
    return (
      <Tooltip content="Navigation" relationship="label">
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
      </Tooltip>
    );
  };

  return (
    <div className={styles.root}>
      <NavDrawer
        defaultSelectedValue="2"
        defaultSelectedCategoryValue=""
        open={isOpen}
        type={type}
        multiple={isMultiple}
      >
        <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>

        <NavDrawerBody>
          <LinkNavBar title={"Inicio"} toLink={"inicio"} icon={<Home12Filled style={{ marginRight: "15px" }} />} />
          <LinkNavBar title={"Fechas"} toLink={"fechas"} icon={<CalendarDataBar16Filled style={{ marginRight: "15px" }} />} />
          <LinkNavBar title={"Selescts"} toLink={"selects"} icon={<CalendarDataBar16Filled style={{ marginRight: "15px" }} />} />
          <NavSectionHeader>Mas..</NavSectionHeader>
        </NavDrawerBody>
      </NavDrawer>
    </div>
  );
};