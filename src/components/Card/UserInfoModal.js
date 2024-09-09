// UserInfoModal.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { updateCartWithUserInfo } from '../../actions/carttwo.actions';

function UserInfoModal({ open, onClose, userInfo, setUserInfo, cartItems }) {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cartId = "ID_DU_PANIER";
    await dispatch(updateCartWithUserInfo(cartId, userInfo));
    onClose();
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-info-modal-title"
      aria-describedby="user-info-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ ...modalStyle }}>
        <Typography id="user-info-modal-title" variant="h6" component="h2">
          Confirmation
        </Typography>
        {cartItems?.map((item) => (
          <List key={item._id}>
            <ListItem>
              <ListItemText primary={`${item.product.name} x ${item.quantity}`} />
            </ListItem>
          </List>
        ))}
        <TextField label="Nom" variant="outlined" name="name" value={userInfo.name} onChange={handleUserInfoChange} fullWidth />
        <TextField label="Prénom" variant="outlined" name="surname" value={userInfo.surname} onChange={handleUserInfoChange} fullWidth />
        <TextField label="Email" variant="outlined" name="email" value={userInfo.email} onChange={handleUserInfoChange} fullWidth />
        <TextField label="Numéro de téléphone" variant="outlined" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleUserInfoChange} fullWidth />
        <TextField label="Dimensions souhaités" variant="outlined" name="remarque" value={userInfo.remarque} onChange={handleUserInfoChange} fullWidth />
        <TextField label="Message" variant="outlined" name="message" multiline rows={4} value={userInfo.message} onChange={handleUserInfoChange} fullWidth />
        <Button type="submit" variant="contained" sx={{ mt: 2, bgcolor: 'primary.main' }}>Demande Devis</Button>
      </Box>
    </Modal>
  );
}

export default UserInfoModal;
