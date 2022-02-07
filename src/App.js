import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const queryClient = new QueryClient()

// import pages 
import { Projects } from './Integrations/Projects';

function App() {
  return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/projects" element={<Projects />} />
          <Route path="/" element={<p>You are on the homepage</p>} />
				</Routes>
			</Router>
	</QueryClientProvider>
  );
}

export default App;
