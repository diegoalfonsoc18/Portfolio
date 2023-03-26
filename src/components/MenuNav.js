import React from "react";
import { Dropdown } from "react-bootstrap";

function DropdownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Selecciona una opción
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Opción 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Opción 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Opción 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
