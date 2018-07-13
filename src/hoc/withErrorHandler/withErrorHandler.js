import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterveptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterveptor);
      axios.interceptors.response.eject(this.resInterveptor);
    }

    errorConfirmhandler = () => {
      this.setState({error: null});
    }

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmhandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
            <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  }
}


export default withErrorHandler;
