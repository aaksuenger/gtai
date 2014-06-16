#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	Debug.Log('test');
}

function onCollisionEnter (other : Collision) {
	Debug.Log('test');
}

function onControllerColliderHit (other : ControllerColliderHit) {
	Debug.Log('test');
}