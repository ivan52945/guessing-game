class GuessingGame {
	constructor() {
	}

	setRange(min, max) {
		this.min = min;
		this.max = max;
	}
	guess() {
		return Math.round((this.min + this.max) / 2);
	}

	lower() {
		this.max -= Math.floor((this.max - this.min) / 2);
	}

	greater() {
		this.min += Math.ceil((this.max - this.min) / 2);
	}
}

module.exports = GuessingGame;
