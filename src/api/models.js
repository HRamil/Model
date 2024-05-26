import axios from 'axios';

const API_URL = 'https://zahiriyumrukla.online/api';

export const fetchModelsData = async () => {
    try {
        const response = await axios.get(`${API_URL}/model/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};