import React, { PureComponent } from 'react';
import { Form, Button, Modal } from 'antd';
import DragableModal from '../src/index';
class Home extends PureComponent {
    state = { visible: false, visiblee: false, visible3: false };

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = () => {
        this.setState({
            visible: false
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false
        });
    };
    showModal2 = () => {
        this.setState({
            visiblee: true
        });
    };

    handleOk2 = () => {
        this.setState({
            visiblee: false
        });
    };

    handleCancel2 = () => {
        this.setState({
            visiblee: false
        });
    };

    showModal3 = () => {
        this.setState({
            visible3: true
        });
    };

    handleOk3 = () => {
        this.setState({
            visible3: false
        });
    };

    handleCancel3 = () => {
        this.setState({
            visible3: false
        });
    };
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Button type="primary" onClick={this.showModal2}>
                    Open Modal2
                </Button>
                <DragableModal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} color={'blue'}>
                    <Button type="primary" onClick={this.showModal3}>
                        Open Modal3
                    </Button>
                </DragableModal>
                <DragableModal title="Basic Moda2l" width={700} visible={this.state.visiblee} onOk={this.handleOk2} onCancel={this.handleCancel2}>
                <p>Some 2.asdasdasdasdasdsadasdasdasdasdasdadadadasdasdadsa..</p>
                    <p>Some 2...</p>
                    <p>Some 2..dasdasdasda.</p><p>Some 2.asdasdasdasdasdsadasdasdasdasdasdadadadasdasdadsa..</p>
                    <p>Some 2...</p> 
                </DragableModal>
                <Modal title="Basic Modal3" visible={this.state.visible3} onOk={this.handleOk3} onCancel={this.handleCancel3}>
                <p>Some 3.sadasdasdasasasddadejfbergibsdjckd..</p>
                    <p>Some 3...</p>
                    <p>Some 3...</p><p>Some 3.sadasdasdasasasddadejfbergibsdjckd..</p>
                    <p>Some 3...</p>
                    <p>Some 3...</p><p>Some 3.sadasdasdasasasddadejfbergibsdjckd..</p>       
                </Modal>
            </div>
        );
    }
}

export default Form.create()(Home);
