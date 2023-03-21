import { Navigate, useParams } from 'react-router-dom';
import {
  useDeleteContactsListMutation,
  useGetContactsCardQuery,
} from 'redux/contacts';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import Notiflix from 'notiflix';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactProfile = () => {
  const { id } = useParams();

  const { data: contact, isFetching } = useGetContactsCardQuery(id);

  const [contactDelete, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteContactsListMutation();

  return (
    <Card sx={{ width: 350 }}>
      {isDeleting &&
        Notiflix.Loading.standard('Loading...', {
          backgroundColor: 'rgba(0,0,0,0.8)',
        })}
      {!isDeleting && Notiflix.Loading.remove()}
      {contact && (
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={contact.avatar}
            alt={contact.name}
            sx={{ height: 350 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {contact.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {contact.number}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}

      <CardActions>
        <IconButton
          onClick={() => contactDelete(id)}
          disabled={isDeleting}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
        {isDeleted && <Navigate to="/" replace />}
        {isDeleted && Notiflix.Notify.info(`${contact.name} deleted`)}
      </CardActions>
      {isFetching &&
        Notiflix.Loading.standard('Loading...', {
          backgroundColor: 'rgba(0,0,0,0.8)',
        })}
      {!isFetching && Notiflix.Loading.remove()}
    </Card>
  );
};
