import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { CoinForm } from '../../components';

interface gridData{
  data:{
    id?:string;
  }
}


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, minWidth: 90 },
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'price',
    width: 150,
    editable: true,
  },
  {
    field: 'ticker',
    headerName: 'ticker',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'volume',
    headerName: 'volume',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'market_cap',
    headerName: 'market_cap',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'percent_change',
    headerName: 'percent_change',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'description',
    type: 'number',
    width: 110,
    editable: true,
  },
];

export const DataTable =  () => {
  let { coinData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    serverCalls.delete(`${gridData[0]}`)
    getData()
  }
  console.log(gridData)

    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Coins In Wallet</h2>
        <DataGrid
          rows={coinData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
        <Button onClick={handleOpen} color='primary'>Update</Button>
        <Button onClick={deleteData} color='warning'>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Coin</DialogTitle>
          <DialogContent>
            <DialogContentText>Coin id: {gridData[0]}</DialogContentText>
              <CoinForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
      </div>
    );
  }