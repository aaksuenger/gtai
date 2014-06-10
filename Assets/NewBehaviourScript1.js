#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	Debug.Log("test");
	Destroy(other.gameObject);
}