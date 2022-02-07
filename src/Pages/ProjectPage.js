import { React } from 'react';

// import the pattern library here and lay out the project page
// import the pattern library here and lay out the project page
// import the pattern library here and lay out the project page
// import the pattern library here and lay out the project page

export function ProjectPage(data) {
	console.log('projects', data.data)
	return (
		<ul>
			{ data.data.map((item, index) => <li key={index}>{item.name}</li>)}
		</ul> 
	)
}