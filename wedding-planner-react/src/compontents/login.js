class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
          };
      
    }
    handleChange(){
        const target = event.target;
        const email = target.email;
        const password = target.password
    }
    render(){
        return(
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label><br />
                  <input onChange={this.handleChange} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                </div>
                <div className="form-group"><br />
                  <label htmlFor="Password">Password</label><br />
                  <input onChange={this.handleChange} type="password" name="password" className="form-control" id="password" placeholder="password" required/>
                </div><br />
                <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
              </form>
        )
    }
}
export default Login;