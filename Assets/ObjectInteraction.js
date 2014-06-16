#pragma strict

public var forwardDistance : int = 4;
public var upDistance : int = 2;

var currentObject : GameObject = null;

function Start () {

}

function Update () {

}

function OnControllerColliderHit (hit : ControllerColliderHit) {
	if(hit.gameObject.tag == 'pickup') {
		
		if(currentObject != null){
			currentObject.gameObject.transform.position = gameObject.transform.position + (gameObject.transform.forward * forwardDistance)+ (gameObject.transform.up * upDistance);
			currentObject.gameObject.transform.rotation = gameObject.transform.rotation;		
			currentObject.gameObject.SetActive(true);
		}
		
		hit.gameObject.SetActive(false);
		currentObject = hit.gameObject;
	}
}