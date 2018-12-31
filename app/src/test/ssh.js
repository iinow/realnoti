const SSH = window.require('simple-ssh')
// let arr = ['Settings', 'Sign out']
// let ham = arr.map(v=>{
//         return <span>${v}</span>
//     })
let ssh

if(!ssh){
    ssh = await new SSH({
        host: '192.168.167.11',
        user: 'pi',
        pass: 'qweqweqwe2'
    })
}
await ssh.exec(this.state.cmd, {
    out: (str) => {
        this.setState({
            res: str
        })
        console.log(str)
    }
})
// .start().reset()