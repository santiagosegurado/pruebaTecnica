import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from "@mui/icons-material/Delete";



export const CardUser = ({ user }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID: {user._id}
        </Typography>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body1">
          Username: {user.username}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteIcon color='error' style={{ fontSize:30 }} />
      </CardActions>
    </Card>
  )
}
