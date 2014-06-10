public var startMenuBackgroud : Texture;
public var startButtonText : String = "Start";
public var exitButtonText : String = "Exit";
public var startLevelName : String = "level1";
     
function OnGUI()
{
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), startMenuBackgroud);

	if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2, 150, 25), startButtonText)) 
		Application.LoadLevel(startLevelName);

	if (GUI.Button(new Rect(Screen.width / 2, Screen.height /2 + 25, 150, 25), exitButtonText)) 
		Application.Quit();
}