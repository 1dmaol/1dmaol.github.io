import { createContext } from 'react';

const ProjectContext = createContext(
	{
		feature: null,
		setFeature: () => { },
		option: {
			theme: null,
			scenary: null
		},
		setOption: () => { },
	}
);

export default ProjectContext;