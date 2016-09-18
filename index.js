// import Reducer from "./app/reducer.js"

console.log('-->> begin redux <<--', Math.random())

// import {Notification, Profile, Stream, StreamList, Search, SearchList, Header, LandingMain} from "./app/component.js"
import * as Component from "./app/component.js"
import createHashHistory from 'history/lib/createHashHistory'

// import store redux
import store from "./app/store.js"

const Router = ReactRouter.Router
const Route = ReactRouter.Route
const browserHistory = ReactRouter.browserHistory
const formReducer = ReduxForm.reducer
const Provider = ReactRedux.Provider
const IndexRedirect = ReactRouter.IndexRedirect

const appHistory = ReactRouter.useRouterHistory(createHashHistory)({queryKey: false})

const toRenderLandingMain = "render-react"

ReactDOM.render(
	<Provider store={store}>
		<Router history={appHistory}>
			<Route path="/" component={Component.IndexApp}>
				<Route path="dashboard" component={Component.IndexDashboard}>
					<IndexRedirect to="gallery" />
					<Route path="gallery" component={Component.DashboardGallery} />
					<Route path="testimoni" component={Component.DashboardTestimoni} />
				</Route>
			</Route>
			<Route path="logout" component={Component.IndexLogout} />
			<Route path="login" component={Component.IndexLogin} />
			<Route path="register" component={Component.IndexRegister} />
			<Route path="*" component={Component.IndexToken}/>
		</Router>
	</Provider>,
	document.getElementsByClassName(toRenderLandingMain)[0]
)