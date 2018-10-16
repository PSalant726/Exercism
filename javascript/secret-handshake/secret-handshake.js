class SecretHandshake {
  constructor(hexHandshake) {
    if (typeof hexHandshake !== 'number') {
      throw new Error('Handshake must be a number');
    }

    this.handshake = parseInt(hexHandshake, 16).toString(2);
    this.commandArr = this.getCommands();
  }

  commands() {
    return this.commandArr;
  }

  getCommands() {
    const commandArr = [];

    return commandArr;
  }
}

module.exports = SecretHandshake;
