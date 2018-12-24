import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { List } from '../component';
import { Sample } from '../modal/index'
import { fire } from '../util/Firebase'

class RestApi extends Component {
    componentDidMount = () => {
        console.log(this.props.history.location.pathname)
        // let list = fire.get_ApiItemModel()
        // console.log(list)
    }

    handleNewItemClick = () => {
        this.mo.handleOpenModal()
    }

    render() {
        return (
            <div className="column is-9" style={{ margin: '30px', maxWidth: '100%', height: 'auto !important' }}>
                {/* Hello ???
                    <UploadButton select={(e)=>{
                        this.setState({
                            file: Array.from(e.target.files).map((file)=>{
                                return `${file.name}`
                            })
                        }) 
                        // this.props.onSubmit()
                    }}/>
                    <br/>
                    {(this.state.file)} */}
                {/* <List listname="Rest API 테스트 간다!dfdfdfdfdfdfdfd"
                    item={[
                        { subject: "1번째 제목", content: "내용 간드아아", addr: "http://www.naver.com" },
                        { subject: "2번째 제목", content: "후ㅡ", addr: "http://www.naver.com" }
                    ]} /> */}
                <Sample ref={ref => this.mo = ref} />
                <button className="button" onClick={this.handleNewItemClick}> 아이템 추가 </button>
            </div>
        );
    }
}

RestApi.propTypes = {

};

export default withRouter(RestApi)