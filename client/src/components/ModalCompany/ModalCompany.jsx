import React, { useState } from "react";
import {Button, Alert, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {createCompany} from '../../services/company'

export default function ModalCompany() {

  const [name, setName] = useState("")
  const [foundationDate, setFoundationDate] = useState("")
  const [fiscalCode, setFiscalCode] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState(null);

  async function handleSubmit() {
    const company = {
      name: name,
      foundationDate: foundationDate,
      fiscalCode: fiscalCode,
      email: email,
    }
      const response = await createCompany(company);
      setStatus(response.status);
  }
  
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add your Company
      </Button>
      <form>
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <DialogTitle>Your Company Information:</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            name="name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            margin="dense"
            id="date"
            name="foundationDate"
            label="Foundation Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue="2021-12-12"
            InputLabelProps={{shrink: true}}
            value={foundationDate}
            onChange={(event) => setFoundationDate(event.target.value)}

          />
            <TextField
            margin="dense"
            id="fiscalCode"
            name="fiscalCode"
            label="Fiscal Code"
            type="text"
            fullWidth
            variant="standard"
            value={fiscalCode}
            onChange={(event) => setFiscalCode(event.target.value)}

          />
            <TextField
            margin="dense"
            id="email"
            name="email"
            label="E-mail"
            type="text"
            fullWidth
            variant="standard"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
        {status && (
            <Alert severity="success">
              Company created succesfully!
            </Alert>
        )}
      </Dialog>
      </form>
    </div>
  );
}