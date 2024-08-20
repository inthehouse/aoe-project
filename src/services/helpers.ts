import { Player } from "models/Player/Player";

// to add ids and images to the players. just wanted it to be a masonry layout so im adding images.
// and adding more text to the asset so we can see the ... in the cards
export const formatPlayers = (players: any[]): Player[] => {
    return players.map((player, index) => {
        const hasImage = Math.random() > 0.4;
        return {
            id: index + 1,
            realName: player.realName,
            playerName: player.playerName,
            asset: `${player.asset}. ${player.asset}`,
            imageURL: hasImage ? 'https://robohash.org/numquamevenieteos.png?size=50x50&set=set1' : ''
        };
    });
};

// Function to create FormData from a Player object
export const createFormData = (player: Player): FormData => {
    const formData = new FormData();
    formData.append('realName', player.realName);
    formData.append('playerName', player.playerName);
    formData.append('asset', player.asset);
    formData.append('imageURL', player.imageURL || '');
    return formData;
};
