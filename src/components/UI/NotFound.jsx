import { Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <Stack sx={{ marginTop: "150px", alignItems: "center" }}>
      <CloseIcon color="secondary" sx={{ width: "150px", height: "150px" }} />
      <Typography variant="h3" color="initial">
        Page not found
      </Typography>
      <NavLink to="/">Main Page</NavLink>
    </Stack>
  )
}

export default NotFound