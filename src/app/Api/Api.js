import * as axios from 'axios';

export const getArticles = async () => {
	return await axios.get('/articles.php',
		{
			method: 'GET',
			withCredentials: true
		})
}

export const getChannels = () => {
	return axios.get('/channels.php', 
		{
			method: 'GET',
			withCredentials: true
		})
}

export const getPage = (id) => {
	return axios.get('/page.php', 
		{
			method: 'GET',
			withCredentials: true
		})
}
