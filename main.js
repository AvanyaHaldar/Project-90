function addUser() {
    player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location("index2.html");
}