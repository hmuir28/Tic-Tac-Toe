class GameController {
  constructor(players) {
    this.players = players;
    this.setPlayers = this.setPlayers.bind(this);
  }
  
  async setPlayers(req, res) {
    console.log(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }
};

export default new GameController;
