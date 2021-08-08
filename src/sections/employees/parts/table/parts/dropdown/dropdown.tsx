import {Dropdown as BootstrapDropdown} from "react-bootstrap"

export function Dropdown() {
  return (
    <BootstrapDropdown>
      <BootstrapDropdown.Toggle size="sm" variant="secondary" />

      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item
          as="button"
          onClick={() => {
            console.log(`Action click`)
          }}>
          Action
        </BootstrapDropdown.Item>
        <BootstrapDropdown.Item as="button">Action</BootstrapDropdown.Item>
        <BootstrapDropdown.Item as="button">Action</BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  )
}
