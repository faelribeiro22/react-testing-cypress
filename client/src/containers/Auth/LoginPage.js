import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { AuthBox, AuthBoxFooter, InputText } from "../../components";
import { onLogin } from "../../store/actions";

class LoginPage extends React.Component {
  state = { model: {} };

  handleChange = ({ name, value }) => {
    this.setState(prevState => ({
      model: { ...prevState.model, [name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.authenticate(this.state.model);
  };

  render() {
    const { model } = this.state;
    const { validation } = this.props;

    return (
      <AuthBox
        underLink={
          <span>
            Não possui cadastro? <Link to="/register">Cadastre-se aqui</Link>
          </span>
        }
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <InputText
            name="login"
            label="Usuário"
            onChange={this.handleChange}
            value={model.login}
            validation={validation.login}
          />
          <InputText
            name="password"
            label="Senha"
            onChange={this.handleChange}
            value={model.password}
            validation={validation.password}
            isPassword
          />
          <AuthBoxFooter>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              Entrar
            </Button>
          </AuthBoxFooter>
        </form>
      </AuthBox>
    );
  }
}

const mapStateToProps = state => ({
  validation: state.loginValidation
});

const mapDispatchToProps = {
  authenticate: onLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
