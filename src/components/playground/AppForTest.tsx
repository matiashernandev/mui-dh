import React, { useState } from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export default function AppForTest() {
  const [country, setCountry] = useState("")
  return (
    <FormControl>
      <InputLabel id="country">Country</InputLabel>
      <Select
        data-testid="country"
        labelId="country"
        onChange={({ target: { value } }) => setCountry(value)}
        value={country}
        style={{ minWidth: 120 }}
      >
        <MenuItem value="brasil">Brasil</MenuItem>
        <MenuItem value="argentina">Argentina</MenuItem>

        <MenuItem value="usa">United States</MenuItem>
      </Select>
    </FormControl>
  )
}
