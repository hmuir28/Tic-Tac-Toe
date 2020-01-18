import GameController from '../controllers/GameController';

export default (server) => {

  // Game Routes
  server.post(`/api/game`, GameController.setPlayers)

};
