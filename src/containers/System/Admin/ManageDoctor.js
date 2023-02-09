import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ManageDoctor.scss';
import * as actions from '../../../store/actions'

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',

        }
    }

    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentHTMLL: html,
            contentMarkdown: text
        })
    }
    handleSaveContentMarkdown = () => {

    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        )
    }

    handleOnchangeDesc = (event) => {
        this.setState({
            description: event.target.value,
        })
    }
    render() {
        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'>Tạo thêm</div>
                <div className='more-infor'>
                    <div className='content-left form-group'>
                        <label>Chon bac si</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className='content-right'>
                        <label>Thong tin gioi thieu</label>
                        <textarea className='form-control' rows='4'
                            onChange={(event) => this.handleOnchangeDesc(event)}
                            value={this.state.description}
                        >
                        </textarea>
                    </div>
                </div>
                <div className='manage-doctor-editor'>
                    <MdEditor style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />
                    <button className='save-content-doctor'
                        onClick={() => this.handleSaveContentMarkdown()}
                    >luu thong tin</button>
                </div>

            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
