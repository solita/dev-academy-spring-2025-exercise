import svelte from './svelte.svg?raw';

export enum Icons {
	Svelte,
}

const getIcon = (icon: Icons) => {
	switch (icon) {
		case Icons.Svelte:
			return svelte;
	}
};

export { getIcon, svelte };


