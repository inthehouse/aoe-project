import { http } from 'api/http';
import { Player } from 'models/Player/Player';
import { formatPlayers, createFormData } from './helpers';


export const getPlayers = async (): Promise<Player[]> => {
    const response = await http.get('');
    return formatPlayers(response.data);
};

export const submitPlayer = async (player: Player) => {
    alert("submitted");
    const formData = createFormData(player);
    const response = await http.post('/submit', formData);
    return response.data;
};
