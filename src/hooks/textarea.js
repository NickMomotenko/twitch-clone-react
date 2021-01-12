import React, { useState } from "react";

export const useTextArea = () => {
  const [value, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };

  return { value, setValue, onChange };
};
