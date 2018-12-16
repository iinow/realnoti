import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RestApi extends Component {
    componentDidMount = () => {
        console.log(this.props.history.location.pathname)
    }

    render() {
        return (
            <div style={{ margin: '30px' }}>
                Sibal.....
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
                <List name="Rest API 테스트 간다!dfdfdfdfdfdfdfd"
                    item={[
                        { subject: "1번째 제목", content: "내용 간드아아", addr: "http://www.naver.com" },
                        { subject: "2번째 제목", content: "후ㅡ", addr: "http://www.naver.com" }
                    ]} />
            </div>
        );
    }
}

RestApi.propTypes = {

};

export default RestApi;