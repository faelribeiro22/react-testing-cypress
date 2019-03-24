import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { AuthBox, AuthBoxFooter, InputText } from "../../components";
import { onRegister } from "../../store/actions";

class LoginPage extends React.Component {
  state = { model: {} };

  handleChange = ({ name, value }) => {
    this.setState(prevState => ({
      model: { ...prevState.model, [name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.register(this.state.model);
  };

  render() {
    const { validation } = this.props;
    const { model } = this.state;

    return (
      <AuthBox
        footer={
          <span>
            Não possui cadastro? <Link to="/">Cadastre-se aqui</Link>
          </span>
        }
      >
        <Typography variant="h4" gutterBottom>
          Novo usuário
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <InputText
            name="name"
            label="Nome"
            onChange={this.handleChange}
            value={model.name}
            validation={validation.name}
          />
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
              Cadastrar
            </Button>
          </AuthBoxFooter>
        </form>
      </AuthBox>
    );
  }
}

const mapStateToProps = state => ({
  validation: state.registerValidation
});

const mapDispatchToProps = {
  register: onRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
