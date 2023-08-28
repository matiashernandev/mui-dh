import "@testing-library/jest-dom/extend-expect"
import { getByRole, render, screen, waitFor } from "@testing-library/react"
import UserEvent from "@testing-library/user-event"

import AppForTest from "@/components/playground/AppForTest"
import { act } from "react-dom/test-utils"

test("select", async () => {
  await act(async () => render(<AppForTest />))

  UserEvent.click(getByRole(screen.getByTestId("country"), "button"))
  await waitFor(() => UserEvent.click(screen.getByText(/Argentina/i)))
  expect(screen.getByRole("button")).toHaveTextContent(/Argentina/i)
  //screen.debug()
})

//sos horrible JEST
