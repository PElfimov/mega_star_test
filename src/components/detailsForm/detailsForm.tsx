import {Form as BotForm} from "react-bootstrap"
import {DetailsField} from "../../lib/interfaces"

interface Props {
  field: DetailsField[]
}

export function DetailsForm({field}: Props) {
  return (
    <BotForm>
      {field.map((item) => {
        return (
          <BotForm.Group key={item.name} className="mb-1">
            <label htmlFor="" className={`form-label`}>
              {item.name}
            </label>
            <input
              placeholder={`Enter ${item.name}`}
              type="text"
              className={"form-control"}
              disabled={item.disabled}
              value={item.vale}
              onChange={item.onChange}
            />
            {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
          </BotForm.Group>
        )
      })}
    </BotForm>
  )
}
