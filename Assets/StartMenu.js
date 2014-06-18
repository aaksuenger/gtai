public var startMenuBackgroud : Texture;
public var startButtonText : String = "Start";
public var exitButtonText : String = "Exit";
public var startLevelName : String = "level1";

public var ButtenWidth : int = 200;
public var ButtonHeight : int = 50;
     
function OnGUI()
{
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), startMenuBackgroud);

	if (GUI.Button(new Rect((Screen.width - ButtenWidth)/ 2, Screen.height /2, ButtenWidth, ButtonHeight), startButtonText)) 
		Application.LoadLevel(startLevelName);

	if (GUI.Button(new Rect((Screen.width - ButtenWidth)/ 2, Screen.height /2 + ButtonHeight + 20, ButtenWidth, ButtonHeight), exitButtonText)) 
		Application.Quit();
}