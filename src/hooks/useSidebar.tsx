import { useState } from "react";

export const useSidebar = () => {
  const [open, setOpen] = useState(false);
  const [itemActive, setItemActive] = useState(1);

  return { open, setOpen, itemActive, setItemActive };
};
