import store from "../store.js"
export default{
    store,
    render(){
        return (
            <div className="footer">
                <h1>WRITTEN BY JTODOS {store.state.count}</h1>
            </div>
        )
    }
}