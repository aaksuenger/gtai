#pragma strict

class KillPlayer extends MonoBehaviour implements IKillable {
	public var gameOverLevelName : String = "GameOver";

	function Kill() {
		Application.LoadLevel(gameOverLevelName);
	}
}