import React, { Component } from 'react';
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss"
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
        }
    }
    async componentDidMount() {
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevProps.language !== this.props.language) {
        // }
        // if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
        //     let allDays = this.getArrDays(this.props.language)
        //     let res = await getScheduleDoctorByDate(this.props.doctorIdFromParent, allDays[0].value)
        //     this.setState({
        //         allAvailableTime: res.data ? res.data : []
        //     })
        // }
    }
    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }
    render() {
        let { isShowDetailInfor } = this.state
        return (
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='text-address'></div>
                    <div className='name-clinic'></div>
                    <div className='detail-address'></div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfor === false &&
                        <div className='short-infor'>
                            GIA KHAM
                            <span onClick={() => this.showHideDetailInfor(true)}>
                                xem chi tiet
                            </span>
                        </div>
                    }
                    {isShowDetailInfor === true &&
                        <>
                            <div className='title-price'>gia kham</div>
                            <div className='detail-infor'>
                                <div className='price'>
                                    <span className='left'>gia kham</span>
                                    <span className='right'>200k</span>
                                </div>
                                <div className='note'>
                                    duoc uu tien voi nguoi gia nguoi co cong voi cach mang va tre nho
                                </div>
                            </div>
                            <div className='payment'>quet the</div>
                            <div className='hide-price'>
                                <span onClick={() => this.showHideDetailInfor(false)}>
                                    An bang gia
                                </span>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
