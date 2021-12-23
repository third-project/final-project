import React, { useState, useEffect } from "react";
import {Button, Alert, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {createCompany} from '../../services/company'

export default function ModalCompany({user, onSubmitSuccess, getMyEmployees }) {

  const [name, setName] = useState("")
  const [foundationDate, setFoundationDate] = useState("")
  const [fiscalCode, setFiscalCode] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("");
  const [error, setError] = useState("")

  useEffect(()=>{
    if (status === true){    
      setName("")
      setFiscalCode("")
      setFoundationDate("")
      setEmail("")
      onSubmitSuccess()
    }
  }, [status, onSubmitSuccess])

  function timer() {
    setTimeout(()=>setStatus(null), 3500);
  }

  async function handleSubmit() {
    const company = {
      name: name,
      foundationDate: foundationDate,
      fiscalCode: fiscalCode,
      email: email,
      userId: user._id
    }
      const response = await createCompany(company);
      setStatus(response.status);
      setError(response.errorMessage)
      
      if (response.status === true) {
        onSubmitSuccess()
        timer()
      }
  }
  
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <div>
      <Button color="secondary" variant="outlined" onClick={handleClickOpen}>
        Add your Company
      </Button>
      <form>
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <DialogTitle>Your Company Information:</DialogTitle>
        <DialogContent>
          <TextField
            color="secondary"
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
            color="secondary"
            margin="dense"
            id="date"
            name="foundationDate"
            label="Foundation Date"
            type="date"
            fullWidth
            variant="standard"
            InputLabelProps={{shrink: true}}
            value={foundationDate}
            onChange={(event) => setFoundationDate(event.target.value)}
          />
            <TextField
            color="secondary"
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
            color="secondary"
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
          <Button color="secondary" onClick={handleSubmit}>Save</Button>
        </DialogActions>
        {status === true && 
            <Alert severity="success">
              Company created succesfully!
            </Alert>
        }
        {status === false &&
        <Alert severity="error">
              {error}
        </Alert>
        }
      </Dialog>
      </form>
    </div>
  );
}