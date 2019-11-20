# sfe-dragable-modal

# 基于antd的可拖拽的Modal

# 除了mask， maskClosable，getContainer的值强制为false， antd的modal的其他props无缝接入

## 使用

<strong style="color:red">PS： 请确保已经安装React/Antd包</strong>

```bash
dnpm i @esp/sfe-item-generator -S
```

## 提示

* 使用@didi域的npm，请升级为@esp域

* 之后统一维护@esp域，两者使用方式一致


### demo
```
import React, { PureComponent } from 'react';
import { Form, Button, Modal } from 'antd';
import DragableModal from '../src/index';
class Home extends PureComponent {
    state = { visible: false };

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
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <p>Some 3.sadasdasdasasasddadejfbergibsdjckd..</p>
                    <p>Some thing...</p>
                    <p>Some thing...</p><
                    <p>Some thing...</p>
                </Modal>
            </div>
        );
    }
}

```