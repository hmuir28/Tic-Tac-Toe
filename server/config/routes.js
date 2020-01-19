import PlayersController from '../controllers/PlayersController';

export default (server) => {

  // Game Routes
  server.post(`/api/players`, PlayersController.setPlayer);

};
