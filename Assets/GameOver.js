public var gameOverTexture : Texture;
public var restartButtonText : String = "Start";
public var exitButtonText : String = "Exit";
public var startLevelName : String = "level1";

public var ButtenWidth : int = 200;
public var ButtonHeight : int = 50;
     
function OnGUI() {
    GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), gameOverTexture);

	if (GUI.Button(new Rect((Screen.width - ButtenWidth)/ 2, Screen.height /2, ButtenWidth, ButtonHeight), restartButtonText)) 
		Application.LoadLevel(startLevelName);

	if (GUI.Button(new Rect((Screen.width - ButtenWidth)/ 2, Screen.height /2 + ButtonHeight + 20, ButtenWidth, ButtonHeight), exitButtonText)) 
		Application.Quit();
}