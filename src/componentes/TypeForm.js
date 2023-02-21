import React, { useState } from "react";
import {Widget} from '@typeform/embed-react';
import "./css/Form.css";

function TypeForm() {
  return (
    <div>
      <form
        url="https://example.typeform.com/to/ABC123"
        style={{ width: "100%", height: 500 }}
      />
    </div>
  );
}

export default TypeForm;
