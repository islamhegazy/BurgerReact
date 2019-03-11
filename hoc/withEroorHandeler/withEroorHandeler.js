import React, {Component} from 'react'
import Modal from './../../components/UI/Modal/Modal';
import Aux from './../auxs';
const withEroorHandeler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.requestInterceptors = axios
                .interceptors
                .request
                .use(req => {
                    this.setState({error: null});
                    return req;
                });
            this.responseInterceptors = axios
                .interceptors
                .response
                .use(res => res, error => {
                    this.setState({error: error})
                });
        }
        componentWillUnmount() {
            // section10 --> lec9
            console.log('will unmount' , this.requestInterceptors,this.responseInterceptors)
            axios.interceptors.request.eject(this.requestInterceptors);
            axios.interceptors.response.eject(this.responseInterceptors);
        }
        errorConfirmedHandeler = () => {
            this.setState({error: null})
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandeler}>
                        {this.state.error
                            ? this.state.error.message
                            : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}

export default withEroorHandeler
