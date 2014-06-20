#pragma strict

class WeaponBehavior extends MonoBehaviour {

	public var attackDistance : float = 2.5f;
	public var damage : int = 30;
	public var damageType : int = 0;
	private var cameraTransform : Transform = null;

	function Awake() {
		cameraTransform = GetComponentInChildren(Camera).transform;
	}

	function Start () {

	}

	function Update () {
		if(Input.GetKeyUp(KeyCode.Mouse0)){
			Attack();
			audio.Play();
		}
				
		Debug.DrawRay(gameObject.transform.position, cameraTransform.forward, Color.green, attackDistance);
	}
	
	function Attack() {
		var hit : RaycastHit;
		
		if(Physics.Raycast(gameObject.transform.position, cameraTransform.forward, hit, attackDistance)) {		
			if(hit.collider.tag == 'enemy') {
				(hit.collider.GetComponent("Health") as IDamageable).Damage(damage, damageType);
			}
		}
	}
}