export const c = {
	light: {
		main: '#eeeeee',
		add: '#cccccc'
	},

	dark: {
		main: '#080808',
		add: '#222222',
		addLight: '#666666'
	},

	blue: {
		main: '#002f65',
		dark: '#001428',
		light: '#106bbb'
	},

	yellow: {
		main: '#ffC300',
		add: '#ff8400'
	},

	white: '#ffffff',
	black: '#000000',
	tp: '#00000000',

	getTp: (color, value) => {
		return color + ('0'+(Math.round(256*value)).toString(16)).substr(-2);
	}
}

export const theme = {
	dark: true,
	light: false,

	pickColor: (theme, colorDark, colorLight) => {
		return theme === true ? colorDark : colorLight;
	}
}

export const dir = {
	left: true,
	right: false
}