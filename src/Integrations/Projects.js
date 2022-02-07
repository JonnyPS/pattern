import { React } from 'react';
import { useQuery } from 'react-query';

import { ProjectPage } from '../Pages/ProjectPage';

let fetchProjects = async () => {
	const res = await fetch('https://integrations.arts.ac.uk/showcase/v2/public/api/projects?_limit=100&qaStatus=qaApproved&_start=2232');
	return res.json();
}

export function Projects() {
	let {data, status} = useQuery('projects', fetchProjects);
	console.log(data)
	return (
		<div>
			{ status === 'loading' ?
				<p>Loading....</p> 
				: null
			}
			{ status === 'error' ?
				<p>Error :(</p> 
				: null
			}
			{ status === 'success' ?
				<>
					<p>List of projects</p>
					<ProjectPage data={data} />
				</>
				: null
			}
		</div>
	)
}
