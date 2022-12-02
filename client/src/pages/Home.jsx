import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { destroyUser, getAllUsers, getUser } from "../actions";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { CardUser } from "../components/CardUser";
import { logout } from "../features/auth/authSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const { users, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 250, flex: 1 },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      editable: true,
    },
    {
      field: "username",
      headerName: "Nombre de Usuario",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <Button
                style={{ fontSize: 12 }}
                variant="text"
                onClick={() => dispatch(getUser(params.row._id))}
              >
                Ver mas
              </Button>
            </div>
            <DeleteIcon
              color="error"
              style={{ fontSize: 30, cursor: "pointer", marginInline: 7 }}
              onClick={() => dispatch(destroyUser(params.row._id))}
            />
            <EditIcon
              color="warning"
              style={{ fontSize: 30, cursor: "pointer" }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", fontFamily: "Roboto" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <h1>Usuarios</h1>
        <Button
          color="error"
          variant="outlined"
          style={{ height: 50, alignSelf: "center" }}
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      </div>
      <Box sx={{ height: 400, width: "80%", margin: "0px auto" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row._id}
        />
      </Box>

      {user._id && (
        <div
          style={{
            width: 300,
            display: "flex",
            alignSelf: "center",
            marginTop: 40,
          }}
        >
          <CardUser user={user} />
        </div>
      )}
    </div>
  );
};
