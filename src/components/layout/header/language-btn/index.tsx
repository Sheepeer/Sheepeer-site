import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
// import LanguageIcon from '@mui/icons-material/Language';
import { Language } from "@mui/icons-material";
import styles from "./style.module.scss";

const I18N_MENU = [
  {
    label: "中文",
    value: "CN",
  },
  {
    label: "English",
    value: "EN",
  },
];

const LanguageBtn = () => {
  const router = useRouter();

  const [language, setLanguage] = useState(I18N_MENU[0].value);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickMenuItemHandler = (value: string) => {
    setLanguage(value);
    handleClose();
  };

  return (
    <div className={styles["root"]}>
      <Button
        id="menu-trigger"
        variant="text"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // startIcon={<LanguageIcon />}
        startIcon={<Language/>}
      >
        {language}
      </Button>

      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-trigger",
        }}
      >
        {I18N_MENU.map(({ label, value }) => (
          <MenuItem
            key={value}
            onClick={() => clickMenuItemHandler(value)}
            // onClick={handleClose}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageBtn;
