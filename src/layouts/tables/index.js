/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import financialTableData from "layouts/tables/data/financialTableData";

function Tables() {
  const { columns, rows } = financialTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          {/* Section: Saldo dan Periode */}
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3} px={3}>
                <Grid container spacing={3} alignItems="center">
                  {/* Saldo Saat Ini */}
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Saldo saat ini (Rp)"
                      value="565,253"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>

                  {/* Dropdown Periode */}
                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>Bulan</InputLabel>
                      <Select value="January" label="Bulan">
                        <MenuItem value="January">January</MenuItem>
                        <MenuItem value="February">February</MenuItem>
                        <MenuItem value="March">March</MenuItem>
                        {/* Tambahkan opsi lainnya sesuai kebutuhan */}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>Tahun</InputLabel>
                      <Select value="2017" label="Tahun">
                        <MenuItem value="2017">2017</MenuItem>
                        <MenuItem value="2018">2018</MenuItem>
                        <MenuItem value="2019">2019</MenuItem>
                        {/* Tambahkan opsi lainnya sesuai kebutuhan */}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Tombol Tampilkan */}
                  <Grid item xs={12} sm={2}>
                    <Button variant="contained" color="info" fullWidth>
                      Tampilkan
                    </Button>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>

          {/* Section: Cetak Laporan */}
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3} px={3}>
                <Grid container spacing={3} alignItems="center">
                  {/* Saldo Periode */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Saldo Periode (Rp)"
                      value="565,253"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>

                  {/* Tombol Cetak PDF */}
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="success"
                      fullWidth
                      style={{ height: "100%" }}
                    >
                      Cetak PDF
                    </Button>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>

          {/* Section: Tabel Keuangan */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Tabel Keuangan
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
