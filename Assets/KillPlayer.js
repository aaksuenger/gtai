#pragma strict
public var gameOverLevelName : String = "gameover";

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	if(other.tag == "Player")
		Application.LoadLevel(gameOverLevelName);
}