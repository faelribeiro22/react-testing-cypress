import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const PaymentSuccessPage = () => (
  <div>
    <Typography variant="h4" style={{ margin: "30px 0" }}>
      Pagamento realizado com sucesso!
    </Typography>
    <Button variant="contained" component={Link} to="/">
      Voltar
    </Button>
  </div>
);

export default PaymentSuccessPage;
