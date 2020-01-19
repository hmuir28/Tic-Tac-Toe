import schema from '../config/schema';

const { game } = schema;

let gameId = String(Date.now());

// TODO: move this block of code to GameController
game.push({
  groups: [{
    group1: {
      players: [],
    },
  }],
});

class PlayersController {
  constructor() {
    // TODO: remove game array with GameController
    this.players = game[0].groups[0].group1.players;
    this.setPlayer = this.setPlayer.bind(this);
  }
  
  async setPlayer(req, res, next) {
    try {
      const body = await req.body;
      const player = {
        gameId,
        userInfo: body.player || {},
      };

      this.players.push(player);
      return res.status(200).send(this.players);
    } catch (err) {
      next(err);
    }
  }
};

export default new PlayersController();
