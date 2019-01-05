import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { List } from '../component';
import { Sample } from '../modal/index'
import { Fire } from '../util/Firebase'
const electron = require('electron')
// electron.screen.getPrimaryDisplay()
// electron.screen.getAllDisplays()

class RestApi extends Component {

    state = {
        item: null
    }

    componentDidMount = async () => {
        console.log(this.props.history.location.pathname)
        let list = await Fire.Instance.get_ApiItemModel()
        this.setState({
            item: list
        })
        console.log(list)
        console.log(electron)
    }

    handleNewItemClick = () => {
        this.mo.handleOpenModal()
    }

    render() {
        return (
            <div className="container-fluid" style={{ margin: '30px'}}>
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
                <button className="button" onClick={this.handleNewItemClick}> 아이템 추가 </button>
                <List
                    listname=""
                    item={this.state.item}/>
                <Sample ref={ref => this.mo = ref} />
            </div>
        );
    }
}

RestApi.propTypes = {

};

export default withRouter(RestApi)