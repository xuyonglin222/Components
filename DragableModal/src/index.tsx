import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';
import { DragableModalProps } from './props';
import 'antd/lib/modal/style/index.css'
import '../style/index.scss'
class DragableModal extends Component<DragableModalProps>{
    constructor(props) {
        super(props);
        this.state = {
            relativeX: 0,
            relativeY: 0,
            downTime: null
        };
        this.dragDom = null;
        this.el = document.getElementsByTagName('body')[0];
    }

    componentWillReceiveProps(nextProps) {
        const { visible } = nextProps;
        if (visible && this.props.visible !== visible) {
            this.upZIndex();
        }
    }

    shouldComponentUpdate(nextProps: DragableModalProps) {
        if (this.props.visible == nextProps.visible) {
            return false
        }
        return true
    }

    componentDidMount() {
        this.calCenter();
        this.initEventListener();
    }

    down = (e) => {
        const { clientX, clientY } = e;
        const { offsetLeft, offsetTop } = this.dragDom;
        this.downTime = new Date().getTime();
        this.setState({
            relativeX: clientX - offsetLeft,
            relativeY: clientY - offsetTop
        })
        this.dragDom.addEventListener('mousemove', this.move);
    }

    move = (e) => {
        const { clientX, clientY } = e;
        const { relativeX, relativeY } = this.state;
        const { style } = this.dragDom;
        style.left = clientX - relativeX + 'px';
        style.top = clientY - relativeY + 'px';
    }

    up = () => {
        this.dragDom.removeEventListener('mousemove', this.move);
        this.setState({
            relativeX: 0,
            relativeY: 0
        });
        const current = new Date().getTime();
        if (current - this.downTime >= 200) {
            this.upZIndex();
        }
    }

    upZIndex = () => {
        const zIndex = this.getMaxDragModalZIndex();
        const sty: any = window.getComputedStyle(this.dragDom) || {};
        if (sty.zIndex <= zIndex) {
            this.dragDom.style.zIndex = zIndex + 1;
        }
    }

    getMaxDragModalZIndex = () => {
        const dragModals = document.querySelectorAll('.dragable-modal-container');
        const zIndexs: any = [];
        dragModals.forEach((dragModal) => {
            const { zIndex } = window.getComputedStyle(dragModal) || {};
            zIndexs.push(zIndex);
        });
        return Math.max(...zIndexs);
    }


    initEventListener = () => {
        const { down, up } = this;
        this.dragDom.addEventListener('mousedown', down);
        this.dragDom.addEventListener('mouseup', up);
    }

    calCenter = () => {
        let windowWidth = document.body.clientWidth;
        const { style } = this.dragDom;
        const sty = this.dragDom.querySelector('.self-modal').style;
        style.left = (windowWidth - sty.width.split('px')[0]) / 2 + 'px';
    }

    renderModal = () => {
        const { children } = this.props;

        return <div className="dragable-modal-container" ref={ref => this.dragDom = ref} style={{ maxHeight: '95%', overflow: 'scroll' }}>
            <Modal className="self-modal" {...this.props} mask={false} maskClosable={false} getContainer={false}>
                {children}
            </Modal>
        </div>
    }

    componentWillUnmount() {
        const { down, move, up } = this;
        this.dragDom.removeEventListener('mousedown', down);
        this.dragDom.removeEventListener('mousemove', move);
        this.dragDom.removeEventListener('mouseup', up);
    }

    render() {
        return this.el && ReactDOM.createPortal(this.renderModal(), this.el);
    }
}

export default DragableModal;